let calc;

do {
  calc = prompt('What do you want to do? ( + , - , * , / )')

  if (calc !== '+' && calc !== '-' && calc !== '*' && calc !== '/') {
    alert('Write, please +, -, * or /');
  }

} while (calc !== '+' && calc !== '-' && calc !== '*' && calc !== '/');

let firstPrompt;

do {
  firstPrompt = prompt('Write the first number:')

  if (isNaN(firstPrompt)) {
    alert(firstPrompt + ` is not a number!`)
  }

} while (isNaN(firstPrompt));

let secondPrompt;

do {
  secondPrompt = prompt('Write the first number:')

  if (isNaN(secondPrompt)) {
    alert(secondPrompt + ` is not a number!`)
  }
  
} while (isNaN(secondPrompt));

const firstNum = +firstPrompt;

const secondNum = +secondPrompt;

if (calc === '+') {
  alert(`${firstPrompt} + ${secondPrompt} = ` + (firstNum + secondNum))
} else if (calc === '-') {
  alert(`${firstPrompt} - ${secondPrompt} = ` + (firstNum - secondNum))
} else if (calc === '*') {
  alert(`${firstPrompt} * ${secondPrompt} = ` + (firstNum * secondNum))
} else if (calc === '/') {
  alert(`${firstPrompt} / ${secondPrompt} = ` + (firstNum / secondNum))
}