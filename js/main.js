// // menu start
// var menu = document.getElementById("menu");
// var menuBtn = document.getElementById("menuBtn");
// var body = document.body;
// menuBtn.onclick = function () {
//   menu.classList.toggle("active");
//   menuBtn.classList.toggle("active");
//   body.classList.toggle("active");
// };
// window.onclick = function (event) {
//   if (event.target == menu) {
//     menu.classList.remove("active");
//     menuBtn.classList.remove("active");
//     body.classList.remove("active");
//   }
// };
// // menu end

// scroll start
let header = document.getElementById("header");
function scrollFunc() {
  if (window.scrollY >= 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end
// faq start
const tabBtn = document.querySelectorAll(".tabBtn");
const tabEvent = document.querySelectorAll(".tabEvent");
tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      console.log("now active");
      const faq = currentBtn.parentElement.querySelector(".tabEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
// faq end

const userBtn = document.getElementById("userBtn");
if (userBtn) {
  const userMenu = document.getElementById("userMenu");
  userBtn.onclick = () => {
    userBtn.classList.toggle("active");
    userMenu.classList.toggle("active");
  };
}

const shareBtn = document.getElementById("shareBtn");
if (shareBtn) {
  const shareMenu = document.getElementById("shareMenu");
  shareBtn.onclick = () => {
    shareBtn.classList.toggle("active");
    shareMenu.classList.toggle("active");
  };
}
