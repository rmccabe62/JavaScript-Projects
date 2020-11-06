function fixed_Number()      {
    var num = 3.674236;                             //Defining a local variable and assigning a value to it
    var x = num.toFixed(10);                        //Defining a variable and rounding the result
    document.getElementById("demo").innerHTML = x;  //Retrieving an element by id and writing a result to the screen 
}

function numberValue()  {
    var num = 24;                                       //Defining a local variable and assigning a value to it
    y = num.valueOf()                                   //Defining a variable that will get the value of a number 
    document.getElementById("value").innerHTML = y;     //Retreiving an element by id and writing a result to the screen
}