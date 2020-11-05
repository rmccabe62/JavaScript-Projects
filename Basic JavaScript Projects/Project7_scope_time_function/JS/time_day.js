function Time_function()    {
    var Time = new Date().getHours();           //Defining a local variable and using the new keyword to get date and time
    var Reply;                                  //Defining local variable 
    if (Time < 12 == Time > 0)  {               //Testing conditional if statement
        Reply = "It is morning time!";          //Assigning a string to local variable
    }
    else if (Time >  12 == Time < 18)    {      //Testing conditional if statement if above statement is false
        Reply = "It is the afternoon. ";        //Assigning a string to variable
    }
    else    {                                   //If both of the above statements are false, results in this else statement
        Reply = "It is evening time.";          //Assigning a string to variable
    }
    document.getElementById("Time_of_day").innerHTML = Reply;       //Retrieving an element by id and writing the correct string based on condition
 }