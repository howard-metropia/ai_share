# FLOW.md

## 顧客註冊與距離計算流程圖

```mermaid
flowchart TD
  A[Client 發送 POST /api/customer] --> B{驗證 name/city/address}
  B -- 驗證通過 --> C[呼叫 Google Geocoding API]
  B -- 驗證失敗 --> Z1[回傳 400 錯誤]
  C -- 取得經緯度成功 --> D[計算距離 (Haversine)]
  C -- 失敗/流量超限 --> Z2[回傳 422/429 錯誤]
  D --> E[寫入 MongoDB customer 集合]
  E --> F[回傳完整 customer 物件]
```

## /health API 簡易流程

```mermaid
flowchart TD
  H1[Client 發送 GET /health] --> H2[API 回傳 { success: true, ... }]
``` 