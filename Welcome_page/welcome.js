let tag = document.querySelector(".text");
let fill = document.querySelector(".fill");
let button = document.querySelector("button");
let form=document.querySelector("form");
let input=document.createElement("input");

button.addEventListener("click", function() {
    fill.parentNode.removeChild(fill);
    form.style.visibility="visible";
});
