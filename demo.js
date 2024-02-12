let main = document.querySelector(".main");
let cursor = document.querySelector(".cursor");
main.addEventListener("mousemove", function (value) {
    cursor.style.left = value.x + "px";
    cursor.style.top = value.y + "px";
});
