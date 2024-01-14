//Array to store registered users
var registeredUsers = [];//created an empty array to store users


let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let RegisterUsername = document.getElementById("registerUsername");
let RegisterEmail = document.getElementById("registerEmail");
let RegisterPassword = document.getElementById("registerPassword");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");



signinBtn.onclick = function(){
    var Uname = document.getElementById("registerEmail").value;
    var Pword = document.getElementById("registerPassword").value;

    //check if the required fields are empty or not
    // if (!email || !Pword){
    //     alert("Please enter both email and password.");
    //     return;//Exit the function is empty
    // }

    //check if the username exists
    var user = registeredUsers.find(user => user.username === Uname);

    if (user && user.password === Pword) {
        alert("Login Sucessful");
    }
    else{
        alert("Invalid username or password");
    }

    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign in";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");


    // After the login attempt, clear the input fields
    registerEmail.value = "";
    registerPassword.value = "";
}

signupBtn.onclick = function(){

    var username = document.getElementById("registerUsername").value;//value stores the value or content from the text field.
    var email = document.getElementById("registerEmail").value;
    var password = document.getElementById("registerPassword").value;

    // check if the required fields are empty or not
    // if (!username || !email || !password    ){
    //     alert("Please fill in all the fields");
    //     return;//Exit the function is empty
    
    // nameField.style.maxHeight = "60px";
    // title.innerHTML = "Sign up";
    // signupBtn.classList.remove("disable");
    // signinBtn.classList.add("disable");
    // }
// else{
    //check if the Email already exists
    if (registeredUsers.some(user => user.email === email))
    {
            alert("email already registered. Please choose a different one.");
    }

    else {
        //store the new user
        registeredUsers.push({username: username, email:email , password: password});
        alert("Registered Sucessfully")
    }
// }


    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");

    // After the login attempt, clear the input fields
    registerUsername.value = "";
    registerEmail.value = "";
    registerPassword.value = "";
}