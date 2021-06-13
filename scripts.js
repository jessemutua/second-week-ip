var dayOfWeek, dayOfMonth, month, year, century;
//Get Input
function getInput(){
    dayOfMonth = parseInt(document.getElementById("monthday").value);
    month = parseInt(document.getElementById("month").value);
    year = parseInt(document.getElementById("year").value);
    century = parseInt(document.getElementById("century").value);

    if(dayOfMonth === ""){
        alert("Enter a valid date");
        return invalid;
    }else if (month === ""){
        alert("Enter a valid month");
        return invalid;
    }else if (year === ""){
        alert("ENter a valid year");
        return invalid;
    }else if (century === "");{
        alert("Enter a valid century");
        return invalid;
    }

}
