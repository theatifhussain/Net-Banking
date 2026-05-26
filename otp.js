let otp_box = document.querySelector("#otp");

function otp_fn(){
    var otp, randomInt = Math.floor(Math.random() * 999999)
    otp_box.innerHTML = randomInt;
    return otp;
}

generatedOTP = otp_fn();


// Submit Button 

let submit = document.querySelector("#submit");

submit.onclick = () => {
    if (otp_box.value === generatedOTP) {
        window.location.href = "home.html";
    } else {

    }

}