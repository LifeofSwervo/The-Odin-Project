let color = "black";
let click = false;

// Create board upon DOM content loading
document.addEventListener("DOMContentLoaded", function(){
    // Default size of board (grid) set to 16
    createBoard(16);

    // Allow drawing on board
    document.querySelector("body").addEventListener("click", function(e) {
        if (e.target.tagname != "BUTTON") {
            click = !click;
            let draw = document.querySelector("#draw");

            // Indicator informing user they are allowed (and not allowed) to draw
            if (click) {
                draw.innerHTML = "Now You Can Draw";
            } else {
                draw.innerHTML = "You're not allowed to draw."
            }
        }
    })

    let btnPopup = document.querySelector("#popup")

    // Popup prompt asking player the size of the board. (If they would like to increase or decrease it)
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
    } else if (input <= 0 || input > 100) { // If less than (or equal to) 0 or more than 100
        message.innerHTML = "Input a number between 1 and 100."
    } else {
        message.innerHTML = "Now you can draw!"
        return input
    }
}

function colorDiv() {
    //Sets the color of the pen to either random or black. (Depending on which button is selected)
    if (click) {
        if (color == "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)` // Randomizes color
        } else {
            this.style.backgroundColor = 'black'
        }
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

function resetBoard() {
    let divs = document.querySelectorAll(".board div");
    divs.forEach((div) => div.style.backgroundColor = 'white');

}
