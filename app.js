let screen = document.querySelector(".calculatorScreen");

const uploadToScreen = (number) => {
screen.innerText += number
};


const clearScreen = () => {
screen.innerHTML = "";
};

// operators = "+", "-", "*", "/"

const calculateTerms = (num1, num2, sign) => {
if (sign === "+") {
    screen.innerHTML = parseFloat(num1) + parseFloat(num2);
} else if (sign === "-") {
    screen.innerHTML = parseFloat(num1) - parseFloat(num2);
} else if (sign === "*") {
    screen.innerHTML = parseFloat(num1) * parseFloat(num2);
} else if (sign === "/") {
    screen.innerHTML = parseFloat(num1) / parseFloat(num2);
}

}

//  splitInput function
const splitInput = () => {
let put = screen.textContent;

console.log(put);

if (put.includes("+")) {
    let solve = put.split("+");
    console.log("input:", solve);
    calculateTerms(solve[0], solve[1], "+");
} else if (put.includes("-")) {
    let solve = put.split("-");
    console.log("input:", solve);
    calculateTerms(solve[0], solve[1], "-");
} else if (put.includes("*")) {
    let solve = put.split("*");
    console.log("input:", solve);
    calculateTerms(solve[0], solve[1], "*");
} else if (put.includes("/")) {
    let solve = put.split("/");
    console.log("input:", solve);
    calculateTerms(solve[0], solve[1], "/");
} else {
    alert("somethings wrong");
}

};


