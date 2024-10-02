// // const display = document.getElementById('display');
// // document.getElementById('keys').addEventListener('click', (e) => {
// //     if (e.target.value === '=')  try {
// //                 display.value = eval(display.value);
// //             } catch {
// //                 display.value = 'Error';
// //             }
// //     else if (e.target.value === 'C') display.value = '';
// //     else if (e.target.value === 'D') 
// //         // display.value = display.value.slice(0, -1);
// //     display.value = display.value.substring(0, display.value.length - 1);
// //     else display.value += e.target.value;
// // });




// let input = document.querySelector('#inputArea');
// let buttons = document.querySelectorAll('button');

// let string = '';
// let arrayvar = Array.from(buttons);
// arrayvar.forEach(button => {
//     button.addEventListener('click', (e) => {
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }

//         else if(e.target.innerHTML == 'AC'){
//             string = '';
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'Del'){
//             string = string.substring(0, string.length-1);
//             input.value = string;
//         }
//         else {
//             string += e.target.innerHTML;
//             input.value = string;
            
//         }
        
//     })
// })