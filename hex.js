const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("#btn")
const colour = document.querySelector(".color");

btn.addEventListener("click", function() {
    let hexColour = "#";
    for (let i = 0; i < 6; i++) {
        hexColour += hex[getRandom()];
    }
    console.log(hexColour);
    colour.textContent = hexColour;
    document.body.style.backgroundColor = hexColour;
});

function getRandom() {
    return Math.floor(Math.random() * hex.length);
};