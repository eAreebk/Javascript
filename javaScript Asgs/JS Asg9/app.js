var nameSub1 = prompt('Please enter name of subject1');
var nameSub2 = prompt('Please enter name of subject2');
var nameSub3 = prompt('Please enter name of subject3');

var marksSub1 = Number(prompt('Please enter marks of subject1'));
var marksSub2 = Number(prompt('Please enter marks of subject2'));
var marksSub3 = Number(prompt('Please enter marks of subject3'));

var totalMarks = 100; 
var totalSum = 300; 
var obtainSum = marksSub1 + marksSub2 + marksSub3;

document.write(`${nameSub1}  ${totalMarks}  ${marksSub1}  ${(marksSub1 / totalMarks) * 100} % <br>`);
document.write(`${nameSub2}  ${totalMarks}  ${marksSub2}  ${(marksSub2 / totalMarks) * 100} % <br>`);
document.write(`${nameSub3}  ${totalMarks}  ${marksSub3}  ${(marksSub3 / totalMarks) * 100} % <br>`);


document.write(`Total Obtained Marks: ${obtainSum} <br>`);
document.write(`Overall Percentage: ${(obtainSum / totalSum) * 100} % <br>`);
