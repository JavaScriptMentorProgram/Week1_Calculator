/*import Calculator from './Calculator.js';

var calculator = new Calculator();*/

let calculator = require('./Calculator.js');

function calculation(left, operator,right){
  switch(operator){
    case "+": return calculator.add(left, right); break;
    case "-": return calculator.sub(left, right); break;
    case "*": return calculator.multi(left, right); break;
    case "/": return calculator.div(left,right); break;
    case "%": return calculator.mod(left,right); break;
    case "=": return calculator.getResult();
  }
}


export default class CalForm{
  constructor(){
    this.numLeft = 0; //the first operated number
    this.numRight = 0; //the second operated number
    this.numShow = 0; //the number showed in the result Show screen
    this.result = 0; // the calculated result
    this.operatorInputState = 0; //{0,1}, 0 represent no operator input, 1, have input operators
    this.operator = 0; //{1,2,3,4,5}(1,+),(2,-),(3,*), (4,/),(5,%)
    this.quit = 0; //{0,1}
  }

  calculate(){
    this.numShow = document.getElementById('result').value;
    this.numRight = Number(this.numShow);
    if(this.numLeft != 0 && this.quit != 1){
      switch(this.operator){
        case 1:this.result = calculation(this.numLeft,'+',this.numRight);break;
        case 2:this.result = calculation(this.numLeft,'-',this.numRight);break;
        case 3:this.result = calculation(this.numLeft,'*',this.numRight);break;
        case 4:if(this.numShow != 0){this.result = calculation(this.numLeft,'/',this.numRight);}else{document.getElementById('result').innerHTML = 'the divider can not be zero'; setTimeout(clearnote,4000)} break;
        case 5:this.result=calculation(this.numLeft,'%',this.numRight);break;
      }
      this.quit = 1;
    }
    else{
      this.result = this.numRight;
    }

    this.numShow = String(this.result);
    document.getElementById('result').value = this.numShow;
    this.numLeft = this.result;
  }

  numberListener(num){
    console.log("number");
    event.preventDefault();
    console.log(num);
    var str = String(document.getElementById('result').value);
    if( str != '0'){
      if(str != '-0'){
        if(this.operatorInputState == 0){
          str = str;
        }else{
          str = '';
        }
      }else{
        str = '-';
      }
    }else{
      str = '';
    }
    str = str + String(num);
    document.getElementById('result').value = str;
    this.operatorInputState = 0;
    this.quit = 0;
  }

  zeroListener(){
    event.preventDefault();
    var str = String(document.getElementById('result').value);
    if(str!="0"){
      if(this.operatorInputState == 0){
        str = str + '00';
      }else{
        str = '0';
      }
    }else{
      str = '0';
    }

    document.getElementById('result').value = str;
    this.operatorInputState = 0;
    console.log(str);
  }

  dotListener(){
    event.preventDefault();
    var str = String(document.getElementById('result').value);
    if( str != '0'){
      if(this.operatorInputState == 0){
        str = str;
      }else{
        str = '0';
      }
    }else{
      str = '0';
    }

    for (var i = 0; i < str.length; i++){
      if(str.substring(i,1) == '.')
        return false;
    }
    //str = str + '.';
    document.getElementById('result').value = str;
    this.operatorInputState = 0;
    console.log(str);
  }

  backspaceListener(){
    event.preventDefault();
    var str = String(document.getElementById('result').value);

    if(str != '0'){
      str = str;
    }else{
      str = '';
    }

    str = str.substr(0, str.length-1);

    if(str != ''){
      str = str;
    }else{
      str = '0';
    }

    document.getElementById('result').value = str;
    console.log(str);
  }

  clearListener(){
    event.preventDefault();
    this.numLeft = 0;
    this.numRight = 0;
    this.result = 0;
    this.numShow= '0';
    document.getElementById('result').value = '0';
    this.operatorInputState = 0;
    this.operator = 0;
    this.quit = 0;
  }

  addListener(ob){
    event.preventDefault();
    console.log('this is add action');
    ob.calculate();
    this.operatorInputState = 1;
    this.operator = 1;
  }

  subListener(ob){
    event.preventDefault();
    console.log('this is sub action');
    ob.calculate();
    this.operatorInputState = 1;
    this.operator = 2;
  }

  multiListener(ob){
    event.preventDefault();
    console.log('this is multi action');
    ob.calculate();
    this.operatorInputState = 1;
    this.operator = 3;
  }

  divListener(ob){
    event.preventDefault();
    console.log('this is div action');
    ob.calculate();
    this.operatorInputState = 1;
    this.operator = 4;
  }

  modeListener(ob){
    event.preventDefault();
    console.log('this is mode action');
    ob.calculate();
    this.operatorInputState = 1;
    this.operator = 5;
  }

  equalListener(ob){
    event.preventDefault();
    console.log('this is euqal action');
    ob.calculate();
    this.operatorInputState = 1;
    this.numLeft = 0;
    this.result = 0;
    this.numShow = '0';
  }

  positiveListener(){
    event.preventDefault();
    var str = String(document.getElementById('result').value);
    var firstLetter = str.substr(0,1);
    var tempStr = null;
    if(firstLetter != '-'){
      tempStr = '-' + str;
    }else{
      tempStr = str.substr(1);
    }
    str = tempStr;
    document.getElementById('result').value = str;
  }
}

let calForm = new CalForm();
module.exports = calForm;




