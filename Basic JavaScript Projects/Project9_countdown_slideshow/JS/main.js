function countdown()    {
    var seconds = document.getElementById("seconds").value;     //Defining a variable then getting an element by id and writing it's value to the screen

    function tick()     {
        seconds = seconds - 1;                                  //Initiating a timer in a nested function
        timer.innerHTML = seconds;                              //Starting the timer
        setTimeout(tick, 1000);                                 //Defining when the timer should stop
    if(seconds == -1) {                                         //Defining a conditional if statement
        alert("Time's up!");                                    //Creating an alert box to notify the user the alarm has gone off
    }
        }
    tick();                                                     //Calling the nested function
}

var slideIndex = 1;                                             //Definiing as variable that starts the slideshow at 1
showSlides(slideIndex);                                         //Initiates the slideshow

// Next/previous controls
function plusSlides(n)    {
  showSlides(slideIndex += n);   
}

// Thumbnail image controls
function currentSlide(n)  {
  showSlides(slideIndex = n);  
}

function showSlides(n)   {
  var i;                                                        //Defining a local variable and assigning a value to it
  var slides = document.getElementsByClassName("mySlides");     //Defining a variable and retreiving an element by it's class name
  var dots = document.getElementsByClassName("dot");            //Defining a variable and retreiving an element by it's class name
  if (n > slides.length) {slideIndex = 1}                       //Testing an if conditional statement that initiats the slide sequence
  if (n < 1) {slideIndex = slides.length}                       //If the parameter is less than 1, set the index to total number of slides
  for (i = 0; i < slides.length; i++) {                           //Initiates a loop so the slideshow can run
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {                                   //Looping through the slides as long as it runs 
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";                         //Displaying the slide at the current index until reaches 0
  dots[slideIndex-1].className += " active";                            //Displaying the active slide
}
