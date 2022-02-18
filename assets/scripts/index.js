const html = document.querySelector("html");
const navBar = document.querySelector("#navbar");
const navBg = document.querySelector(".navBg");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav--links");

// HERO SEARCH
const searchWhat = document.querySelector(".search--what");
const ovalImg_one = document.querySelector(".search--what img");
const customLabel_one = document.querySelector(".custom--label_one");
const searchWhere = document.querySelector(".search--where");
const ovalImg_two = document.querySelector(".search--where img");
const customLabel_two = document.querySelector(".custom--label_two");

// SHOWCASE VIDEO SECTION
const btnOverlay = document.querySelector(".btn_overlay");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const showcase_video = document.querySelector(".showcase_video");
const video_placeholder_img = document.querySelector(".video_placeholder_img");

// ADD NAVBAR BACKGROUND_COLOR ON SCROLL
window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    if (scrolled > 0) {
        navBar.style.backgroundColor = "#0e1d28";
    } else {
        navBar.style.backgroundColor = "transparent";
    }
});

// RESPONSIVE HAMBURGER
hamburger.addEventListener("click", () => {
    navBar.classList.toggle("navBg");
    navLinks.classList.toggle("active");
    html.classList.toggle("overflow-hidden");
});

// HERO SEARCH BOX ELEMENT CREATION
searchBox = document.createElement("input");
searchBox.setAttribute("type", "text");
searchBox.setAttribute("placeholder", "What would you like to do?");
searchBox.classList.add("searchBox", "no-border", "display-block");
console.log(searchBox);

// Display Search Box One on Mouse ENter
searchWhat.addEventListener("mouseenter", () => {
    ovalImg_one.classList.add("display-none");
    customLabel_one.classList.add("display-none");
    searchWhat.classList.remove("border-effect");
    searchWhat.append(searchBox);
});

searchWhat.addEventListener("mouseleave", () => {
    ovalImg_one.classList.remove("display-none");
    customLabel_one.classList.remove("display-none");
    searchWhat.classList.add("border-effect");
    searchWhat.removeChild(searchBox);
});

// Display Search Box Two on Mouse ENter
searchWhere.addEventListener("mouseenter", () => {
    ovalImg_two.classList.add("display-none");
    customLabel_two.classList.add("display-none");
    searchWhere.classList.remove("border-effect");
    searchWhere.append(searchBox);
});

searchWhere.addEventListener("mouseleave", () => {
    ovalImg_two.classList.remove("display-none");
    customLabel_two.classList.remove("display-none");
    searchWhere.classList.add("border-effect");
    searchWhere.removeChild(searchBox);
});

// SHOWCASE VIDEO INITIALIZATION
btnOverlay.addEventListener("click", () => {
    showcase_video.classList.remove("display-none");
    video_placeholder_img.classList.add("display-none");
    btnOverlay.classList.add("display-none");
    showcase_video.play();
});

// Pause Video
showcase_video.addEventListener("pause", () => {
    btnOverlay.classList.remove("display-none");
    play.classList.add("display-none");
    pause.classList.remove("display-none");
    showcase_video.toggleAttribute("pause", "play");
});

// Pause and Resume Video
pause.addEventListener("click", () => {
    showcase_video.play();
    btnOverlay.classList.add("display-none");
    play.classList.remove("display-none");
    pause.classList.add("display-none");
});

// Display Image Background on Video end
showcase_video.addEventListener("ended", () => {
    showcase_video.classList.add("display-none");
    video_placeholder_img.classList.remove("display-none");
    btnOverlay.classList.remove("display-none");
    pause.classList.add("display-none");
    play.classList.remove("display-none");
});
