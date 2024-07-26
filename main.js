var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var op1;
var op2;
var op;
var res;

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var val = this.getAttribute('data-value');
        if (val == '+' || val =='-' || val == 'x' || val == '/') {
            if(val=='+'){
                op = '+';
                op1 = parseFloat(display.textContent);
                display.textContent = '';
            }
            else if(val=='-'){
                op = '-';
                op1 = parseFloat(display.textContent);
                display.textContent = '';
            }
            else if(val=='x'){
                op = '*';
                op1 = parseFloat(display.textContent);
                display.textContent = '';
            }else{
                op = '/';
                op1 = parseFloat(display.textContent);
                display.textContent = '';
            }
            
        } else if (val == '=') {
            op2 = parseFloat(display.textContent)
            res = eval(op1 + op + op2);
            display.innerText = res;
            
        } else if (val == 'C') {
            display.textContent = '';
        }else {
            display.innerText += val;
        }
    });
}
