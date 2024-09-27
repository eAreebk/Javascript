
var studentNames = [];                               //Decalaring Array 
var profile = ['areeb', 'male', 'student'];        //Initializng Array   
let age = [22 , 56 , 45];                                                        //Number Array 
const answer = [true, false, false, true];                                      //Boolean Array
var mixed = ['areeb', 22, true];                                                 //Mix Array 

var eduQualf = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phill', 'PHD'];      //String Array   


var student = ['abeer', 'ahsan', 'shariq'];
var score = [390, 412, 499];
var totalScore = 500;
var percentage = [];

//For percentage

for(var j=0; j<score.length; j++){
     percentage[j]=(score[j]/totalScore)*100
}

for(var i=0; i<score.length; i++){
    document.write(`${student[i]} scores ${score[i]} out of ${totalScore} Percentage is : ${percentage[i]} % <br>`)
}