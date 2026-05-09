const iconMenuAside = document.getElementById("icon-menuAside");
const menuAside = document.getElementById("menu-aside");
const closeMenu = document.getElementById("close-menu");

iconMenuAside.addEventListener("click",function(){
   menuAside.classList.add("show-menu");
});


closeMenu.addEventListener("click",function() {
    menuAside.classList.remove("show-menu");
});