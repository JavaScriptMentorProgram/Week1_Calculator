class Calculator{
  constructor(){
    this._result = 0;
  }

  get result(){
    return this._result;
  }

  add(left, right){
    return this._result = left+right;
  }

  sub(left, right){
    return this._result = left-right;
  }

  multi(left, right){
    return this._result = left*right;
  }

  div(left, right){
    if(right === 0)
      throw Error("Wrong input!");
    else
      return this._result = left/right;
  }

  mod(left, right){
    return this._result = left%right;
  }

  equal(){
    return this._result;
  }

  isNumber(param){
    return typeof param === Number;
  }
}


let calculator = new Calculator();
module.exports = calculator;