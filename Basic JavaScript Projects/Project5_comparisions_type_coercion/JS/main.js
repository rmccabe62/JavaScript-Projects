function typeString()   {
    var name = "Stan"       //defining string variable
    document.write(typeof "Word");  //writing type of data to screen
}

function test_Nan()    {
    var A = "Earth"         //Defining variable for nan test
    document.getElementById("Test").innerHTML = isNaN('Earth');     //Getting element to test for nan and writing result to screen
    
}

function test1_Nan()    {
    var B = "7.42"          //Defining numeral as string to test for nan
    document.getElementById("Test").innerHTML = isNaN('7.42');      //getting element to test for nan and writing result to screen
}

function too_Large()    {
    var bigNum = 23000000000000000000000E308;       //Defining numeric variable to test for infinity type 
    document.getElementById("infinite").innerHTML = bigNum;     //Getting element to test for infinite case
}

function too_Small()    {
    var smallNum = -5000000000000000000000000000E308;       //Defining numeric variable to test for negative infinity case
    document.getElementById("infinite").innerHTML = smallNum;   //Getting element to test for negative infinity case
}

function bool_True()    {
    document.write(8 > 3);      //Testing for boolean true statement
}

function bool_False()   {
    document.write(10 < 5);     //Testing for boolean false statement
}

function console_Log()      {
    console.log(9 * 3);         //Using console log to write the product to the console 
}

function type_Coer()    {
    document.write("12" + 9);   //Using coersion function to concatenate two different data types and write them to the screen
}

function bool_Console()     {
    console.log(4 > 7);         //Using console log to test for boolean true or false statement
}

function equals_Compare()   {
    document.write((2 + 3) == 5);
}

function match_Typevalue()  {
    x= 7
    y= 7
    document.write(x === y);
}

function diff_Both()    {
    x = 10
    y = "Eleven"
    document.write(x === y);
}

function diff_Type()    {
    x = 5
    y = "5"
    document.write(x === y);
}

function diff_Value()   {
    x = "Hi"
    y = "Hello"
    document.write(x === y);
}


function and_True()    {
    document.write(7>6 && 3<5);
}

function and_False()    {
    document.write(15>10 && 5<2);
}

function or_True()  {
    document.write(4>8 || 3>1);
}

function or_False()     {
    document.write(6<2 || 7>9);
}

function not_True()     {
    document.getElementById("Not").innerHTML = !(4 > 8);
}

function not_False()    {
    document.getElementById("Not").innerHTML = !(9 < 10);
}

