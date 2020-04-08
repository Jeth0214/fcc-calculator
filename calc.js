//create a class Calculator
class Calculator {
    constructor(operationTextMessage, displayTextMessage, ){
        this.operationTextMessage = operationTextMessage;
        this.displayTextMessage = displayTextMessage;
        this.reset();
    };

    reset(){
        this.displayTextMessage.innerText = '0';
        this.operationTextMessage.innerText = '';
    };

    inputDisplay(button, e){
        const key = e.target;
        const action = key.dataset.action;
        let keyContent = key.textContent;
        let displayedNum = display.textContent;
        if (!action) {
            if (displayedNum === '0') {
              display.textContent = keyContent;
            } else {
              display.textContent = displayedNum + keyContent;
            }
          }

          if (action === 'decimal') {
            display.textContent = displayedNum + '.'
          };
          if (action === 'decimal' || displayedNum.includes('.')) {
            return;
          };

          if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
          ) {
            display.textContent = keyContent;
          };

    }
    compute(){

    };
}





// Selectors
const calculator = document.querySelector('.calculator');
const calculateButtons = document.querySelectorAll('button');
const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#equals');
const operationTextMessage = document.querySelector('#history');
const displayTextMessage = document.querySelector('#display');
const operatorText = document.querySelector('.operator');


//instanciate a Calculator Class
const calculate= new Calculator(operationTextMessage, displayTextMessage);

calculateButtons.forEach ( button => {
    button.addEventListener('click', (e)=>{
        calculate.inputDisplay(button,e);
    })
});



clearButton.addEventListener('click', () => {
    calculate.reset();
});

document.onload = ()=> {
calculate.reset()};
