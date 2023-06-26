let form = document.getElementById('form');
let email = document.getElementById('email');
let country = document.getElementById('country');
let zip = document.getElementById('zip');
let password = document.getElementById('password');
let confPassword = document.getElementById('confirm-password');

// errors
let emailError = document.querySelector("#email + span.error");
let countryError = document.querySelector("#country + span.error");
let zipError = document.querySelector("#zip + span.error");
let passwordError = document.querySelector("#password + span.error");
let confPassError = document.querySelector("#confirm-password + span.error");

form.addEventListener('submit', (e)=>
{
  if(!email.validity.valid){
    showErrorEmail(email,emailError);
    e.preventDefault();
  }
  if(!country.validity.valid){
    showErrorCountry(country,countryError);
    e.preventDefault();
  }
  if(!zip.validity.valid){
    showErrorZip(zip,zipError);
    e.preventDefault();
  }
  if(!password.validity.valid){
    showErrorPassword(password,passwordError);
    e.preventDefault();
  }
  if(!confPassword.validity.valid){
    showErrorConfPassword(confPassword,confPassError);
    e.preventDefault();
  }
});

email.addEventListener('change',() =>{
  if(email.validity.valid){
    emailError.textContent = "";
    emailError.className = "error";
  }
  else{
  showErrorEmail(email,emailError);
  }
});
country.addEventListener('change',() =>{
  if(country.validity.valid){
    countryError.textContent = "";
    countryError.className = "error";
  }
  else{
  showErrorCountry(country,countryError);
  }
});
zip.addEventListener('change',() =>{
  if(zip.validity.valid){
    zipError.textContent = "";
    zipError.className = "error";
  }
  else{
  showErrorZip(zip,zipError);
  }
});
password.addEventListener('change',() =>{
  if(password.validity.valid){
    passwordError.textContent = "";
    passwordError.className = "error";
  }
  else{
  showErrorPassword(password,passwordError);
  }
  if(confPassword.value !== password.value){
    if (confPassword.value == ""){

    }
    else{
    showErrorPassword(password,passwordError);
    }
  }
});
confPassword.addEventListener('change',() =>{
  if(confPassword.validity.valid){
    confPassError.textContent = "";
    confPassError.className = "error";
  }
  else{
    showErrorConfPassword(confPassword,confPassError);
  }
  if(confPassword.value !== password.value){
    showErrorConfPassword(confPassword,confPassError);
  }
});


function showErrorEmail(input, inputError){
  if(input.validity.valueMissing){
    inputError.textContent = "Email is Required";
    inputError.className = "error active";
  }
  else if(input.validity.typeMismatch){
    inputError.textContent = "Please use email format";
    inputError.className = "error active";
  }
}

function showErrorCountry(input, inputError){
  if(input.validity.valueMissing){
    inputError.textContent = "Country is Required";
    inputError.className = "error active";
  }
}

function showErrorZip(input, inputError){
  if(input.validity.valueMissing){
    inputError.textContent = "Zip Code is Required";
    inputError.className = "error active";
  }
  else if(input.validity.tooShort){
    inputError.textContent = `At least 5 digits, you have inputed ${input.value.length} characters` ;
    inputError.className = "error active";
  }
  else if(input.validity.badInput){
    inputError.textContent = "Please input numerical values";
    inputError.className = "error active";
  }
}
function showErrorPassword(input, inputError){
  if(input.validity.valueMissing){
    inputError.textContent = "Password is Required";
    inputError.className = "error active";
  }
  else if(input.validity.tooShort){
    inputError.textContent = `At least 8 characters, you have inputed ${input.value.length} characters` ;
    inputError.className = "error active";
  }
  else if(confPassword.value !== password.value){
    inputError.textContent = 'Password does not match' ;
    inputError.className = "error active";
  }
}
function showErrorConfPassword(input, inputError){
  if(input.validity.valueMissing){
    inputError.textContent = "Confirm Password is Required";
    inputError.className = "error active";
  }
  else if(input.validity.tooShort){
    inputError.textContent = `At least 8 characters, you have inputed ${input.value.length} characters` ;
    inputError.className = "error active";
  }
  else if(input.value !== password.value){
    inputError.textContent = 'Password does not match' ;
    password.textContent = 'Password does not match';
    inputError.className = "error active";
  }
}

