var dayOfWeek, dayOfMonth, month, year, century;
//Get Input
function getInput() {
    dayOfMonth = parseInt(document.getElementById("monthday").value);
    month = parseInt(document.getElementById("month").value);
    year = parseInt(document.getElementById("year").value);
    century = parseInt(document.getElementById("century").value);


    if (dayOfMonth === "") {
        alert("Enter a valid date");
        return invalid;
    } else if (month === "") {
        alert("Enter a valid month");
        return invalid;
    } else if (year === "") {
        alert("ENter a valid year");
        return invalid;
    } else if (century === ""); {
        alert("Enter a valid century");
        return invalid;
    }

}
//calculate function
function calculateDay() {
    getInput();
    dayOfWeek = (((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7;
    console.log(dayOfWeek); //test calculate day function
    return (Math.floor(dayOfWeek));
    if (dayOfWeek > 0) {
        return dayOfWeek;
    }

}
//arrays
let daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function checkGender() {
    var gen = document.getElementsByName("rads");
    if gen[0].checked == true {
        var gender = "male"
    } else if (gen[1].checked == true) {
        var gender = "female"
    }
}