const container = document.querySelector(".containter");
const guide = document.querySelector(".guide");
const span = document.querySelector(".guide span");

let flag = false;
let oLeft = guide.getBoundingClientRect().left;
let buttonWidth = span.getBoundingClientRect().width;

document.addEventListener("mousedown", (e) => {
  span.classList.remove("back");

  flag = true;
});

function mousemove(e) {
  if (flag) {
    container.style.setProperty(
      "--move",
      `${e.clientX - oLeft - buttonWidth / 2}px`
    );
  }
}
document.addEventListener("mousemove", mousemove);

function mouseup(e) {
  if (flag) {
    const dis = e.clientX - oLeft;

    if (dis >= 435 && dis <= 443) {
      container.classList.add("passed");
      //  验证成功后取消鼠标监听事件
      document.removeEventListener("mousemove", mousemove);
      document.removeEventListener("mouseup", mouseup);

      alert("验证通过!!");
    } else {
      // 验证失败滑块返回
      container.style.setProperty("--move", "0px");
      alert("验证失败!!");
    }
    console.log(dis);

    flag = false;
  }
}
document.addEventListener("mouseup", mouseup);
