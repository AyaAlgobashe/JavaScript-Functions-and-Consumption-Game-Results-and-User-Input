///////////////////Q1

function calcAverage (){
    let averageScore = 0;
    let sum=0
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
        averageScore=sum/(arguments.length);
    }

    return averageScore;

}
function checkWiner(score1, score2,score3,score4,score5,score6){
    let team1avarage= calcAverage(score1,score2,score3);
    let team2avarage=calcAverage(score4,score5,score6);
     if (team1avarage>team2avarage){
        console.log(`The Winer is Team1 with score =  ${team1avarage}`)
     }
     else{
        console.log(`The Winer is Team2 with score =  ${team2avarage}`)


     }
    
}




///////Testing
printVarabels(7,5,4)
printVarabels(6,5)
printVarabels(2,3,4,5)
//console.log(value_5)
value_4=90;
//console.log(value_4)
function printVarabels(value_1,value_2,value_3){
   var value_4=3
   var value_5=5

  return console.log(value_1 ,value_2 ,value_3)
  
  
}
