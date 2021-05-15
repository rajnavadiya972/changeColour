const hex = ["antiquewhite", "aqua", "quamarine", "navy", "olive", "gold", "greenyellow", "green", "plum", "hotpink", "blue"]
const btn = document.querySelector("#btn")
const colour = document.querySelector(".color");

btn.addEventListener("click", function() {
    let hexColour = hex[getRandom()];
    colour.textContent = hexColour;
    document.body.style.backgroundColor = hexColour;
});

function getRandom() {
    return Math.floor(Math.random() * hex.length);
};