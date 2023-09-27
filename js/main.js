let calc = prompt('What do you want to do? (Addition, Subtraction, Multiplication, Division)');

let firstPrompt = prompt('Write the first number:');

let secondPrompt = prompt('Write the second number');

const firstNum = +firstPrompt;

const secondNum = +secondPrompt;

if (calc === '+') {
  alert(`${firstPrompt} + ${secondPrompt} = ` + (firstNum + secondNum))
} else if (calc === '-') {
  alert(`${firstPrompt} - ${secondPrompt} = ` + (firstNum - secondNum))
} else if (calc === '*' ) {
  alert(`${firstPrompt} * ${secondPrompt} = ` + (firstNum * secondNum))
} else if (calc === '/') {
  alert(`${firstPrompt} / ${secondPrompt} = ` + (firstNum / secondNum))
} else {
  alert('Write, please +, -, * or /')
}