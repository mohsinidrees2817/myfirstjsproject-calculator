
buttons = document.querySelectorAll('button');

let userInput = document.getElementById('user-input');
let mainOutput = document.getElementById('main-output');

let prevInput1 = document.getElementById('prev-input1');
let prevOutput1 = document.getElementById('prev-output1');

screenValue = '';

// userInput.addEventListener('keyup', function(){
//     userInput.focus();
// })

// function focusFunction(){
//     userInput.focus();
// }

// document.getElementById("container").addEventListener('Keyup', () => {
//     document.getElementById("user-input").focus();
//   });


// for (let index = 0; index < containerColor.length; index++) {
//     const element = containerColor[index];
//     element.style.background = 'grey';
// }

// let containerr = document.getElementById('background');


window.onkeypress = function(e){
    const val = e.keyCode;
    if (val >= 37 & val <= 57){
        const userInput2 = userInput.value.split('');
        const inputtt = e.key;
        userInput2.push(inputtt);
        const string = userInput2.join('');
        userInput.value = string;
    }
    else if(val == 08){
        const userInput2 = userInput.value.split('');
        userInput2.pop();
        const string = userInput2.join('');
        userInput.value = string;
    }
    else if(val == 13){
        mainOutput.value = eval(userInput.value);
        prevInput1.value = userInput.value;
        prevOutput1.value = mainOutput.value;
        userInput.value = '';
    }
    else {
        // alert('please enter a number');
    }
}

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'AC') {
            userInput.value = '';
            mainOutput.value = '';
            prevInput1.value = '';
            prevOutput1.value = '';
        }
        else if (buttonText == '=') {
            mainOutput.value = eval(userInput.value);
            prevInput1.value = userInput.value;
            prevOutput1.value = mainOutput.value;
            userInput.value = '';

        }
        else if (buttonText == 'X') {
            const userInput2 = userInput.value.split('');
            userInput2.pop();
            const string = userInput2.join('')
            userInput.value = string;

        }
        else {
            userInput.value += buttonText;
            mainOutput.value = '';
        }
    })
}


//////////////////////////////////////mode change//////////////////////////////////

var x = true;
document.getElementById('mode').addEventListener('click', function(){
    if(x){
        const buttons =  document.getElementsByClassName('btn');
        const containerColor = document.getElementsByClassName('container');
        const operators = document.getElementsByClassName('operators');
        const textArea = document.getElementsByTagName('input');

        for (let index = 0; index < containerColor.length; index++) {
            const element = containerColor[index];
            element.style.background = 'grey';
        }
        for (let index = 0; index < textArea.length; index++) {
            const element = textArea[index];
            element.style.background = 'grey';
        }

        for (let index = 0; index < buttons.length; index++) {
            const element = buttons[index];
            element.style.background = '#FFFFFF';
            element.style.color = 'black';
        }
        for (let index = 0; index < operators.length; index++) {
            const element = operators[index];
            element.style.background = '#FF9500';
        }

        x = false;
    }

    else{
        const buttons =  document.getElementsByClassName('btn');
        const containerColor = document.getElementsByClassName('container');
        const firstthreebtn = document.getElementsByClassName('first3-btn');
        const operators = document.getElementsByClassName('operators');
        const textArea = document.getElementsByTagName('input');
        for (let index = 0; index < buttons.length; index++) {
            const element = buttons[index];
            element.style.background = '#505050';
            element.style.color = 'white';
        }
        for (let index = 0; index < containerColor.length; index++) {
            const element = containerColor[index];
            element.style.background = 'black';
        }
        for (let index = 0; index < textArea.length; index++) {
            const element = textArea[index];
            element.style.background = 'black';
            // document.getElementById("user-input").focus();
        }
        for (let index = 0; index < firstthreebtn.length; index++) {
            const element = firstthreebtn[index];
            element.style.background = '#D4D4D2';
            element.style.color = 'black';

        }
        for (let index = 0; index < operators.length; index++) {
            const element = operators[index];
            element.style.background = '#FF9500';
        }
        x = true;

}
})