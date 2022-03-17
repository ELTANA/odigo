const html = document.querySelector("html");
const body = document.querySelector("html");
const navBar = document.querySelector("#navbar");
const navBg = document.querySelector(".navBg");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav--links");

// HERO SEARCH
const hero = document.querySelector("#hero");
const heroSearch = document.querySelector(".hero--search");
const searchWhat = document.querySelector(".search--what");
const ovalImg_one = document.querySelector(".search--what img");
const customLabel_one = document.querySelector(".custom--label_one");
const searchWhere = document.querySelector(".search--where");
const ovalImg_two = document.querySelector(".search--where img");
const customLabel_two = document.querySelector(".custom--label_two");
const searchBtn = document.querySelector(".searchBtn");

// CARDS LIKES ONE
const placesCardImageOne = document.querySelector(".places--card_imgOne");
const likesCountOne = document.querySelector(".likesCountOne");
const likesOne = document.querySelector(".likesOne");
// CARDS LIKES TWO
const placesCardImageTwo = document.querySelector(".places--card_imgTwo");
const likesCountTwo = document.querySelector(".likesCountTwo");
const likesTwo = document.querySelector(".likesTwo");
// CARDS LIKES THREE
const placesCardImageThree = document.querySelector(".places--card_imgThree");
const likesCountThree = document.querySelector(".likesCountThree");
const likesThree = document.querySelector(".likesThree");
// CARDS LIKES FOUR
const placesCardImageFour = document.querySelector(".places--card_imgFour");
const likesCountFour = document.querySelector(".likesCountFour");
const likesFour = document.querySelector(".likesFour");
// CARDS LIKES FIVE
const placesCardImageFive = document.querySelector(".places--card_imgFive");
const likesCountFive = document.querySelector(".likesCountFive");
const likesFive = document.querySelector(".likesFive");
// CARDS LIKES SIX
const placesCardImageSix = document.querySelector(".places--card_imgSix");
const likesCountSix = document.querySelector(".likesCountSix");
const likesSix = document.querySelector(".likesSix");

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
        navBar.style.position = "fixed";
        navBar.style.top = "0";
    } else {
        navBar.style.backgroundColor = "";
        navBar.style.position = "";
    }
});

// RESPONSIVE HAMBURGER
hamburger.addEventListener("click", () => {
    navBar.classList.toggle("navBg");
    navLinks.classList.toggle("active");
    html.classList.toggle("overflow-hidden");
});

// HERO SEARCH BOX ONE ELEMENT CREATION
searchBoxOne = document.createElement("input");
searchBoxOne.setAttribute("type", "text");
searchBoxOne.setAttribute("placeholder", "What would you like to do?");
searchBoxOne.classList.add("searchBoxOne", "no-border", "display-block");
// console.log(searchBoxOne);

// HERO SEARCH BOX TWO ELEMENT CREATION
searchBoxTwo = document.createElement("input");
searchBoxTwo.setAttribute("type", "text");
searchBoxTwo.setAttribute("placeholder", "Where would you like to go?");
searchBoxTwo.classList.add("searchBoxTwo", "no-border", "display-block");
// console.log(searchBoxTwo);

// Display Search Box on Mouse Enter
heroSearch.addEventListener("mouseenter", () => {
    if (window.innerWidth > 1023) {
        searchWhat.classList.remove("border-effect");
        searchWhat.append(searchBoxOne);
        searchWhere.classList.remove("border-effect");
        searchWhere.append(searchBoxTwo);
        ovalImg_one.classList.add("display-none");
        customLabel_one.classList.add("display-none");
        ovalImg_two.classList.add("display-none");
        customLabel_two.classList.add("display-none");
    } else {
        searchWhere.classList.remove("border-effect");
        searchWhere.append(searchBoxTwo);
        ovalImg_two.classList.add("display-none");
        customLabel_two.classList.add("display-none");
    }
});

// Clear Input Field
searchBtn.addEventListener("click", () => {
    // console.log("clicked");
    if (searchWhere.childElementCount > 1) {
        searchWhere.children[2].value = "";
        // console.log("true");
        // console.log(searchWhere.childElementCount);
        // console.log(searchWhere.children);
        // console.log(searchWhere.children[2].value);
    } else if (searchWhat.childElementCount > 1) {
        searchWhat.children[2].value = "";
        // console.log("true");
        // console.log(searchWhat.childElementCount);
        // console.log(searchWhat.children);
        // console.log(searchWhat.children[2].value);
    }
});

// Display Search Div on Mouse Leave
heroSearch.addEventListener("mouseleave", () => {
    if (window.innerWidth > 1023) {
        searchWhat.classList.add("border-effect");
        searchWhat.removeChild(searchBoxOne);
        searchWhere.classList.add("border-effect");
        searchWhere.removeChild(searchBoxTwo);
        ovalImg_one.classList.remove("display-none");
        customLabel_one.classList.remove("display-none");
        ovalImg_two.classList.remove("display-none");
        customLabel_two.classList.remove("display-none");
    } else {
        searchWhere.classList.add("border-effect");
        searchWhere.removeChild(searchBoxTwo);
        ovalImg_two.classList.remove("display-none");
        customLabel_two.classList.remove("display-none");
    }
});

