document.addEventListener("DOMContentLoaded", function(){
    createBoard(32);
})

function createBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.style.backgroundColor = "yellow";
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
    }
}

