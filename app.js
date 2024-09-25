let input = document.querySelector('#inputArea');
let buttons = document.querySelectorAll('button');

let string = '';
let arrayvar = Array.from(buttons);
arrayvar.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = '';
            input.value = string;
        }
        else if(e.target.innerHTML == 'Del'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
            
        }
        
    })
})