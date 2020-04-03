//create a class Calculator
class Calculator {
    constructor(operationTextMessage, displayTextMessage){
        this.operationTextMessage = operationTextMessage;
        this.displayTextMessage = displayTextMessage;
        this.reset();
    };

    reset(){
        this.operationText = '';
        this.displayText = '0';
        this.operator = undefined;
        console.log(this.displayText)
    };

    appendNumber(number){
        
        if(this.displayText[0] === '0'){
            let withoutZeroAtFirst = this.displayText.slice(1);
            this.displayText = withoutZeroAtFirst;
        };
        if(number === '.' && this.displayText.includes('.')) {
            return
        }

        this.displayText = this.displayText.toString() + number.toString();
    };

    chooseOperator(operator){

    };

    compute(){

    };

    updateDisplayText(){
        this.displayTextMessage.innerText = this.displayText;
    };
}





// Selectors
const numberButtons = document.querySelectorAll('.numberButtons');
const operators = document.querySelectorAll('.operators');
const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#equals');
const operationTextMessage = document.querySelector('#history');
const displayTextMessage = document.querySelector('#display');


//instanciate a Calculator Class
const calculator = new Calculator(operationTextMessage, displayTextMessage);

numberButtons.forEach ( button => {
    button.addEventListener('click', ()=>{
        calculator.appendNumber(button.innerText);
        calculator.updateDisplayText();
    })
});

clearButton.addEventListener('click', () => {
    calculator.reset();
    calculator.updateDisplayText();
});
