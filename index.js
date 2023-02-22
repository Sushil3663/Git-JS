// let screenvalue = "";
// let screen = document.getElementById('screen').text();
// buttons = document.querySelectorAll('Button');
// console.log(buttons);
// for(item of buttons){
//     item.addeventlistener('click', (e)=>{
//         buttonText = e.target.innerText;
//         console.log('button is', buttonText);
//         if(buttonText=='x'){
//             buttonText = "*";
//             screenvalue += buttonText;
//             screen.value=screenvalue;
//         }
//         else if(buttonText== "="){
//             screen.value = eval(screenvalue);
//         }
//         else if(buttonText== "CE"){
//             screenvalue = "";
//             screen.value=screenvalue;
//         }
//         else{
//             screenvalue += buttonText;
//             screen.value=screenvalue;
//         }

        
//     })
// }
let screenvalue = "";
function screen(e){
    let screen = document.getElementById('screen');
    buttonText = e.target.innerText;
            console.log('button is', buttonText);
            if(buttonText=='x'){
                buttonText = "*";
                screenvalue += buttonText;
                screen.value=screenvalue;
            }
            else if(buttonText== "="){
                screen.value = eval(screenvalue);
            }
            else if(buttonText== "CE"){
                screenvalue = "";
                screen.value=screenvalue;
            }
            else{
                screenvalue += buttonText;
                screen.value=screenvalue;
                console.log(screenvalue)
            }
}