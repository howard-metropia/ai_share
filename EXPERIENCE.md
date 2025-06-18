# EXPERIENCE.md

本文件彙整本專案所有主要文件，並說明各自內容、用途與查閱重點，協助新進人員或審查者快速理解專案文件結構與知識脈絡。

---

## 專案目錄結構說明

本專案目錄結構分為「根目錄」與「docs 文件資料夾」兩大區塊：

- **根目錄**：
  - 主要存放專案原始碼、設定檔、Docker 與 CI/CD 相關檔案（如 `package.json`、`Dockerfile`、`.gitlab-ci.yml` 等），以及本文件 `EXPERIENCE.md`。
  - 根目錄下的各專案資料夾（如 `nodejs/`、`python/` 等）分別對應不同語言或服務的實作程式碼。

- **docs 資料夾**：
  - 專門用於存放所有技術文件、設計文檔、需求規格、API 說明、驗收標準、架構圖、最佳實踐等。
  - 其中包含多份 Markdown 文件（如 `API.md`、`SPEC-TECH-DESIGN.md`、`DEPLOYMENT_DIAGRAM.md` 等），以及 `images/` 子目錄用於存放 UML、架構圖等圖片資源。
  - docs 目錄下的文件皆為專案知識、設計、驗收、協作與維運的依據，與原始碼分離，便於文件維護與查閱。

---

## 文件一覽與說明

### 1. `CHECK_LIST.md`
- **內容**：專案職位技能與交付成果檢查清單，涵蓋 Node.js、Python、資料庫、雲端、CI/CD、AI、架構設計、協作等多面向。
- **用途**：快速檢查專案是否達成各項技術與流程要求，並標註已完成、文件補充或外部專案連結。

### 2. `CHECK_LIST_EXPLAIN.md`
- **內容**：對 `CHECK_LIST.md` 各項目逐條詳細說明，並引用相關技術文件（如 API、設計、部署、驗收等）。
- **用途**：佐證每一檢查項的實作細節、證明與文件來源，便於審查與追溯。

### 3. `CLOUD_DEPLOY.md`
- **內容**：AWS 雲端部署操作指南，涵蓋 EC2、S3、DynamoDB、EKS（Kubernetes）等服務，並說明自動化腳本與 CI/CD 整合建議。
- **用途**：指導如何用 AWS CLI 及自動化腳本部署本專案，並強調雲端相關項目雖未實際部署，但文件已詳述操作步驟。

### 4. `ACCEPTANCE_CRITERIA.md`
- **內容**：詳細列出 MongoDB、Redis、PostgreSQL 等多資料庫 CRUD API 的驗收標準，並說明自動化測試、CI/CD 整合與雲端部署驗收方式。
- **用途**：作為專案交付與測試的依據，並指向 `CHECK_LIST_EXPLAIN.md`、`API.md` 查閱細節。

### 5. `API.md`
- **內容**：完整的 API 端點說明，涵蓋所有 CRUD 操作、請求/回應格式、範例、curl 測試指令等。
- **用途**：前後端協作、第三方整合與自動化測試的主要依據。

### 6. `DEPLOYMENT_DIAGRAM.md`
- **內容**：系統部署圖與架構圖，包含 Docker Compose、雲端（AWS）與容器間通訊示意，並附有 mermaid 與圖片。
- **用途**：協助理解系統物理部署、網路結構與服務關聯。

### 7. `DOC_PROCESS_BEST_PRACTICES.md`
- **內容**：軟體開發文件產出、協作、審查、維護的最佳實踐與流程建議。
- **用途**：提升團隊文件品質與協作效率，並明確各類文件的產出時機與責任人。

### 8. `PRODUCT_REQUIREMENTS.md`
- **內容**：產品需求文件（PRD），定義專案目標、用戶場景、功能與非功能需求、API 設計原則等。
- **用途**：作為專案開發與驗收的需求依據，並指引後續設計與實作。

### 9. `SPEC-TECH-DESIGN.md`
- **內容**：技術規格設計書，詳細說明系統架構、API 設計、資料庫結構、模組劃分、技術選型等。
- **用途**：開發、測試、維運等全流程的技術依據，並作為設計審查與溝通基礎。

