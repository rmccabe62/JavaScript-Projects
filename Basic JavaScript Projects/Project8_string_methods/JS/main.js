function conc_Str()     {
    var first_part = "What would you ";     //Defining variable and assigning a string to it
    var second_part = "want to do ";        //Defining variable and assigning a string to it
    var last_part = "all day today?";       //Defining variable and assigning a string to it
    var my_question = first_part.concat(second_part, last_part);    //Defining a variable that concatenates a string
    document.getElementById("concatenate").innerHTML = my_question;     //Retrieving an element by id and writing the question to the screen 
}

function slice_Method()     {
    var Statement = "I never saw what happened last night ";        //Defining varable as string
    var Section = Statement.slice(12,25);                           //Slicing out a portion of the string
    document.getElementById("Slice").innerHTML = Section;           //Retrieving element by id and writing the partial string to the screen
}

function conv_ToUpper()     {
    var str = "What is happening?";                                 //Defining a variable as string
    var chg = str.toUpperCase();                                    //Defining a variable that changes a string to Uppercase
    document.getElementById("convert").innerHTML = chg;             //Retrieving an element by id and writing the converted case to the screen
}

function go_Search()     {
    var str = "Can we find a deserted island?";             //Defining a variable as string and assigning a string value to it
    var a = str.search("deserted island");                  //Defining a variable and searching for the beginning position of a phrase
    document.getElementById("partial").innerHTML = a;       //Retreiving the element by id to find the position of the start of a partial phrase
                                                            //and writing the result to the screen
}

function string_Method()    {
    var b = 245;                                                                  //Defining a variable and assigning a value to it as a string
    document.getElementById("Numbers_to_string").innerHTML = b.toString();          //Retrieving an element by id , converting a number to string,
                                                                                    //and writing the result to the screen
}

function precision_Method()     {
    var A = 4259076.4768021346879;                                              //Defining a variable as a large number
    document.getElementById("Precision").innerHTML = A.toPrecision(9);          //Retrieving an element by id and using the precision method 
                                                                                //to return it as a specified  length
}