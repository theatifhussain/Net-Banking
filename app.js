//  See Password Function 

let sp = document.querySelector("#sp");
let password = document.querySelector("#password");

sp.onclick = () => {
    if (password.type === "password") {
        password.type = "text";
        sp.innerHTML = "Hide Password";
    } else {
        password.type = "password";
        sp.innerHTML = "See Password";
    }

}

// Sign up Option

let username = document.querySelector("#username");
let signin = document.querySelector("#signin");
let popup = document.querySelector('.popup');

function criteria(u,p) {
    if(
        u.length > 4 && p.length >= 8 && u == "Admin" && p == "Admin@123"
    ) {
        return true;
    } else {
        return false;
    }
}



signin.onclick = () => {
    if(
        criteria((username.value), (password.value)) 
    ){
        window.open("https://www.google.com");

    } else {

    popup.style.display = "flex";
    username.value = "";
    password.value = "";
}

}



