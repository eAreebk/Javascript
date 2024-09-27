var userName = prompt('Please enter your name');

alert('Dear ' + userName + ', you are welcome');


    var multNum = +prompt('Please eneter number to get its multiplication table');


for(var i=1; i<11; i++){

    var prod = multNum*i;
    document.write(`${multNum} * ${i} = ${prod} <br>`);
}


