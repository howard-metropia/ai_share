# SPEC.md

## 專案簡介

本專案為一個 API 伺服器，使用 Node.js（或 Python/FastAPI，請依團隊技術棧調整）實作，並以 Docker 管理 MongoDB 資料庫。主要功能為管理 customer（顧客）資料，並於註冊時自動計算顧客地址至台北市的距離（公里與英里）。

---

## 架構概述

- **API 伺服器**：Node.js（Express）或 Python（FastAPI）
- **資料庫**：MongoDB（以 Docker 啟動）
- **距離計算**：可用 Google Maps API、OpenStreetMap Nominatim + Haversine 公式，或第三方 geocoding/distance API
- **部署**：以 docker compose 管理服務

---

## customer 集合欄位設計

| 欄位         | 型別   | 必填 | 說明                         |
|--------------|--------|------|------------------------------|
| _id          | ObjectId | 否   | MongoDB 自動產生             |
| name         | String | 是   | 顧客姓名（中文）             |
| city         | String | 是   | 城市                         |
| address      | String | 是   | 地址（完整地址）             |
| distance_km  | Number | 否   | 地址至台北市距離（公里）     |
| distance_mile| Number | 否   | 地址至台北市距離（英里）     |
| created_at   | String | 否   | ISO 8601 時間戳              |
| updated_at   | String | 否   | ISO 8601 時間戳              |

---

## API 路由設計

### 1. 建立顧客
- **POST /api/customer**
- **Body 範例：**
```json
{
  "name": "王小明",
  "city": "新竹市",
  "address": "新竹市東區光復路二段101號"
}
```
- **流程：**
  1. 驗證 name、city、address 必填且為字串。
  2. 以 address 進行 geocoding，取得經緯度。
  3. 計算該點至台北市（預設台北車站座標：25.0478, 121.5170）距離，分別以公里與英里存入 distance_km、distance_mile。
  4. 寫入 MongoDB。
  5. 回傳完整 customer 物件。

### 2. 查詢顧客（全部/條件）
- **GET /api/customer**
- **GET /api/customer/:id**
- **GET /api/customer?city=新竹市**

### 3. 更新顧客
- **PUT /api/customer/:id**
- **Body 可包含 name、city、address 任一欄位**
- 若 address 有變更，需重新計算距離欄位

### 4. 刪除顧客
- **DELETE /api/customer/:id**

---

## 資料驗證規則
- name、city、address 皆為必填字串，name 須為中文（可用正則 `/[\u4e00-\u9fa5]+/` 驗證）。
- address 需為有效地址，若 geocoding 失敗則回傳錯誤。
- city 可選擇限制為台灣主要城市，或自由輸入。

---

## 距離計算說明
- address 先 geocoding 取得經緯度（lat, lng）。
- **本專案採用 Google Maps Geocoding API 進行地址轉經緯度**：
  - 需於環境變數設置 `GOOGLE_API_KEY`
  - 以 HTTP 請求呼叫 `https://maps.googleapis.com/maps/api/geocode/json?address=<地址>&key=<API_KEY>`
  - 解析回傳的經緯度資訊
- 台北市參考座標：25.0478, 121.5170（台北車站）
- 使用 Haversine 公式計算兩點間距離：
  - 公里：distance_km
  - 英里：distance_mile = distance_km * 0.621371
- 可用 npm 套件（如 `axios` 進行 API 請求，`geolib` 計算距離）

---

## Geocoding 與 Google API 相關設計
- **環境變數**：
  - `GOOGLE_API_KEY`：Google Maps Geocoding API 金鑰
- **API 流程補充**：
  1. 接收註冊/更新請求時，先驗證 address 欄位
  2. 以 Google Maps Geocoding API 查詢經緯度
  3. 若查詢失敗（如 API 回傳 ZERO_RESULTS 或 OVER_QUERY_LIMIT），回傳 422 或 429 錯誤
  4. 查詢成功後，計算距離並寫入資料庫
- **錯誤處理補充**：
  - Google API 回傳錯誤（如金鑰無效、流量超限）時，回傳對應錯誤訊息與 HTTP 狀態碼

---

## 錯誤處理
- 所有 API 回應皆為 JSON 格式，包含 success、message 欄位。
- 常見錯誤：
  - 欄位缺漏或格式錯誤 → 400 Bad Request
  - 地址無法 geocoding → 422 Unprocessable Entity
  - 查無資料 → 404 Not Found
  - 伺服器錯誤 → 500 Internal Server Error

---

## Swagger 文件建議
- 以 OpenAPI 3.0 撰寫，所有端點、參數、回應皆有詳細描述與範例。
- 提供線上互動測試（/docs 路徑）。

---

## docker compose 範例

```yaml
version: '3.8'
services:
  mongodb:
    image: mongo:6
    container_name: my-mongo
    ports:
      - "27017:27017"
    volumes:
      - ./data/mongo:/data/db
    networks:
      - backend

  api:
    build: ./api
    container_name: my-api
    ports:
      - "3000:3000"
    environment:
      - MONGO_URI=mongodb://mongodb:27017/customer_db
      - GOOGLE_API_KEY=你的GoogleAPI金鑰
    depends_on:
      - mongodb
    networks:
      - backend

networks:
  backend:
    driver: bridge
```

