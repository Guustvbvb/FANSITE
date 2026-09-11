const clickit = document.querySelector(".clickit");

clickit.addEventListener("mouseover", function () {
    clickit.style.color = "pink";
});

clickit.addEventListener("mouseout", function () {
    clickit.style.color = "yellow";
});

clickit.addEventListener("click", function () {
if (clickit.innerHTML === "CLICK CLICK CLICK CLICK NOW DO IT NOW NOW NOW CLICK") {
clickit.innerHTML = "AAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHIKHAATJAVASCRIPT";
} else {
    clickit.innerHTML = "CLICK CLICK CLICK CLICK NOW DO IT NOW NOW NOW CLICK";
}
});
