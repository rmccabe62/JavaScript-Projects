function Ride_Function()    {
    var Height, can_Ride;
    Height = document.getElementById("Height").innerHTML.value;
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
    var else = "D";
    document.write("else");
}

//Constuctor function for new customer
function customer_Info(Firstname, Lastname, Email, Phonenumber)     {
    this.firstname = first_name;    
    this.lastname = last_name;
    this.email = email_Add;
    this.phonenumber = phone_Num;

}

//Create new customer objects
var Cust1 = new Customer("Bill", "Jones", "william.jones@myemail.com", "234-975-1135");
var Cust2 = new Customer("Sally", "Smith", "sallysmith@jj.me", "890-431-9256");
var Cust3 = new Customer("John", "Johnson", "jjohn@me.org", "657-902-3368");

//Display email address for customer 1
document.getElementById("cust").innerHTML = "The email address for the customer is: " + Cust1.email_Add;
                                                