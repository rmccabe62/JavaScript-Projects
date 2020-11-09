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
    var Item = "";                                               //Defining a variable to hold a value from list array
    var y;                                                        //Defining a variable to be used as an index counter
function array_Function()   {
    for (y = 0; y < Tools.length; y++)      {                   //Initiating a for loop to test if a condition is met
        Item += Tools[y] + "<br>";                              //variable will hold a value from list array and increment index counter
    }
    document.getElementById("Array").innerHTML = Item;             //Retreiving an element by id and writing a value from the list array to the screen           
}
function constant_function()    {
    const Dog = {breed: "collie", color: "black", sex: "male"};    //Defining an object that is unchanging to the program
    Dog.breed = "Shepard";                                         //Defining a property for the constant and assigning a value to it
    Dog.health = "good";                                           //Defining a property for the constant and assigning a value to it
    document.getElementById("Constant").innerHTML = "This dog's breed is a  " +Dog.breed  + " and his health is "       
        + Dog.health;                                                   //Retreiving an element by id and writing a string for the result
}

function let_Keyword()      {
    var a = 20;                                     //Defining a variable and assigning a value to it
    document.write(a);                              //
    {
        let a = 40;
        document.write("<br" + a);
    }
    document.write("<br" + a);
}

   
function ret_Stat()     {
    var y = 2;
    var z = 7;
    return y + z;

    

}
document.getElementById("result").innerHTML = ret_Stat();

  let student = { 
    studID: "A34D",
    status: "Full-Time",
    sex:    "female",
    StudName: "Susan Baker",
    description:function()  {
      return "The student's name is " +  this.StudName + "and the student's status is " + this.status;    
  }
};
document.getElementById("studentInfo").innerHTML = student.description();

function breakStat()    {
    var text = "";
    var i;
    for (i = 0; i < 11; i++)  {
      if (i === 8) { break; }
      text += "The number you want is " + i + "<br>";
    document.getElementById("breaks").innerHTML = text; 
    }
}

function continStat()   {
    var text = "";
    var i;
    for (i = 0; i < 9; i++) {
        if (i === 5) {continue;}
        text += "Some numers are " + i + "<br>";
    document.getElementById("go_On").innerHTML = text;
    }
}