### 10. `UML_CLASS_DIAGRAM.md`
- **內容**：系統 UML 類圖，展示主要類別、服務、資料庫物件及其關聯。
- **用途**：輔助理解系統物件導向設計與模組關係，便於擴充與維護。

### 11. `AI_DEVELOPMENT.md`
- **內容**：AI 輔助開發流程、最佳實踐、CI/CD 故障排除、AI 生成測試案例等。
- **用途**：指導如何善用 AI 工具（如 Cursor AI）提升開發效率，並記錄實際應用經驗。

### 12. `images/`
- **內容**：存放 UML、部署架構等 mermaid 轉圖或設計圖檔。
- **用途**：為設計、架構、部署等文件提供視覺化輔助。

---

## 測試目錄結構規劃

- **tests/**（位於專案根目錄）
  - 用於集中管理所有自動化測試腳本（單元測試、整合測試、API 測試等）。
  - 建議依照語言、模組或功能分類（如 `nodejs/`、`python/`、`api/` 等子資料夾）。
- **tests/results/**（位於 tests 目錄下）
  - 專門用於儲存每次測試腳本執行後產生的測試結果（如 JSON、log、報表等）。
  - 便於追蹤歷史測試紀錄、分析測試覆蓋率與問題。

### 目錄結構範例

```
專案根目錄/
│
├─ nodejs/
├─ python/
├─ docs/
├─ tests/
│   ├─ nodejs/           # Node.js 相關測試腳本
│   ├─ python/           # Python 相關測試腳本
│   ├─ api/              # API 測試腳本
│   └─ results/          # 測試結果存放區
│
├─ package.json
├─ Dockerfile
├─ .gitlab-ci.yml
└─ EXPERIENCE.md
```

### 補充說明

- 測試腳本與測試結果分離，能提升專案結構清晰度與維護效率。
- `results/` 目錄僅保留最終測試結果（如 `route-test-result-*.json`）。
- 其他輔助檔案（如原始 API 回應、解析樣本等）統一存放於 `results/others/` 子目錄，保持主目錄整潔。
- `results/` 目錄可依照日期、測試類型自動分層，方便查詢與比對。
- 可於 CI/CD 流程中自動將測試結果輸出至 `tests/results/`，並根據需要上傳至報表平台或通知相關人員。
- 測試腳本產生的所有結果檔案（如 sample、result）檔名皆統一採用簡化年月日時分秒（YYYYMMDDHHMMSS）格式，不含特殊字元，便於系統與工具存取與自動化分析。

---

## 文件交互性與查閱建議

- 各文件間有明確引用與鏈結，查閱一份文件時可快速跳轉至相關說明或範例。
- 驗收、設計、API、部署、CI/CD 等主題皆有專屬文件，並於 `CHECK_LIST_EXPLAIN.md` 彙整索引。
- 雲端與自動化相關內容，請優先參考 `CLOUD_DEPLOY.md`、`AI_DEVELOPMENT.md`。
- 產品需求與技術設計，請參考 `PRODUCT_REQUIREMENTS.md`、`SPEC-TECH-DESIGN.md`。
- 架構圖、UML、流程圖等，請參考 `DEPLOYMENT_DIAGRAM.md`、`UML_CLASS_DIAGRAM.md`、`images/` 目錄。

---

如需更詳細內容，請直接查閱上述各文件，或於 `CHECK_LIST_EXPLAIN.md` 依主題快速定位。

---

## API.md 文件結構說明

`API.md` 採用分段清晰、範例導向的設計，結構如下：

- **文件開頭**：
  - 標題與簡介，說明 API 服務的基本資訊（如 Base URL、資料格式、主要路徑）。

- **API 端點路由說明**：
  - 條列所有支援的資料庫操作（MongoDB、PostgreSQL、Redis），並說明路由規則與自動轉發設計。
  - 特殊路由（如 PostgreSQL API 轉發）有專屬小節解釋。

- **端點列表**：
  - 以「功能分段」方式，逐一介紹每個 API 端點（如健康檢查、插入、查詢、更新等）。
  - 每個端點皆包含：
    - **URL**、**方法**、**請求體格式**、**響應格式**（皆以 code block 呈現）
    - **curl 測試範例**，方便直接複製測試
  - 內容結構統一，易於查閱與比對。

- **設計特色**：
  - 強調「範例先行」與「格式一致」原則，所有請求與回應皆有 JSON 範例。
  - 每個端點皆有實際 curl 測試指令，降低學習與整合門檻。
  - 以 Markdown 標題分層，便於全文搜尋與目錄生成。

此風格適合用於大型 API 專案文件，能有效提升團隊協作、第三方整合與自動化測試效率。

---

## 時間戳格式規範（Timestamp Format Guideline）

本專案所有時間戳欄位（如 created_at、updated_at、log timestamp 等）皆統一採用 **ISO 8601 標準格式**，範例如下：

```json
"timestamp": "2025-05-03T21:59:28.686Z"
```

- **說明**：
  - 採用 `yyyy-MM-dd'T'HH:mm:ss.SSSZ` 或 `yyyy-MM-dd'T'HH:mm:ss.SSSXXX` 格式，支援毫秒與時區。
  - 例：`2025-05-03T21:59:28.686Z`（UTC，帶毫秒與 Z 標記）
  - 例：`2025-05-03T21:59:28.686+08:00`（帶時區）
- **優點**：
  - 完全相容於 Elasticsearch、MongoDB、PostgreSQL 等現代資料庫的 `date` 型別
  - 支援字串排序即為時間序，適合大數據查詢與分析
  - 跨系統、跨語言皆可正確解析，便於國際化與多端整合
- **Elasticsearch Mapping 建議**：
  ```json
  "mappings": {
    "properties": {
      "timestamp": {
        "type": "date"
      }
    }
  }
  ```

**請所有 API、資料庫、日誌、測試結果等時間欄位皆遵循此格式，確保資料一致性與最佳排序效能。**

---

## 通用 docker compose 實踐重點

### 1. 服務（services）
- 每個服務（如 web、api、db、cache、worker 等）都應有獨立設定。
- 指定映像（image）或建構路徑（build），並設置對外埠口（ports）。
- 使用 `environment` 設定環境變數，集中管理連線資訊與設定。
- 透過 `depends_on` 管理服務啟動順序，確保依賴服務（如資料庫、快取）先啟動。
- 可用 `volumes` 掛載本地資料或持久化資料。

### 2. 網路（networks）
- 建議所有服務加入同一自訂網路，確保容器間可直接通訊。
- 可使用 external network 以便多個 compose 專案共用網路。

### 3. 資料卷（volumes）
- 為需持久化資料的服務（如資料庫、快取、檔案存儲）設置獨立 volume。
- 避免資料因容器重建而遺失。

### 4. 配置與彈性
- 將敏感資訊與環境參數抽離至 `.env` 檔案，方便不同環境切換。
- 可根據需求調整資源限制（如記憶體、CPU）、重啟策略等。

### 5. 啟動與管理流程
1. **建立網路（如需 external）**
   ```bash
   docker network create <your-network>
   ```
2. **啟動所有服務**
   ```bash
   docker compose up -d
   ```
3. **查看服務狀態**
   ```bash
   docker compose ps
   ```
4. **停止並移除所有服務**
   ```bash
   docker compose down
   ```

### 6. 延伸應用
- 可加入測試服務、監控服務（如 Prometheus、Grafana）、反向代理（如 Nginx）等。
- 支援多個 compose 檔案（如 `docker-compose.override.yml`）以覆蓋或擴充設定。

---

**重點：**
- 每個服務獨立、彈性配置
- 網路與資料卷設計清晰
- 啟動順序與依賴明確
- 配置抽離，易於多環境部署

此原則適用於任何技術棧（Node.js、Python、Java、Go、.NET、資料庫、快取、訊息佇列等），只需根據實際服務調整細節即可。

---

## 雲端自動化與 CI/CD 觸發規則

本節摘錄自 `CLOUD_DEPLOY.md`，說明專案在雲端部署自動化與 GitLab CI/CD 觸發的最佳實踐：

### 1. 自動化與最佳實踐
- 建議將上述 CLI 指令寫成 shell script 或 Makefile，實現一鍵部署。
- 敏感資訊建議存放於 AWS Secrets Manager 或 K8s Secret。
- 可結合 CI/CD 工具（如 GitLab CI）自動化建置與部署。

---

### 2. GitLab CI/CD 觸發規則

本專案的 `.gitlab-ci.yml` 已設定為：
- 預設 **不會自動執行 CI/CD pipeline**。
- 僅當 commit message 包含 `[run ci]` 時，才會觸發 build、test 等 pipeline job。

#### 觸發 CI/CD 範例

```bash
git commit -m "fix: 修正錯誤 [run ci]"
git push
```

如未加上 `[run ci]`，push 將不會觸發任何 pipeline。

如需調整觸發條件，請修改 `.gitlab-ci.yml` 中的 `rules` 設定。

如需更詳細範例或腳本，請參考 AWS 官方文件或洽詢專案維護者。

---

## 測試腳本格式與風格規範（以 Node.js API 測試為例）

### 1. 測試摘要與結構
- 每次測試執行皆產生獨特的 `TEST_RUN_ID`（以 ISO 8601 時間戳組成），方便追蹤與比對。
- 測試資料（如插入、查詢、聚合等）皆帶有 `test_run` 欄位，確保資料唯一性與可清理。
- 測試過程中累積 `testData` 物件，記錄：
  - 測試總數、通過/失敗數、開始/結束時間、總耗時
  - 每個測試的標題、狀態、執行時間、回應內容
- 測試結束後輸出摘要，並可選擇是否將結果寫入資料庫（可用環境變數 `SKIP_RESULT_SAVE` 控制）。

### 2. 時間記錄
- 所有時間欄位（如 `timestamp`、`start`、`end`）皆採用 ISO 8601 標準格式（如 `2025-05-03T21:59:28.686Z`），與專案規範一致。
- 每筆測試結果皆記錄執行當下的時間戳。

### 3. 測試資料寫入與清理
- 測試前自動插入測試資料（如聚合測試用的多筆文件），並標記 `test_run`。
- 測試結束後自動呼叫 API 清理本次測試產生的資料，確保資料庫乾淨。
- 測試過程中所有插入、查詢、更新、刪除等操作皆記錄詳細回應，便於除錯與驗證。

### 4. 測試流程與紀錄
- 每個測試案例（it）皆將回應資料掛載到 `this.test.responseData`，方便後續統計與日誌輸出。
- 測試過程中用自訂的 `TestLogger` 輸出 info、success、failure、summary 等多層級日誌，提升可讀性。
- 支援多端點自動重試、API 呼叫失敗重試、動態等待服務啟動等健壯設計。

### 5. 其他風格
- 測試案例命名清楚，分段明確（如健康檢查、插入、查詢、聚合、分頁等）。
- 測試資料與測試結果分離，便於 CI/CD 或本地多次執行。
- 支援環境變數自訂 API 端點、跳過結果儲存等彈性設定。

### 實作建議
- 撰寫新測試時，建議延用上述結構：每次測試有唯一 ID、所有資料帶有時間戳與 test_run 標記、結束時自動清理。
- 測試摘要與詳細結果可統一記錄於物件，便於後續分析或自動化報表。
- 時間欄位務必採用 ISO 8601 格式，確保跨系統一致性。
- 測試過程如需寫入資料庫，建議集中於 before/after 區塊，避免測試間干擾。

如需其他語言（如 Python、Postgres、Redis）測試腳本的格式分析，請參考對應目錄或洽詢專案維護者。

---

## API 使用經驗與通用規則

### 1. API 設計原則
- **RESTful 標準**：所有 CRUD 操作皆採用 RESTful API 設計，路徑語意明確，動詞以 HTTP 方法體現。
- **統一入口**：所有資料庫操作（MongoDB、PostgreSQL、Redis）皆可透過 `/api` 路徑統一訪問，並自動轉發至對應服務。
- **JSON 格式**：所有請求與回應皆使用 JSON，便於前後端協作與自動化測試。
- **動態集合/表**：支援動態指定集合（MongoDB）或資料表（PostgreSQL），無需預先定義 schema。
- **彈性查詢**：查詢、聚合、分頁、排序、投影等功能皆以 POST 請求體傳遞，靈活且易於擴充。
- **錯誤處理**：統一錯誤響應格式，包含 `success`、`message` 欄位，並明確 HTTP 狀態碼（400/500 等）。

### 2. 常用 API 端點（以 MongoDB 為例）
- `GET /api/health`：健康檢查
- `POST /api/{collection}/insert`：插入一筆或多筆文件
- `POST /api/{collection}/find`：查詢文件（支援條件、分頁、排序、投影）
- `POST /api/{collection}/upsert`：更新或插入（upsert）
- `POST /api/{collection}/delkeys`：刪除指定欄位
- `POST /api/{collection}/delete`：刪除文件
- `POST /api/{collection}/aggregate`：執行聚合管線

> 參數與回應格式請參考 API.md 及 Swagger UI 實際範例。

### 3. API 使用規範
- **時間戳欄位**：所有資料建議帶有 `timestamp`，並統一採用 ISO 8601 格式，便於排序與查詢。
- **批次操作**：插入、查詢、刪除等皆支援批次處理，提升效率。
- **安全性**：建議於生產環境加上 API 金鑰或 JWT 驗證，並限制敏感集合的操作權限。
- **測試與驗收**：所有 API 端點皆有對應自動化測試，並於驗收標準明確列出。

### 4. Swagger 文件與互動式端點
- **Swagger UI 端點**：  
  - Node.js 服務：`http://localhost:3000/docs`
  - Python 服務：`http://localhost:8000/docs`
  > 註：上述 port 號僅為預設範例，實際請依據 `.env` 檔案設定（如 NODE_PORT、PYTHON_PORT）或 `docker compose` 的 port 對映調整，兩者皆可能影響最終服務對外的 port 號。
- **Swagger 配置**：  
  - 以 OpenAPI 3.0 標準撰寫，所有端點、參數、回應、範例皆有詳細描述。
  - Swagger UI 支援線上測試、參數填寫、回應預覽，提升開發與整合效率。
- **自訂標籤**：API 端點依功能分組（如 CRUD、系統、PostgreSQL），便於查閱。
- **維護建議**：每次 API 變更，務必同步更新 Swagger 文件，確保文件與實作一致。

### 5. 實作與維運建議
- **自動化生成**：建議路由與 Swagger 註解同步維護，或以 swagger-jsdoc 自動生成。
- **CI/CD 驗證**：可於 CI 流程中自動檢查 Swagger 文件完整性。
- **多語言支援**：如有多語言後端（Node.js、Python），各自維護獨立 Swagger 文件，並於 README/EXPERIENCE.md 標註端點。

---

**重點：**  
- 統一 API 路徑與格式，便於前後端協作與第三方整合  
- 所有端點皆有 Swagger UI 文件與互動測試  
- 時間戳、批次操作、錯誤處理等皆有明確規範  
- 文件與實作同步維護，確保一致性與可追溯性

如需更詳細範例，請參考 `docs/API.md` 及 Swagger UI 實際操作。

---

## Docker 與 API 整合實務經驗

1. **Volume 掛載與目錄權限**
   - 容器內如需寫入檔案（如 log），必須預先建立對應目錄，並確保權限正確（可於 Dockerfile 內 `RUN mkdir -p /app/logs`）。
   - 本機與 container volume 掛載時，目錄權限與 owner 須一致，否則 Node.js 可能無法寫入。

2. **Log 寫入最佳實踐**
   - 建議將 log 檔案寫入專屬 logs 目錄，並將該目錄掛載為 volume，方便本機直接存取與分析。
   - log 路徑應使用絕對路徑（如 `/app/logs/xxx.json`），避免相對路徑因工作目錄不同導致寫入失敗。

3. **API 整合層測試與驗證**
   - API 整合層需 end-to-end 驗證，包含多來源資料的標準化、回應格式、錯誤處理等。
   - 測試時應同時檢查 API 回應與 log 寫入，確保資料流完整可追溯。

4. **專案狀態標註與歷程管理**
   - 重要進度（如 API 整合完成、重大 bug fix）應同步標註於 README、EXPERIENCE.md、HISTORY.md，並於完成後保留歷史紀錄。
   - 狀態標註應明確、可追溯，便於團隊協作與審查。

5. **CI/CD 與自動化流程**
   - 測試腳本與測試結果應分離，測試結果建議集中於 results 目錄，便於 CI/CD 自動化收集與比對。
   - 每次測試皆產生唯一 ID 與時間戳，方便追蹤與問題定位。

6. **Debug 流程與紀錄**
   - 發生權限或寫入問題時，應先檢查 volume 掛載、目錄權限、container log，並善用 `docker compose logs`、`ls -al` 等指令定位問題。
   - 解決過程與關鍵指令建議記錄於 EXPERIENCE.md，作為團隊知識庫。

---
