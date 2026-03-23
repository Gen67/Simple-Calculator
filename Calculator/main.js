

function cal(){
    const firstNumber = parseFloat( document.getElementById('first-number').value);
const secondNumber = parseFloat(document.getElementById('second-number').value);
const operator = document.getElementById('operator').value; 
const result = document.getElementById('result'); 
let answer; 

    if(operator == 'addition'){
    answer = firstNumber + secondNumber; 
    result.textContent = answer;
    } else if(operator == 'subtraction'){
        answer = firstNumber - secondNumber; 
        result.textContent = answer; 
    } else if(operator == 'multiplication'){
        answer = firstNumber * secondNumber; 
        result.textContent = answer;
    } else if(operator == 'division'){
        if(firstNumber == 0 || secondNumber == 0){
            result.textContent = 'Can not divide a zero';
            result.color = 'red'; 
        } else{
        answer = firstNumber / secondNumber;
        result.textContent = answer;
        }
    }

}

