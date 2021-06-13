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
    if (gen[0].checked == true) {
        var gender = "male"
    } else if (gen[1].checked == true) {
        var gender = "female"
        switch (gender) {
            case gender = "male":
                switch (day) {
                    case (0 || -0):
                        document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your akan name is " + maleNames[0];
                        break;
                    case (1 || -1):
                        document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is " + maleNames[1];
                        break;
                    case (2 || -2):
                        document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is " + maleNames[2];
                        break;
                    case (3 || -3):
                        document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan name is " + maleNames[3];
                        break;
                    case (4 || -4):
                        document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan name is " + maleNames[4];
                        break;
                    case (5 || -5):
                        document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan name is " + maleNames[5];
                        break;
                    case (6 || -6):
                        document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is " + maleNames[6];
                        break;
                    default:
                        // console.console.log("Pass");//Test male case
                }
                break;
            case gender = "female":
                switch (day) {
                    case 0 || -0:
                        document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your akan name is  akosua";
                        break;
                    case 1 || -1:
                        document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is adwoa ";
                        break;
                    case 2 || -2:
                        document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is abenaa";
                        break;
                    case 3 || -3:
                        document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan name is akua";
                        break;
                    case 4 || -4:
                        document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan name is yaa";
                        break;
                    case 5 || -5:
                        document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan name is afua";
                        break;
                    case 6 || -6:
                        document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is ama";
                        break;

                }
                break
        }
    }