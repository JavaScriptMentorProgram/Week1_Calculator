/*import CalForm from './CalForm.js';
var calForm = new CalForm();*/

/*var calForm = require('./CalForm.js');*/

let calForm= require('./CalForm.js');
function addListeners(){
  let buttons = document.querySelectorAll('button');
  let value = null;
  for(let i = 0; i < buttons.length; i++){
    value = buttons[i].value;
    switch(buttons[i].getAttribute('type')){
      case 'number': buttons[i].addEventListener('click',function(){
        event.preventDefault();
        console.log("number");
        calForm.numberListener(this.value);
      }); break;
      case 'clear': buttons[i].addEventListener('click', calForm.clearListener); break;
      case 'positiveornot': buttons[i].addEventListener('click', calForm.positiveListener); break;
      case 'mode': buttons[i].addEventListener('click', function(){
        calForm.modeListener(calForm)
      }); break;
      case 'divide': buttons[i].addEventListener('click', function(){
        calForm.divListener(calForm)
      }); break;
      case 'multi': buttons[i].addEventListener('click', function(){
        calForm.multiListener(calForm)
      }); break;
      case 'sub': buttons[i].addEventListener('click', function(){
        calForm.subListener(calForm)
      }); break;
      case 'add': buttons[i].addEventListener('click', function(){
        calForm.addListener(calForm)
      }); break;
      case 'zero': buttons[i].addEventListener('click', calForm.zeroListener); break;
      case 'dot': buttons[i].addEventListener('click', calForm.dotListener); break;
      case 'backspace': buttons[i].addEventListener('click', calForm.backspaceListener); break;
      case 'equal': buttons[i].addEventListener('click', function(){
        calForm.equalListener(calForm)
      }); break;
    }
  }
}

addListeners();
