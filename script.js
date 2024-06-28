let burger = document.querySelector(".burger_menu");
let menu = document.querySelector(".burger_main");
let open = false;
console.log(menu);

burger.addEventListener("click", () => {
  if (open == false) {
    menu.style.display = "flex";
    open = true;
  } else if (open == true) {
    menu.style.display = "none";
    open = false;
  }
});
console.log(burger);
