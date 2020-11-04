function vote_Criteria()    {
    var Age, can_Vote;
    Age = document.getElementById("Age").innerHTML.value;
    can_Vote = (Age < 18) ? "You are too young ": "You are old enough ";
    document.getElementById("can_Vote").innerHTML = can_Vote + "to vote.";
}