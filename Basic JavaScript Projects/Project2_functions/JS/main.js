function displayName()  { //Defining first function
    var first_name = "John";       //Defining first variable and assigning a value to it
    var last_name = "Smith";       //Defining second variable and assigning a value to it
    var name = first_name + last_name;      //Defining third variable which is the first and second variable concatenated together
    document.getElementById("myname").innerHTML = name;     //Getting an element by it's id and assigning a value to it
}

function questName()    {                       //Defining a second function
    var question = "Is that really you?";       //Defining a string variable and assigning a value to it
    question += "or a friend of yours?";        //Concatenating the variable with another string
    document.getElementById("Concatenate").innerHTML = question;        //Getting an element by its id and assigning a value to it
}