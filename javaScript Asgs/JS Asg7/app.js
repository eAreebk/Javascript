var a = 2, b = 1;

var result = --a - --b + ++b + b--;

document.write(`
    Result:                    <br>

    --a = 1         <br>  
    --b = 0         <br>
    ++b = 1         <br>
    b-- = 1         <br>   <br>

  
    --a - --b + ++b + b-- = 1 - 0 + 1 + 1  = 3 <br>   <br>   <br>

    Accurate result = ${result};

    `)