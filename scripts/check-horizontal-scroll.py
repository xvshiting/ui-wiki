from pathlib import Path
from playwright.sync_api import sync_playwright

root = Path(__file__).resolve().parents[1]

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1280, "height": 720})
    errors = []
    page.on("pageerror", lambda error: errors.append(str(error)))
    page.goto((root / "terms" / "horizontal-scroll-sections.html").as_uri())

    demo = page.locator(".d-motion-scroll-horizontal")
    track = demo.locator(".h-track")
    assert demo.count() == 1 and track.count() == 1, "横向滚动预览缺少轨道结构"

    before = track.evaluate("el => getComputedStyle(el).transform")
    page.evaluate("window.scrollTo(0, Math.min(700, document.documentElement.scrollHeight - innerHeight))")
    page.wait_for_timeout(100)
    after = track.evaluate("el => getComputedStyle(el).transform")

    assert before != after, f"页面滚动后横向轨道没有移动：{before}"
    assert not errors, f"滚动过程中发生脚本错误：{errors}"
    browser.close()

print("PASS: horizontal section track responds to page scroll.")
