console.clear()

function greetings(personName){
  console.log('Welcome '+ personName);
}

greetings('Mitu');
greetings('Nate')
greetings('Vijay') 

function totalSum(num1, num2, num3){
  console.log('num1 => ' + num1)
  console.log('num2 => ' + num2)
  console.log('num3 => ' + num3)
  console.log(num1 + num2)
}

 totalSum(2, 7);
totalSum(22, 38, 33) 
totalSum();   

function totalSum(num1=10, num2=20, num3=40){
  console.log('num1 => ' + num1)
  console.log('num2 => ' + num2)
  console.log('num3 => ' + num3)
  console.log(num1 + num2 + num3)
}

//  totalSum(2, 7);
// totalSum(22, 38, 33) 
totalSum(); 

function totalSum(num1, num2, num3){
  console.log('num1 => ' + num1)
  console.log('num2 => ' + num2)
  console.log('num3 => ' + num3)
  if(num3 !== undefined){
  console.log(num1 + num2 + num3)
  }else{
    console.log(num1 + num2);
  }
}

 totalSum(2, 7);
// totalSum(22, 38, 33) 
// totalSum();