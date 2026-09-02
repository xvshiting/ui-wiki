from pathlib import Path
from playwright.sync_api import sync_playwright

root = Path(__file__).resolve().parents[1]

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1280, "height": 720})
    errors = []
    page.on("pageerror", lambda error: errors.append(str(error)))
    page.goto((root / "terms" / "pinned-scroll-story.html").as_uri())

    demo = page.locator(".d-motion-scroll-pinned")
    stage = demo.locator(".pin-stage")
    steps = demo.locator("ol li")
    assert demo.count() == 1 and stage.count() == 1 and steps.count() == 3, "固定叙事预览结构不完整"

    before = stage.text_content()
    page.evaluate("window.scrollTo(0, Math.min(700, document.documentElement.scrollHeight - innerHeight))")
    page.wait_for_timeout(100)
    after = stage.text_content()

    assert before != after, f"页面滚动后叙事阶段没有变化：{before}"
    assert demo.locator("ol li.active").count() == 1, "当前叙事步骤没有明确标记"
    assert not errors, f"滚动过程中发生脚本错误：{errors}"
    browser.close()

print("PASS: pinned scroll story advances with page scroll.")
