# AI 與工作未來趨勢

## 簡立峰／Google 台灣前董事總經理 
### 為什麼未來是 1% 的 AI 超級使用者，擁有 99% 人的能力？

- **人工智慧對工作的影響**：人工智慧正在將知識工作者轉變為「超級工作者」，它主要影響涉及數位內容的白領工作，但其影響力正在擴大。
- **人工智慧作為副駕駛**：人工智慧工具充當「副駕駛」，協助翻譯和程式碼審查等任務。然而，人為監督仍然至關重要。
- **工作崗位流失**：人工智慧正在導致工作崗位流失，尤其是在外包領域，與寫作相關的職位減少了 30%。
- **1% 與 99% 理論**：有效利用人工智慧的人可能比不使用的人獲得顯著更多的成就，這可能會導致 1% 的人擁有 99% 的能力。
- **變得精通人工智慧**：為了在人工智慧時代蓬勃發展，個人需要學習如何利用人工智慧來增強自身能力。



# 精選 AI／LLM 工具與平台介紹

## 1. Ollama

基於 Ollama 架構，Ollama 提供本地化的 LLM 模型與工具整合，支援各種公開模型（如 Llama 3、Phi‑4、gemma 等），方便開發者建立私有資料庫搜尋與互動式應用。
[ollama.com](https://ollama.com)

## 2. LiveCodeBench Leaderboard

由 Berkeley、MIT、Cornell 等學術機構打造的 LiveCodeBench，提供「全面且防污染」的程式碼能力評測排行榜，涵蓋寫程式、修復程式、自我測試等項目。
[livecodebench.github.io](https://livecodebench.github.io)
最新排行榜包括 DeepSeek-R1、O3、O4‑Mini、Gemini‑2.5‑Pro 等熱門模型。
[artificialanalysis.ai](https://artificialanalysis.ai)

## 3. ArtificialAnalysis.ai 模型排行榜

平台對 30 多款主流 LLM（包括 GPT‑4o、Llama 3、Mistral、Gemini 等）進行獨立評測，包括質量、價格、速度、延遲、context window 等指標，並提供豐富可視化分析工具。
[artificialanalysis.ai](https://artificialanalysis.ai)

## 4. Google AI Studio – New Chat Prompts

Google AI Studio 的對話式界面，支援系統提示（system instructions）進階設置，可建構角色設定（如「你是某角色」）、調整語氣與回應長度，是 Gemini 模型提示工程的重要工具。
[ai.google.dev](https://ai.google.dev)

## 5. ChatGPT (chatgpt.com)

OpenAI 出品的 ChatGPT 為通用型對話式 AI 平台，支援文字、圖像、程式碼與資料解析等功能；自 2022 年底上線，2025 年更新至 GPT‑4o、GPT‑4.1、GPT‑4.5 等最新引擎，適用於寫作、學習、腦力激盪與開發者工作。

## 6. YouTube

YouTube 作為全球最大的影音平台，擁有豐富的 LLM 相關學習資源，包括教學課程、技術分享、實作案例等，是學習和掌握 LLM 技術的重要管道。

## 7. CURSOR

目前主要90%的開發工作都在這裡進行。

- [Cursor Dashboard](https://www.cursor.com/cn/dashboard)
- [Cursor Team Plan Pricing](https://www.cursor.com/cn/pricing)

## 8. ROO CODE extension

手排開發
with OPENROUTER LLM API seller  https://openrouter.ai


# AI 實作經驗與工具心得

## 從 ChatGPT 到 Cursor IDE 的開發體驗

### Stage 1. 使用 ChatGPT（瀏覽器）開發流程(1.5 years)

**團隊使用模式**：
- 5位工程師共享2個ChatGPT Plus訂閱帳號，按專案需求輪替使用
- 不同工程師使用能力也差異大
- **英語能力影響**：工程師英語水平直接影響AI互動效率。英文提示可節省30-40%迭代次數，降低技術術語錯誤率約50%，並提升程式碼命名規範與註釋品質。但在本地化需求與中文內容處理方面，中文提示可能更有優勢。

**基本流程**：
- 在本機編輯器撰寫或選取欲重構的程式碼
- 複製貼到 ChatGPT 視窗，附上具體指令（重構、除錯、產生測試等）
- 下載回覆，再貼回本機編輯器測試

**效率提升**：
- 透過 AI 自動產出範例、生成測試或解釋錯誤，開發速度約提升 3–5 倍

**主要瓶頸**：
- ChatGPT 一次僅能「看懂」單一貼上的檔案或片段，跨檔案脈絡缺失
- 須頻繁手動 copy/paste，來回切換視窗，工作流中斷
- 貼上大量程式碼時，易因長度或提示不精確而導致回覆不完整

### Stage 2. 轉換到 Cursor AI IDE 的體驗

**團隊使用模式**：
- 每位工程師需要一個獨立的Cursor帳號進行開發

**我最常用功能**：
- **全專案索引**：AI 直接讀取整個 repository，可跨檔案追蹤呼叫鏈、變數來源
- **多模型切換**：可靈活選擇最適合任務的模型，GPT-4.1、Claude-3.5/3.7、o1-mini、o3等各有專長, Gemini 2.5 pro 皆可調用.
- **文檔代碼轉換**：生成技術文檔、將代碼轉換為UML/PRD，或從文檔規格反向生成代碼框架
- **行內 Chat**：在任何檔案選取程式碼即可提問或要求重構，省去貼上步驟
- **Jump to Definition/References**：AI 回答時自動插入檔案連結，快速跳轉
- **終端輸出整合**：可直接讀取終端輸出與錯誤信息，實現快速除錯反饋循環
- **自動執行能力**：Vibe Coding 風格必要工具，提供代碼建議、自動執行並反饋結果
- **Task 清單整合**：與 PRD, Coding Rules 或 README 串聯，AI 知道任務目標與技術規範
- **MCP擴展能力**：
  - 基礎整合：透過Model Context Protocol連接外部工具與MongoDB..等資料庫, fileSystem.
  - JiraMCP：
  - Context7：提供即時訪問Github資料庫的能力，支援即時程式碼分析與版本控制整合 [連結](https://context7.com/)

**效率結果**：
- 省去大部分人工搬運與上下文解釋，整體開發速度至少提升 10-100 倍：
  - 大型重構由原先數小時縮短至數十分鐘
  - 測試樣板、型別補全、介面抽象可即時生成並插入


# 新型開發模式
## Vibe Coding

Andrej Karpathy 提出：

> 有一種新的編碼方式，我稱之為「憑感覺編碼」(vibe coding)，你會完全憑感覺走，擁抱程式碼的指數級增長，甚至忘了程式碼本身的存在。這之所以可能，是因為大型語言模型（例如使用 Sonnet 的 Cursor Composer）變得太厲害了。此外，我直接透過 SuperWhisper 跟 Composer 對話，所以幾乎都不動鍵盤。
> 
> 我會指示一些最瑣碎的事情，像是「把側邊欄的內距 (padding) 減半」，因為我懶得自己去找程式碼在哪。我總是按「接受所有」(Accept All)，不再看程式碼差異 (diff) 了。遇到錯誤訊息時，我就直接複製貼上給它，不做任何註解，通常這樣就行了。程式碼的複雜度會超出我通常的理解範圍，我需要花很多時間仔細閱讀才能搞懂。有時候 LLM 無法修復 bug，我就只能繞過它，或是要求隨機修改，直到錯誤消失。
> 
> 這樣對於一次性的週末專案來說還不錯，但還是挺有趣的。我在建構專案或網頁應用程式，但這不算是真正的編碼——我就只是看看（結果），說說（指令），跑跑（程式），複製貼上（錯誤訊息），而大部分時候都能搞定。

## Vibe Coding 心態狀態

![程式師與AI關係演變圖](https://mediaserver.frrut.com/resume/1746100912442_sm.png)

- **剛學程式的人 (左邊)**：因為不太懂，所以就直接讓 AI 全部寫好，自己不太檢查或修改。 
- **有點經驗的程式師 (中間)**：覺得自己懂的比 AI 多，會覺得 AI 需要我的專業指導，要一直看著 AI 寫，還要幫它改錯。 
- **非常厲害的程式專家 (右邊)**：雖然很厲害，但因為 AI 越來越好用了，他們又回到了直接讓 AI 寫程式碼的狀態，選擇相信 AI 能做好大部分工作，自己退到更遠的位置。

### 由 AI 能力驅動的高層次開發流程：

- **現在有了強大的 AI**：大型語言模型可以大量地生成和修改程式碼。 
- **由 AI 能力驅動**：AI 承擔了大量實際「寫」程式碼的工作。你的角色變成是**「指揮」或「引導」AI**。 
- **更為高層次**：你不再需要完全沉浸在程式碼的低層次細節裡。你與 AI 的溝通層次提高了，更接近描述你想要達成的「功能」、「目標」或「結果」，而不是具體的實現步驟（例如，你說「把側邊欄變窄一半」，而不是自己去改 CSS 或佈局參數）。你思考的是產品的功能和用戶體驗，而非底層程式碼要怎麼寫。 
- **更注重結果**：工作的重點從「我寫了什麼程式碼」變成了**「這個程式碼最終達成了什麼功能」**。只要 AI 生成的程式碼能讓功能正常運作、解決問題，即使你沒有完全理解每一行程式碼的運作原理，甚至不去仔細審查 AI 的修改，也可以接受。除錯時，你可能更傾向於讓 AI 自己去嘗試不同的修改（試圖達到「問題被解決」的結果），而不是自己花時間去分析程式碼錯誤的根源。



# CURSOR 重點Tips分享 

## 1. Context is the Best Prompt

不必迷信厲害的提示詞，提供充足的內容前後文或文件，往往比設計精美的提示詞（prompt）更有效。確保 AI 理解上下文，能更精確產出你要的結果。

## 2. 維持上一層文件，反覆檢查

隨時保持上一層最新的相關文件或資訊，並在過程中不斷來回檢查與比對，有效減少誤判或遺漏。
- PRD.md -> SPEC.md -> Code Script -> Response.md
- 每完成一個任務就即時更新資料，維持「防守陣地」的狀態，確保後續操作都有最新且正確的依據。

## 3. 分解任務,不需一步就位
- 將複雜任務拆解成多個小步驟，逐步推進。

## 4. 先有功能再重構
- 先專注讓功能可用，把最小可行的雛型（MVP）做出來。Refector with Arch Document. such as SOLID



# DEMO 



# Coding Rule/Refactor sample

## SOLID 原則的現代應用 

SOLID 原則自2000年提出，至今仍具高度實用性，適用於多種開發範式。它能提升程式碼可維護性、適應現代開發需求（如微服務），並促進團隊協作與專案成功。

1. **提升可維護性與可讀性**  
   SOLID 原則鼓勵開發者撰寫模組化、低耦合的程式碼，這使得系統更容易理解、維護與擴展。即使在現代的開發環境中，這些特性仍然是高品質軟體的基石。

2. **適應現代開發需求**  
   隨著雲端運算、微服務與函數式程式設計的興起，SOLID 原則仍能提供設計上的指導。例如，開放封閉原則（OCP）與依賴反轉原則（DIP）在設計可擴展且易於測試的微服務時尤為重要。

3. **促進團隊協作與專案成功**  
   遵循 SOLID 原則有助於建立一致的程式碼風格，降低新成員上手的難度，並提升整體開發效率，從而提高專案的成功率。

# 程式碼架構對比

## 原始前端架構

```
frontend/
├── node_modules/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   └── CrawlForm.js        // 所有爬蟲邏輯和UI都在一個文件中
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── index.css
│   │   ├── index.js
│   │   └── reportWebVitals.js
│   ├── package.json
│   ├── yarn.lock
│   └── dump.rdb
```

## SOLID 改良後的前端架構

```
frontend/
├── src/
│   ├── api/ (新)
│   │   ├── crawlService.js (新) // API通信層
│   │   └── apiConfig.js (新)    // API配置和共享邏輯
│   ├── components/
│   │   ├── common/ (新)         // 共享通用組件
│   │   │   ├── Button.js (新)
│   │   │   ├── Input.js (新)
│   │   │   └── LoadingIndicator.js (新)
│   │   ├── crawl/ (新)          // 爬蟲相關組件
│   │   │   ├── CrawlForm.js (修改) // 主容器組件
│   │   │   ├── CrawlFormInput.js (新) // 輸入表單
│   │   │   ├── CrawlConfiguration.js (新) // 爬蟲配置表單
│   │   │   ├── CrawlStatus.js (新)    // 狀態顯示組件
│   │   │   └── CrawlResults.js (新)   // 結果顯示組件
│   ├── hooks/ (新)
│   │   ├── useCrawl.js (新)      // 爬蟲邏輯自定義Hook
│   │   └── usePolling.js (新)    // 輪詢邏輯自定義Hook
│   ├── utils/ (新)
│   │   ├── validators.js (新)    // 表單驗證
│   │   └── formatters.js (新)    // 數據格式化
│   ├── constants/ (新)
│   │   └── apiEndpoints.js (新)  // API端點常量
│   ├── App.js (已存在但需修改)
│   └── index.js (已存在)
```

以下為架構版本的量化對比，方便您直觀了解「原始」「SOLID 改良」：

| 版本 | 目錄數 | 檔案數 | 變化說明 |
|------|--------|---------|-----------|
| 原始前端架構 | 4 | 11 | 所有邏輯集中，檔案少、耦合度高 |
| SOLID 改良後架構 | 7 | 18 | 拆分 API、元件、Hook、工具等 |


Question: 要人工實作容易嗎?