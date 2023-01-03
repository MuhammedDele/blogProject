function validateSignUpForm() {
  const input = document.getElementById("email");
  const emailValue = input.value.trim();
  const emailValidationResult = validateEmailInput(input, emailValue);

  const password_input = document.getElementById("password");
  const passwordValue = password_input.value.trim();
  const passwordValidationResult = validatePasswordInput(
    password_input,
    passwordValue
  );

  const password2_input = document.getElementById("password2");
  const password2Value = password2_input.value.trim();
  const password2ValidationResult = validatePassword2Input(
    password2_input,
    password2Value,
    passwordValue
  );

  const username_input = document.getElementById("fullName");
  const usernameValue = username_input.value.trim();
  const fullNameValidationResult=validateFullNameInput(username_input, usernameValue);

  if (
    emailValidationResult &&
    passwordValidationResult &&
    password2ValidationResult &&
    fullNameValidationResult
  ) {
    return true;
  }
  return false;
}

function validateSignInForm() {
  const input = document.getElementById("email");
  const emailValue = input.value.trim();
  const emailValidationResult = validateEmailInput(input, emailValue);
  
  const password_input = document.getElementById("password");
  const passwordValue = password_input.value.trim();
  const passwordvalidationResult = validatePasswordInput(
    password_input,
    passwordValue
  );
  if (emailValidationResult && passwordvalidationResult) {
    return true;
  }
  return false;
}
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
function validateEmailInput(input, emailValue) {
  let state = false;
  if (emailValue === "") {
    setErrorFor(input, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(input, "Not a valid email");
  } else {
    setSuccessFor(input);
    state = true;
  }
  return state;
}
function validatePasswordInput(input, value) {
  let state = false;
  if (value === "") {
    setErrorFor(input, "Password cannot be blank");
  }else if(value.length<8) {
    setErrorFor(input,"your Password should be more than 8 character");
  }else {
    setSuccessFor(input);
    state = true;
  }
  return state;
}
function validatePassword2Input(
  password2Input,
  password2value,
  password1value
) {
  let state = false;
  if (password2value === "") {
    setErrorFor(password2Input, "Password2 cannot be blank");
  } else if (password1value !== password2value) {
    setErrorFor(password2Input, "Passwords does not match");
  } else {
    setSuccessFor(password2Input);
    state = true;
  }
  return state;
}
function validateFullNameInput(fullNameInput, fullNameValue) {
  let state = false;
  if (fullNameValue === "") {
    setErrorFor(fullNameInput, "Username cannot be blank");
  } else if (fullNameValue.length < 5) {
    setErrorFor(fullNameInput, "Your full Name must be more than 5 character");
  } else {
    setSuccessFor(fullNameInput);
    state = true;
  }
  return state;
}

function initLogInPage() {
  document.getElementById("login_btn").addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      validateSignInForm();
    },
    true
  );
}
function initSignUpPage() {
  document.getElementById("signup_btn").addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      validateSignUpForm();
    },
    true
  );
}