---

## 其他建議
- 可於 `api/` 目錄下撰寫 Dockerfile，安裝所需套件（如 express, mongoose, node-geocoder 等）。
- 測試腳本可參考 `tests/api/`，自動化驗證 CRUD 與距離欄位正確性。
- 註冊/更新時如遇 geocoding API 限額，建議加上快取或錯誤提示。

---

## Google Geocoding API 整合與測試說明

### 1. 金鑰管理
- 於 `tests/api/.env` 檔案中設置：
  ```
  GOOGLE_API_KEY=你的GoogleAPI金鑰
  ```
- API 伺服器與測試腳本皆可自動讀取此金鑰。

### 2. 純 Google Geocoding API 測試腳本
- 路徑：`tests/api/test_google_geocoding.js`
- 功能：
  - 直接呼叫 Google Maps Geocoding API，取得指定地址（如新竹市、台中市）之經緯度
  - 計算該點至台北車站（25.0478, 121.5170）距離（公里與英里）
  - 讀取 .env 金鑰，無需依賴本地 API 伺服器
- 執行方式：
  ```bash
  node tests/api/test_google_geocoding.js
  ```
- 範例輸出：
  ```
  [PASS] 新竹市 (新竹市東區光復路二段101號) => (24.7971749,120.9955506) 距離台北: 59.51 km / 36.98 mi
  [PASS] 台中市 (台中市西屯區台灣大道三段99號) => (24.161886,120.6467736) 距離台北: 132.08 km / 82.07 mi
  ```

### 3. API 呼叫流程與回應格式
- 以 `axios` 呼叫 Google Geocoding API：
  ```js
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${GOOGLE_API_KEY}`;
  const res = await axios.get(url);
  // 取得經緯度
  const loc = res.data.results[0].geometry.location;
  ```
- 距離計算採用 Haversine 公式，單位為公里與英里。
- 若金鑰無效或 API 回傳錯誤，腳本會顯示錯誤訊息。

### 4. 實作建議
- 測試腳本可擴充多組地址，驗證 geocoding 與距離計算正確性。
- 建議於 CI/CD 或本地開發時定期驗證金鑰有效性與 API 回應。

---

如需更詳細設計，請依據團隊技術棧與需求擴充本文件。

## 開發任務分解（Task Breakdown）

1. **建置 Docker 環境與 MongoDB**
   - 撰寫 docker compose 檔，啟動 MongoDB 與 API 伺服器。

2. **實作 customer CRUD API**
   - 設計 customer schema，實作新增、查詢、更新、刪除 API。

3. **整合 Google Geocoding 與距離計算**
   - 新增/更新時呼叫 Google API 取得經緯度，計算距離並存入欄位。

4. **撰寫自動化測試腳本**
   - 實作 API 及 Google Geocoding 測試，驗證資料正確性與流程完整性。

---

## 可單元測試的開發步驟（Unit-Testable Task Breakdown）

1. **customer schema/model 驗證測試**
   - 驗證 customer 欄位規則（如 name 必須為中文、address 必填）
   - 可用 Jest/Mocha 針對 schema 做單元測試

2. **CRUD handler/service function 測試**
   - 對 create、read、update、delete 等業務邏輯 function 做單元測試（可 mock DB）

3. **geocodeAddress() function 測試（mock Google API）**
   - 單元測試 geocoding function，模擬 Google API 回傳

4. **calculateDistance() function 測試（純數學）**
   - 單元測試距離計算公式，輸入經緯度，驗證公里/英里結果

---

每個步驟皆可撰寫單元測試，確保邏輯正確、易於維護。

---

## 簡化原則與設計建議（Simplicity Guideline）

1. **API 認證與安全性**
   - 不加任何認證，所有人皆可呼叫 API（僅限內部或開發用途）。
   - 若未來需上線，僅於 docker compose 設定防火牆或內網限制。

2. **部署**
   - 只考慮本地 docker compose 部署，不考慮正式環境 domain/https。
   - log 直接輸出至 console 或簡單檔案。

3. **Google API 流量與錯誤處理**
   - 若 geocoding 失敗或超過流量，直接回傳錯誤訊息（422/429），不做重試或快取。
   - 不考慮降級方案。

4. **API 文件**
   - 只需簡單的 Swagger UI（OpenAPI 3.0），自動生成即可，不需多語言或手動維護。

5. **測試**
   - 僅撰寫 happy path（正常流程）自動化測試。
   - 不強制異常/邊界測試。

6. **資料驗證**
   - city 欄位自由輸入，不做白名單或自動校正。
   - name 只需正則驗證為中文，address 只驗證為非空字串。

---

**本設計適用於：**
- Demo、POC、內部工具、教學範例
- 不需考慮正式上線、資安、效能、異常處理等進階需求

如需進階功能，請於後續版本再行擴充。

## /health API 回應格式（第一步驗證）

- 路徑：`GET /health`
- 預期回應：
  ```json
  {
    "success": true,
    "message": "API server is running."
  }
  ```
- 用於確認 API 服務已正常啟動。 