function Ride_Function()    {
    var Height, can_Ride;
    Height = document.getElementById("Height").value;
    can_Ride =(Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = can_Ride + " to ride."; 
}

function Student(Major, GPA, Status)     {
    this.Student_Major = Major;
    this.Student_GPA = GPA;
    this.Student_Status = Status;
}   
var Greg = new Student("Business", "3.2", "Full_time");
var Joan = new Student("Nursing", "3.4", "Part_time")
var Steve = new Student("Technology", "3.8", "Full-time");
function student_Info()     {
    document.getElementById("New_and_This").innerHTML = "Welcome to This New University ";
} 

function reserved_Word()    {
    var D = Math;
    document.write("D");
}

//Constuctor function for new customer
function customer_Info(Firstname, Lastname, Email, Phonenumber)     {
    this.firstname = Firstname;    
    this.lastname = Lastname;
    this.email = Email;
    this.phonenumber = Phonenumber;

}

//Create new customer objects
var Cust1 = new customer_Info("Bill", "Jones", "william.jones@myemail.com", "234-975-1135");
var Cust2 = new customer_Info("Sally", "Smith", "sallysmith@jj.me", "890-431-9256");
var Cust3 = new customer_Info("John", "Johnson", "jjohn@me.org", "657-902-3368");

//Display email address for customer 1
document.getElementById("cust").innerHTML = "The email address for the customer is: " + Cust1.email;
  
//Creating a nested function to perform addition
function Nested_Function()      {
    document.getElementById("adding").innerHTML = add();
    function add()      {
        var Starting_value = 5;
        function Add_one() {Starting_value += 1;}
        Add_one();
        return Starting_value;
    }
}