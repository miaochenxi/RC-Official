let sitemask;
let menu;
function onShow() {
  menu = document.getElementById("mobile");
  sitemask = document.getElementById("sitemask");
  menu.style.left = "0px";
  sitemask.style.opacity = "50%";
  sitemask.style.visibility = "visible";
  document.body.addEventListener("touchmove",unclickable,{passive:false});
}
function unclickable(e){e.preventDefault();}
function onHide() {
  sitemask.style.opacity="0%";
  sitemask.style.visibility="hidden";
  menu.style.left="-100%";
  document.body.removeEventListener("touchmove",unclickable);
}
document.getElementById("menu-btn").addEventListener("click", onShow);
document.getElementById("sitemask").addEventListener("click", onHide);
document.getElementById("mobileul").addEventListener("click",onHide);