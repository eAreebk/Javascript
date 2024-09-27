var signalColor = prompt('Please enter trafic signal color in small letters');

if(signalColor === 'red'){
    alert('Must Stop');
}

else if(signalColor === 'yellow'){    //else if
    alert('Get gready to go');
}

else if(signalColor === 'green'){     //else if
    alert('Go now');
}
else{                                   //else
    alert('Enter vaild input')
}

var levelFuel = +prompt('Enter reamaining fuel level in liters');

if (levelFuel<0.25){
    alert('Please refill  the fuel in your car')
}
else{
    alert('Enjoy the journey')
}

var b =82;
 if(b++ === 83){
    alert('true');
 }
 else if(b === 83) {
    alert('true true');
 }
 else if(++b < 84){
    alert('t')
 }