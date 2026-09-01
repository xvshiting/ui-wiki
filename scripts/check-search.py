from pathlib import Path
from playwright.sync_api import sync_playwright

root = Path(__file__).resolve().parents[1]

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()
    errors = []
    page.on("pageerror", lambda error: errors.append(str(error)))
    page.goto((root / "index.html").as_uri())
    page.locator("[data-search]").fill("玻璃拟态")
    results = page.locator(".search-results.open a")
    assert results.count() > 0, "搜索输入后没有显示任何结果"
    assert "glassmorphism.html" in (results.first.get_attribute("href") or ""), "没有返回匹配的玻璃拟态词条"
    assert not errors, f"首页搜索触发脚本错误：{errors}"

    page.goto((root / "categories" / "color-type.html").as_uri())
    assert page.locator("[data-count]").inner_text() == "118", "色彩与字体分类没有包含内部分类条目"
    page.locator("[data-search]").fill("线性渐变系统")
    grouped_result = page.locator(".search-results.open a")
    assert grouped_result.count() > 0, "无法搜索内部分类中的条目"
    assert "linear-gradient-system.html" in (grouped_result.first.get_attribute("href") or ""), "内部分类搜索结果不正确"
    assert not errors, f"分类页搜索触发脚本错误：{errors}"
    browser.close()

print("PASS: search returns a matching visible result.")