// CARD ONE LIKES INDICATOR
placesCardImageOne.addEventListener("dblclick", function () {
    // console.log("clicked");
    likesOne.setAttribute("src", "./assets/images/liked.png");
    if (likesCountOne.textContent < 222) {
        likesCountOne.textContent++;
    }
});

likesOne.addEventListener("click", function () {
    // console.log("clicked");
    if (likesCountOne.textContent > 221) {
        // console.log("decrease");
        likesCountOne.textContent--;
        likesOne.setAttribute("src", "./assets/images/heart.png");
    } else if (likesCountOne.textContent < 222) {
        // console.log("Increase");
        likesCountOne.textContent++;
        likesOne.setAttribute("src", "./assets/images/liked.png");
    }
});

// CARD TWO LIKES INDICATOR
placesCardImageTwo.addEventListener("dblclick", function () {
    // console.log("clicked");
    likesTwo.setAttribute("src", "./assets/images/liked.png");
    if (likesCountTwo.textContent < 222) {
        likesCountTwo.textContent++;
    }
});

likesTwo.addEventListener("click", function () {
    // console.log("clicked");
    if (likesCountTwo.textContent > 221) {
        // console.log("decrease");
        likesCountTwo.textContent--;
        likesTwo.setAttribute("src", "./assets/images/heart.png");
    } else if (likesCountTwo.textContent < 222) {
        // console.log("Increase");
        likesCountTwo.textContent++;
        likesTwo.setAttribute("src", "./assets/images/liked.png");
    }
});

// CARD THREE LIKES INDICATOR
placesCardImageThree.addEventListener("dblclick", function () {
    // console.log("clicked");
    likesThree.setAttribute("src", "./assets/images/liked.png");
    if (likesCountThree.textContent < 222) {
        likesCountThree.textContent++;
    }
});

likesThree.addEventListener("click", function () {
    // console.log("clicked");
    if (likesCountThree.textContent > 221) {
        // console.log("decrease");
        likesCountThree.textContent--;
        likesThree.setAttribute("src", "./assets/images/heart.png");
    } else if (likesCountThree.textContent < 222) {
        // console.log("Increase");
        likesCountThree.textContent++;
        likesThree.setAttribute("src", "./assets/images/liked.png");
    }
});

// CARD FOUR LIKES INDICATOR
placesCardImageFour.addEventListener("dblclick", function () {
    // console.log("clicked");
    likesFour.setAttribute("src", "./assets/images/liked.png");
    if (likesCountFour.textContent < 222) {
        likesCountFour.textContent++;
    }
});

likesFour.addEventListener("click", function () {
    // console.log("clicked");
    if (likesCountFour.textContent > 221) {
        // console.log("decrease");
        likesCountFour.textContent--;
        likesFour.setAttribute("src", "./assets/images/heart.png");
    } else if (likesCountFour.textContent < 222) {
        // console.log("Increase");
        likesCountFour.textContent++;
        likesFour.setAttribute("src", "./assets/images/liked.png");
    }
});

// CARD FIVE LIKES INDICATOR
placesCardImageFive.addEventListener("dblclick", function () {
    // console.log("clicked");
    likesFive.setAttribute("src", "./assets/images/liked.png");
    if (likesCountFive.textContent < 222) {
        likesCountFive.textContent++;
    }
});

likesFive.addEventListener("click", function () {
    // console.log("clicked");
    if (likesCountFive.textContent > 221) {
        // console.log("decrease");
        likesCountFive.textContent--;
        likesFive.setAttribute("src", "./assets/images/heart.png");
    } else if (likesCountFive.textContent < 222) {
        // console.log("Increase");
        likesCountFive.textContent++;
        likesFive.setAttribute("src", "./assets/images/liked.png");
    }
});
// CARD SIX LIKES INDICATOR
placesCardImageSix.addEventListener("dblclick", function () {
    // console.log("clicked");
    likesSix.setAttribute("src", "./assets/images/liked.png");
    if (likesCountSix.textContent < 222) {
        likesCountSix.textContent++;
    }
});

likesSix.addEventListener("click", function () {
    // console.log("clicked");
    if (likesCountSix.textContent > 221) {
        // console.log("decrease");
        likesCountSix.textContent--;
        likesSix.setAttribute("src", "./assets/images/heart.png");
    } else if (likesCountSix.textContent < 222) {
        // console.log("Increase");
        likesCountSix.textContent++;
        likesSix.setAttribute("src", "./assets/images/liked.png");
    }
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
