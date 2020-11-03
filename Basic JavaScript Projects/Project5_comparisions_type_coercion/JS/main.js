function typeString()   {
    var name = "Stan"
    document.write(typeof "Word");
}

function test_Nan()    {
    var A = "Earth"
    document.getElementById("Test").innerHTML = isNaN('Earth');
    
}

function test1_Nan()    {
    var B = "7.42"
    document.getElementById("Test").innerHTML = isNaN('7.42');
}

function too_Large()    {
    var bigNum = 23000000000000000000000E308;
    document.getElementById("infinite").innerHTML = bigNum;
}

function too_Small()    {
    var smallNum = -5000000000000000000000000000E308;
    document.getElementById("infinite").innerHTML = smallNum;
}

function bool_True()    {
    document.write(8 > 3);
}

function bool_False()   {
    document.write(10 < 5);
}

function console_Log()      {
    console.log(9 * 3);
}

function type_Coer()    {
    document.write("12" + 9);
}

function bool_Console()     {
    console.log(4 > 7);
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

