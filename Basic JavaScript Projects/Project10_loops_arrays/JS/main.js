function Call_Loop()    {
    var Birthday = "";                          //Defining variable and assigning an empty string to it
    var T = 15;                                 //Defining variable and initiating a starting value to do used in a while loop
    while (T < 24)  {                           //Initiating a while loop to test while a condition is met
        Birthday += "<br>" + T;                 //Varia ble will hold a value while condition is true
        T++;                                    //Counter that will increment a variable
    document.getElementById("Loop").innerHTML = Birthday;   //Retrieving an element by id and writing a result to the screen

    }
}

function strng_Length()    {
    var str ="How are you today?";                  //Defining a string variable and assiging a string value to it
    var x = str.length;                             //Defining a variable that will hold the length of a string
    document.getElementById("long").innerHTML = x;  //Retrieving an element by id and writing a result to the screen
}


    var Instruments = ["Guitar", "Drums", "Bass", "Keyboards"]      //Defining variable array to be used in for loop
    var Content = "";                                               //Defining variable to hold result of for loop
    var x;                                                          //Defining variable to act as counter
function for_Loop()     {
    for (x = 0; x < Instruments.length; x++)    {               //Initiating for loop with index counter to make a list from an array
    Content += Instruments[x] + "<br>";                         //Variable will hold string item from array
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;     //Retreiving element by id in order to list from array
}

    var Tools = ["Hammer", "Wrench", "Screwdriver", "Saw"]      //Defining a list of variables in an array
    var Item = "";      a                                         //Defining a variable to hold a value from list array
    var y;                                                        //Defining a variable to be used as an index counter
function array_Function()   {
    for (y = 0; y < Tools.length; y++)      {                   //Initiating a for loop to test if a condition is met
        Item += Tools[y] + "<br>";                              //variable will hold a value from list array and increment index counter
    }
    document.getElementById("Array").innerHTML = Item;             //Retreiving an element by id and writing a value from the list array to the screen           
}
function constant_function()    {
    const Dog = {breed: "collie", color: "black", sex: "male"};
    Dog.breed = "Shepard";
    Dog.health = "good";
    document.getElementById("Constant").innerHTML = "This dog's breed is a  " +Dog.breed  + " and his health is "
        + Dog.health;
}

function let_Keyword()      {
    var a = 20;
    document.write(a);
    {
        let a = 40;
        document.write("<br" + a);
    }
    document.write("<br" + a);
}

var  x = ret_Stat(2,7);
function ret_Stat(y,z)     {
  return y + z;
}
document.getElementById("result").innerHTML = x;

