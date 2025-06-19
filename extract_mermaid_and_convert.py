from mermaid_render import MermaidRenderer
import re

# 讀取 FLOW.md
with open('FLOW.md', 'r', encoding='utf-8') as f:
    content = f.read()

# 擷取第一個 mermaid 區塊
match = re.search(r'```mermaid\s*([\s\S]+?)\s*```', content)
if not match:
    print('未找到 mermaid 區塊，請確認 FLOW.md 格式。')
    exit(1)

mermaid_code = match.group(1)

# 轉成 PNG
renderer = MermaidRenderer()
renderer.render(
    code=mermaid_code,
    output_path='flow.png',
    output_format='png'
)
print('已產生 flow.png') 