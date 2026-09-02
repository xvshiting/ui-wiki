from pathlib import Path
from playwright.sync_api import sync_playwright

root = Path(__file__).resolve().parents[1]

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1280, "height": 720})
    errors = []
    page.on("pageerror", lambda error: errors.append(str(error)))
    page.goto((root / "terms" / "scroll-parallax.html").as_uri())

    demo = page.locator(".d-motion-scroll-parallax")
    layers = demo.locator(".scroll-bg, .scroll-mid, .scroll-front")
    assert demo.count() == 1 and layers.count() >= 2, "滚动视差预览缺少可分层移动的结构"

    before = layers.evaluate_all("els => els.map(el => getComputedStyle(el).transform)")
    page.evaluate("window.scrollTo(0, Math.min(700, document.documentElement.scrollHeight - innerHeight))")
    page.wait_for_timeout(100)
    after = layers.evaluate_all("els => els.map(el => getComputedStyle(el).transform)")

    assert before != after, f"页面滚动后视差层没有移动：{before}"
    assert not errors, f"滚动过程中发生脚本错误：{errors}"
    browser.close()

print("PASS: scroll parallax layers respond to page scroll.")
