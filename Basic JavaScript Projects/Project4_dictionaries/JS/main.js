function food_Dictionary()    {
    var Pizza = {
        Crust: " Stuffed",
        Style: "New York",
        Toppings: "Mushrooms",
        Transport: "Delivery" 
    };
    document.getElementById("Dictionary").innerHTML = Pizza.Toppings;


}

function bad_Dictionary()   {
    var Cat = {
        Color: "Orange",
        Breed: "Calico",
        Breed: "Siamese",
        Shots: "Yes"
    };
    document.getElementById("Dictionary").innerHTML = Cat.Breed;
}

function delete_Value()     {
    var Cat = {
        Color: "Orange",
        Breed: "Calico" ,
        Breed: "Siamese",
        Shots: "Yes"
    };
    delete Cat.Breed;
    document.getElementById("Dictionary").innerHTML = Cat.Breed;
}