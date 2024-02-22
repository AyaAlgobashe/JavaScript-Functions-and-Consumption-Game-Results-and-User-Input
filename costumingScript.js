
checkWiner(1,5,3,2,6,4);
console.log(value_4)
printVarabels(4,6,6)
console.log(value_4)


///////////Q2
function checkNumber(checkNumber){
while(isNaN(checkNumber)||checkNumber==""){
    checkNumber=Number(prompt("Plese enter  number not srings"))
}
   return checkNumber;
   

}

let firstNumber=checkNumber(Number(prompt("Pleas enter Number one","0")))
let secondNumber=checkNumber(Number(prompt("Pleas enter Number two","0")))
var sumation = firstNumber+ secondNumber;
console.log(`the sumation of two number is ${sumation}`);



////////Q3
//  let sizeNumber=Number(prompt("Enter size of numbers"))
//  let sum=0;
//  let count;
// for(let i=0 ;i<sizeNumber;i++){
    
//     count=checkNumber(Number(prompt("enter number")))
//     sum+=count;

// }
// console.log(`the sumation =${sum}`)


