from pathlib import Path
from playwright.sync_api import sync_playwright

root = Path(__file__).resolve().parents[1]

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1280, "height": 720})
    errors = []
    page.on("pageerror", lambda error: errors.append(str(error)))
    page.goto((root / "terms" / "drag-reorder.html").as_uri())

    demo = page.locator(".d-motion-drag-reorder")
    items = demo.locator("button")
    assert demo.count() == 1 and items.count() == 3, "拖拽排序预览结构不完整"

    before = items.all_text_contents()
    items.nth(0).drag_to(items.nth(2))
    page.wait_for_timeout(100)
    after = items.all_text_contents()

    assert before != after, f"拖放后列表顺序没有变化：{before}"
    assert after.index(before[0]) > 0, f"被拖动项目没有离开原位置：{after}"
    items.filter(has_text=before[0]).press("Alt+ArrowDown")
    keyboard_after = items.all_text_contents()
    assert keyboard_after.index(before[0]) > after.index(before[0]), "键盘排序没有移动项目"
    assert not errors, f"拖拽过程中发生脚本错误：{errors}"
    browser.close()

print("PASS: drag reorder changes item order.")
