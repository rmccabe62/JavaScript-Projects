function addingTwo()     {
    var first_operand = 10;
    var second_operand = 15;
    var X = first_operand + second_operand;
    document.getElementById("math").innerHTML = X;
    
}

function minusTwo()     {
    var minustime = 8-3;
    document.getElementById("math").innerHTML = "8 - 3 =" + minustime;
}

function multiplication()       {
    var simple_math = 8 * 7;
    document.getElementById("math").innerHTML = "8 * 7 =" + simple_math;
}

function division()     {
    var simple_math = 9 / 3;
    document.getElementById("math").innerHTML = "9 / 3 =" + simple_math;
}

function mathExplosion()    {
    var all_math = (3 + 5) * 8 / 2 -3;
    document.getElementById("math").innerHTML = "3 plus 5 multiplied by 8 divided in half minus 3 equals " + all_math;

}

function modOp()    {
    var remaindMath = 8 % 3;
    document.getElementById("math").innerHTML = "When you divide 8 by 3 your remainder is " +remaindMath;
}

function negation_Operation()   {
    var x = 14
    document.getElementById("math").innerHTML = -x;
}

function incrementNumber()      {
    var x = 9;
    x++;
    document.write(x);
}

function decrementNumber()   {
    var y = 11;
    y--;
    document.write(y);

}
