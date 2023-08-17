let input = document.querySelector('.input');

let power = "";

function insert(num) {
   input.textContent = input.textContent + num;

}

function clean() {
   input.textContent = ""
   power = "";
}


function back() {
   let exp = input.textContent;
   input.textContent = exp.substring(0,exp.length-1) 
}

function egual() {
   let exp = input.textContent;
   if(input.textContent.includes('^')){
      let tmp = input.textContent.split('^')
      input.textContent = Math.pow(eval(power),+tmp[1]);
       power = "";
       return;
   }

   if (exp) {
      input.textContent = eval(exp);
   }
  
} 


function percent() {
   input.textContent = eval(input.textContent)/100;
}

function pi() {
   input.textContent  += Math.PI.toFixed(8);
}
function e() {
   input.textContent  += Math.E.toFixed(8);
}
//корень квадратный ,в квадрат в  -1 степень

function operantion(name) {
     if(name == "sqrt")
         input.textContent = Math.sqrt(eval(input.textContent));
     if(name == "sqr")
         input.textContent = Math.pow(eval(input.textContent));
     if(name == "^-1")
         input.textContent = Math.pow(eval(input.textContent ), -1);
     if(name == "^")
         power = input.textContent;
          input.textContent += "^";
 }

//факториал числа

function factorial(n) {
   return (n != 1) ? n * factorial(n - 1) : 1;
}
function fact() {
  input.textContent = factorial(+eval(input.textContent));
}

//Логарифмы

function log(name) {
   if (name == 'Ig') {
     input.textContent = Math.log10(eval(input.textContent));  
   }  
   if (name == 'In') {
         input.textContent = Math.log(eval(input.textContent));   
   }
}



//Синусы и  косинусы

function f(name) {
    if(name == 'sin') {
      input.textContent = parseFloat(Math.sin(eval(input.textContent)/180*Math.PI).
      toFixed(8).toString());
    }
    if(name == 'cos') {
      input.textContent = parseFloat(Math.cos(eval(input.textContent)/180*Math.PI).
      toFixed(8).toString());
    }
    if(name == 'tan') {
      input.textContent = parseFloat(Math.tan(eval(input.textContent)/180*Math.PI).
      toFixed(8).toString());
    }
    if(name == 'ctg') {
      input.textContent = parseFloat(1/Math.tan(eval(input.textContent)/180*Math.PI).
      toFixed(8).toString());
    }
}

console.log('как дела ?');



let button = document.querySelector('#myButton');

  if(button !== null) {
   button.addEventListener('click',function() {
      alert('click!');
   });
  }
