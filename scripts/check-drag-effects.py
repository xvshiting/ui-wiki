from pathlib import Path
from playwright.sync_api import sync_playwright

root = Path(__file__).resolve().parents[1]
failures = []

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1280, "height": 720})
    errors = []
    page.on("pageerror", lambda error: errors.append(str(error)))

    def open_term(term):
        page.goto((root / "terms" / f"{term}.html").as_uri())

    open_term("drag-delete")
    source = page.locator(".d-motion-drag-delete [draggable='true']")
    source.drag_to(page.locator(".d-motion-drag-delete aside"))
    if source.count() != 0:
        failures.append("拖拽删除区没有移除项目")
    page.locator(".d-motion-drag-delete aside").click()
    if source.count() != 1:
        failures.append("拖拽删除后无法撤销")

    open_term("elastic-drag-connector")
    node = page.locator(".d-motion-drag-elastic i")
    path = page.locator(".d-motion-drag-elastic path")
    before = path.get_attribute("d")
    box = node.bounding_box()
    page.mouse.move(box["x"] + 10, box["y"] + 10)
    page.mouse.down()
    page.mouse.move(box["x"] + 70, box["y"] + 35)
    if path.get_attribute("d") == before:
        failures.append("拖拽弹簧连线没有跟随节点")
    page.mouse.up()

    open_term("inertial-drag")
    item = page.locator(".d-motion-drag-inertia [draggable='true']")
    box = item.bounding_box()
    page.mouse.move(box["x"] + 20, box["y"] + 20)
    page.mouse.down()
    page.mouse.move(box["x"] + 90, box["y"] + 20, steps=3)
    page.mouse.up()
    if item.get_attribute("data-inertia-active") != "true":
        failures.append("惯性拖动释放后没有惯性状态")

    open_term("edge-auto-scroll")
    item = page.locator(".d-motion-drag-edge [draggable='true']")
    demo = page.locator(".d-motion-drag-edge")
    box = demo.bounding_box()
    item.dispatch_event("dragstart")
    demo.dispatch_event("dragover", {"clientX": box["x"] + box["width"] - 3, "clientY": box["y"] + box["height"] / 2})
    if "→" not in demo.locator("span").text_content():
        failures.append("边缘自动滚动没有方向反馈")

    open_term("marquee-selection")
    demo = page.locator(".d-motion-drag-marquee")
    box = demo.bounding_box()
    page.mouse.move(box["x"] + 5, box["y"] + 5)
    page.mouse.down()
    page.mouse.move(box["x"] + box["width"] - 5, box["y"] + box["height"] - 25)
    page.mouse.up()
    if demo.locator("i.selected").count() < 2:
        failures.append("多选框选没有选中覆盖项目")

    open_term("resize-handles")
    target = page.locator(".d-motion-drag-resize > div")
    handle = target.locator("i")
    width_before = target.bounding_box()["width"]
    box = handle.bounding_box()
    page.mouse.move(box["x"] + 5, box["y"] + 5)
    page.mouse.down()
    page.mouse.move(box["x"] + 45, box["y"] + 25)
    page.mouse.up()
    if target.bounding_box()["width"] <= width_before:
        failures.append("调整尺寸手柄没有改变宽度")

    open_term("rotation-gizmo")
    handle = page.locator(".d-motion-drag-rotate i")
    if handle.count() == 0:
        failures.append("旋转操纵器缺少可拖动手柄")
    else:
        box = handle.bounding_box()
        page.mouse.move(box["x"] + box["width"] / 2, box["y"] + box["height"] / 2)
        page.mouse.down()
        page.mouse.move(box["x"] + 45, box["y"] - 25)
        page.mouse.up()
        if page.locator(".d-motion-drag-rotate span").text_content() == "0°":
            failures.append("旋转操纵器没有更新角度")

    open_term("pinch-to-zoom")
    demo = page.locator(".d-motion-drag-pinch")
    target = demo.locator(":scope > div")
    demo.dispatch_event("wheel", {"deltaY": -120, "ctrlKey": True})
    if "scale" not in (target.get_attribute("style") or ""):
        failures.append("双指捏合缩放没有可操作的缩放响应")

    if errors:
        failures.append(f"交互过程中发生脚本错误：{errors}")
    browser.close()

assert not failures, "\n".join(failures)
print("PASS: remaining drag effects respond to their named interactions.")
