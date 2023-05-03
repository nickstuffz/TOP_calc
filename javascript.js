let a = 0;
let b = 0;
let op;
let state = 3; //initial calculator state
const container = document.querySelector('#grid-container');
const display = document.querySelector('#display');
display.innerHTML = 0;

function add(a,b) {
    return a+b;
}
function subtract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    if (b === 0) {
        alert("pls don't divide by 0");
        return 0;
    };
    return a/b;
}
function calc(a,b,op) {
return op(a,b);
}

// grid create
for (let i=0; i<4; i++) {
const column = document.createElement('div');
column.setAttribute('class', 'column');
container.appendChild(column);
    for (let j=0; j<4; j++) {
        const square = document.createElement('div');
        square.style.border = '1px solid black';
        square.setAttribute('class', 'square');
        column.appendChild(square);
    }
}

// grid name and click
const squares = document.querySelectorAll('.square');
const butt = ["1","4","7","0","2","5","8",".","3","6","9","=","/","x","-","+"];
// calculator map below:
// 1 2 3 /
// 4 5 6 x
// 7 8 9 -
// 0 . = +
let i = 0;
squares.forEach((square) => {
    square.innerHTML = butt[i];
    square.setAttribute('id',butt[i]);
    i++;
    square.addEventListener('click', () => {
        if (square.id === "=") {
            equals();
        }
        else if (square.id === ".") {
            decimal(square.id);
        }
        else if (square.id === "/" || 
                square.id === "x" ||
                square.id === "-" ||
                square.id === "+") {
            awp(square.id);
        }
        else {
            populate(square.id);
        }
    })
})

function populate(input) {
    if (state === 1) {
        display.innerHTML = input;
        state = 2;
        return;
    }
    else if (state === 3) {
        display.innerHTML = input;
        state = 0;
        return;
    }
    display.innerHTML += input;
}

const operations = {
    "/": divide,
    "x": multiply,
    "-": subtract,
    "+": add,
};

function awp(input) {
    if (state === 2) {
        b = Number(display.innerHTML);
        display.innerHTML = calc(a,b,op);
    }
    a = Number(display.innerHTML);
    op = operations[input];
    state = 1;
    
}

function decimal () {

}
function equals() {
    if (state === 1) {
        return;
    }
    else if (state === 3) {
        a = Number(display.innerHTML);
        display.innerHTML = calc(a,b,op);
        return;
    }
    b = Number(display.innerHTML);
    display.innerHTML = calc(a,b,op);
    state = 3;
}

function clear() {
    display 
    // clear button
}

function backspace() {
    // backspace button
}