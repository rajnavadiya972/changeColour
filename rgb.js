const btn = document.querySelector("#btn")
const colour = document.querySelector(".color");

btn.addEventListener("click", function() {
    let x = getRandom();
    let y = getRandom();
    let z = getRandom();

    let hexColour = `rgb(${x},${y},${z})`;
    colour.textContent = hexColour;
    document.body.style.backgroundColor = hexColour;
});

function getRandom() {
    return Math.floor(Math.random() * 255);
};