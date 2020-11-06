var x = 8;
function Subtract_numbers_1()    {
document.write(40 - x + "<br>");
}

function Subtract_numbers_2()   {
    document.write(25 - x + "<br>");
}
Subtract_numbers_1();
Subtract_numbers_2();
Subtract_numbers_3();
Subtract_numbers_4();

function Subtract_numbers_3()   {
    var y = 2;
    document.write(4 - y);
}


function Subtract_numbers_4()   {
    document.write(x - y);
}

function get_Date()   {
    if (new Date().getHours() < 20)     {
        document.getElementById("time").innerHTML = "There is plenty of time left today!";
    }

}


function Subtract_numbers_4()   {
    console.log(y);
}

function my_Age()      {
    var x = 58;     //Defininng local variable
        if (x > 50)     {       //if statement to check conditional statement
            document.getElementById("age").innerHTML = "I am so old!";      //Retrieving the element and writing string to the screen
        }
        
}

function name_Saying()       {
    username = document.getElementById("username").value;     //Getting the value of the element by id
       if (username == "Sally")     {                       //Testing the conditional if statement to see if id is equal to given string
           quoted = "Carpe Diem!";                          //Creating a string  if statement is true 
       }
       else    {
           quoted= "Have a nice day!";                      //Creating a string if false
       }
       document.getElementById("prompt").innerHTML = quoted;    //Retrieving an element by id and writing correct string
   }






