#!/bin/bash
# 只擷取 FLOW.md 第一個 mermaid 區塊並轉成 PNG

MERMAID_FILE=flow.mmd
PNG_FILE=flow.png

awk 'BEGIN{f=0} /^```mermaid/{if(f==0){f=1;next}} /^```/{if(f==1){exit}} f==1' FLOW.md > $MERMAID_FILE

if [ ! -s "$MERMAID_FILE" ]; then
  echo "未找到 mermaid 區塊或內容為空，請確認 FLOW.md 格式。"
  exit 1
fi

mmdc -i $MERMAID_FILE -o $PNG_FILE

if [ $? -eq 0 ]; then
  echo "已產生 $PNG_FILE"
else
  echo "轉換失敗，請確認 mmdc 已安裝。"
fi 