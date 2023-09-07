
            function clock(){
                var nowTime = new Date();
                var seconde = nowTime.getSeconds()
                var min = nowTime.getMinutes()
                var hours = nowTime.getHours()
                clockDiv.innerText = `${hours}:${min}:${seconde}`
            }
            setInterval(clock , 1000)
var worker = {};
var counter = 0;
var inputsDisabled = false;
var IntervalID;
var inputs = [FnameUser, LnameUser, theEmail, thebirth, phoneUser, userJob, myBut];
function workerStatus() {
    if (inputsDisabled) {
        return false;
    }
    var FnameUserValue = FnameUser.value;
    var LnameUserValue = LnameUser.value;
    var theEmailValue = theEmail.value;
    var thebirthValue = thebirth.value;
    var phoneUserValue = phoneUser.value;
    var userJobValue = userJob.value;
    var workerFirstName = FnameUserValue.charAt(0) === FnameUserValue.charAt(0).toUpperCase();
    var workerLastName = LnameUserValue.length <= 20;
    var nowTime = new Date();
    var age = new Date(thebirthValue);
    var workerAge = nowTime.getFullYear() - age.getFullYear();
    var chackAge = workerAge > 16 && workerAge < 64;
    var emailcheck = (theEmailValue.lastIndexOf(".com") === theEmailValue.length - 4 && theEmailValue.length > 3) ||
                     (theEmailValue.lastIndexOf(".co.il") === theEmailValue.length - 5 && theEmailValue.length > 4);
    var workerPhone = phoneUserValue.charAt(0) === "0" && phoneUserValue.length === 10;

    nameLabel.innerText = "Enter first name:";
    lastNameLabel.innerText = "Enter last name:";
    birthLabel.innerText = "Enter birth:";
    emailLabel.innerText = "Enter email:";
    phoneLabel.innerText = "Enter phone:";
    if (workerLastName && workerFirstName && chackAge && emailcheck && workerPhone) {
        worker = {
            firstName: FnameUserValue,
            lastName: LnameUserValue,
            email: theEmailValue,
            birth: thebirthValue,
            phone: phoneUserValue,
            job: userJobValue
        };
        return true;
    } else {
        if (!workerFirstName) {
            nameLabel.innerText = "The name does not start with an uppercase letter.";
        }
        if (!workerLastName) {
            lastNameLabel.innerText = "The last name is longer than 20 characters.";
        }
        if (!chackAge) {
            birthLabel.innerText = "The age is not within the valid range.";
        }
        if (!emailcheck) {
            emailLabel.innerText = "The email format is invalid.";
        }
        if (!workerPhone) {
            phoneLabel.innerText = "The phone number format is invalid.";
        }
        counter++;
        if (counter >= 4) {
            inputs.forEach(function(input) {
                input.disabled = true;
            });
            IntervalID = setInterval(timeCounter , 1000)
        }
        }
        return false;
    }
    var counterTime = 30
    function timeCounter(){
        --counterTime
        console.log(counterTime);
       if(counterTime <= 0){
        clearInterval(IntervalID)
        inputs.forEach(function(input) {
            input.disabled = false;
        });
        counterTime = 30
       }
    }
    