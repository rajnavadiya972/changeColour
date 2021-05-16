const btA = document.querySelector("#bt1");
const btB = document.querySelector("#bt2");
const btC = document.querySelector("#bt3");

btA.addEventListener("click", function() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    const btn = document.querySelector("#btn")
    const colour = document.querySelector(".color");
    colour.textContent = "#f1f2f3"
    document.body.style.backgroundColor = "#f1f2f3";
    btn.addEventListener("click", function() {
        let hexColour = "#";
        for (let i = 0; i < 6; i++) {
            hexColour += hex[getRandom()];
        }
        colour.textContent = hexColour;
        document.body.style.backgroundColor = hexColour;
    });

    function getRandom() {
        return Math.floor(Math.random() * hex.length);
    };

});

btB.addEventListener("click", function() {
    const btn = document.querySelector("#btn")
    const colour = document.querySelector(".color");
    colour.textContent = "rgb(241,242,243)";
    document.body.style.backgroundColor = "rgb(241,242,243)";
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

});

btC.addEventListener("click", function() {
    const hex = ["antiquewhite", "aqua", "quamarine", "navy", "olive", "gold", "greenyellow", "green", "plum", "hotpink", "blue"]
    const btn = document.querySelector("#btn")
    const colour = document.querySelector(".color");
    colour.textContent = "gray";
    document.body.style.backgroundColor = "gray";

    btn.addEventListener("click", function() {
        let hexColour = hex[getRandom()];
        colour.textContent = hexColour;
        document.body.style.backgroundColor = hexColour;
    });

    function getRandom() {
        return Math.floor(Math.random() * hex.length);
    };


});