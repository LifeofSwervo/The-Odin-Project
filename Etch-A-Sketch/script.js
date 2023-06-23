let color = "black";

document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);

    let btnPopup = document.querySelector("#popup")
    btnPopup.addEventListener("click", function() {
        let size = getSize();
        createBoard(size);
    })
})

function createBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        
        div.style.backgroundColor = 'white'
        
        // Drawing event listener
        div.addEventListener("mouseover", colorDiv)

        board.insertAdjacentElement("beforeend", div);
    }

}

function getSize() {
    let input = prompt("What will be the size of the board?");
    let message = document.querySelector("#message");
    if (input == "") { // If string input
        message.innerHTML = "Please provide a number."
    } else if (input <= 0 || input > 100) { // If less than 0 or more than 100
        message.innerHTML = "Input a number between 1 and 100."
    } else {
        message.innerHTML = "Now you can draw!"
        return input
    }
}

function colorDiv() {
    if (color == "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)` // Randomizes color
    } else {
        this.style.backgroundColor = 'black'
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

function resetBoard() {
    let divs = document.querySelectorAll(".board div");
    divs.forEach((div) => div.style.backgroundColor = 'white');

}
