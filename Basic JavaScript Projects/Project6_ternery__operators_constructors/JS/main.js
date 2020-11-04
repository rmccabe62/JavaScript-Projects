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