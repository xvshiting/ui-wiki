from pathlib import Path
from playwright.sync_api import sync_playwright

root = Path(__file__).resolve().parents[1]

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1280, "height": 720})
    errors = []
    page.on("pageerror", lambda error: errors.append(str(error)))
    page.goto((root / "terms" / "drag-duplicate.html").as_uri())

    demo = page.locator(".d-motion-drag-duplicate")
    items = demo.locator(":scope > [draggable='true']")
    drop_zone = demo.locator(":scope > span")
    assert demo.count() == 1 and items.count() == 1 and drop_zone.count() == 1, "拖拽复制预览结构不完整"

    original_text = items.first.text_content()
    items.first.drag_to(drop_zone)
    page.wait_for_timeout(100)

    assert items.count() == 2, f"拖放后没有生成副本，当前数量：{items.count()}"
    assert items.nth(0).text_content() == original_text, "复制操作改变了原件"
    assert "COPY" in items.nth(1).text_content(), "生成的项目没有明确标识为副本"
    assert not errors, f"拖拽过程中发生脚本错误：{errors}"
    browser.close()

print("PASS: drag duplicate preserves the original and creates a copy.")
