
var colors = ['blue', 'green', 'yellow']

//Add to the beginning         
colors.unshift('red');
document.write(colors + '<br>');

//Add to the end
colors.push('black');
document.write(colors + '<br>');

//Add multiple to the beginning
colors.unshift('white', 'orange');
document.write(colors + '<br>');

//Add multiple to the end
colors.push('puple', 'Cgeen');
document.write(colors + '<br>');

//Remove from the beginning
colors.shift();
document.write(colors + '<br>');

//Remove from the end
colors.pop();
document.write(colors + '<br>');


//The splice() method  is used to change the contents of an array by adding, removing, or replacing elements.

//Adding to the desired position
colors.splice(3,0,'dark blue', 'lightblue');   //3:startIndex     0:No. of values
document.write('Adding after index 3 to 0 values: ' + colors + '<br>');

//Replace to the desired position
colors.splice(3,2,'darkgreen', 'lightgreen');
document.write('Replacing after index 3 to 2 values: ' +colors + '<br> <br>');

//Replace from the desired position
colors.splice(0,4);
document.write('Remove from index 0 to 4 values: ' + colors + '<br> ');


//The slice method extracts a part of an original array or string and returns it into its new arary.

var copyColors = colors.slice(1,3);
document.write('Remove from index 0 to 4 values: ' + copyColors + '<br> <br>');


// //The sort() method sorts an array alphabetically
// colors.sort();
// document.write(colors + '<br>');

// //The reverse() method reverses the elements in an array:
// colors.reverse();
// document.write(colors + '<br>');

// //the toSorted() method as a safe way to sort an array without altering the original array.
// var sorted = colors.reversed();
// document.write(sorted + '<br>');



