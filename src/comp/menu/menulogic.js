

const Swwe = () => {
  "use strict";
	let gg=0;
  let g;
  document
    .getElementsByTagName("body")[0]
    .addEventListener("mousemove", function (n) {
      t.style.left = n.clientX + "px";
      t.style.top = n.clientY + "px";
      e.style.left = n.clientX + "px";
      e.style.top = n.clientY + "px";
      i.style.left = n.clientX + "px";
      i.style.top = n.clientY + "px";
    });
  var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");
  function n(t) {
    g = e.classList.add("hover");
    g = i.classList.add("hover");
  }
  function s(t) {
    g = e.classList.remove("hover");
    g = i.classList.remove("hover");
  }
  s();
  for (
    var r = document.querySelectorAll(".hover-target"), a = r.length - 1;
    a >= 0;
    a--
  ) {
    o(r[a]);
  }
  function o(t) {
    g = t.addEventListener("mouseover", n);
    g = t.addEventListener("mouseout", s);
  }

  //Navigation

  var app = (function () {
	console.log("app");
    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;
    var init = function init() {
      body = document.querySelector("body");
      menu = document.querySelector(".menu-icon");
      menuItems = document.querySelectorAll(".nav__list-item");
      applyListeners();
    };
    var applyListeners = function applyListeners() {
      menu.addEventListener("click", function () {
        return toggleClass(body, "nav-active");
      });
    };
    var toggleClass = function toggleClass(element, stringClass) {
      if (element.classList.contains(stringClass))
        element.classList.remove(stringClass);
      else element.classList.add(stringClass);
    };
    init();
  })();
};

export default Swwe;
