function toggleMenu() {
    const menu = document.querySelector(".hamburger_menu_links");
    const icon = document.querySelector(".hamburger_menu_icon");
    const link = document.querySelector("li");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    link.classList.toggle("open");
}

