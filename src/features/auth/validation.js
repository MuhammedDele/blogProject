let emailErrors = [];
let passwordErrors = [];
let password2Errors = [];
let fullNameErrors = [];
export function validateSignUpForm() {
  const input = document.getElementById("email");
  const emailValue = input.value.trim();
  const emailValidationResult = validateEmailInput(emailValue);
  if (emailValidationResult) {
    setSuccessFor(input);
  } else {
    emailErrors.forEach((error) => {
      setErrorFor(input, error);
    });
  }

  const password_input = document.getElementById("password");
  const passwordValue = password_input.value.trim();
  const passwordValidationResult = validatePasswordInput(passwordValue);
  if (passwordValidationResult) {
    setSuccessFor(password_input);
  } else {
    passwordErrors.forEach((error) => {
      setErrorFor(password_input, error);
    });
  }

  const password2_input = document.getElementById("password2");
  const password2Value = password2_input.value.trim();
  const password2ValidationResult = validatePassword2Input(
    password2Value,
    passwordValue
  );
  if (password2ValidationResult) {
    setSuccessFor(password2_input);
  } else {
    password2Errors.forEach((error) => {
      setErrorFor(password2_input, error);
    });
  }

  const username_input = document.getElementById("fullName");
  const usernameValue = username_input.value.trim();
  const fullNameValidationResult = validateFullNameInput(usernameValue);
  if (fullNameValidationResult) {
    setSuccessFor(username_input);
  } else {
    fullNameErrors.forEach((error) => {
      setErrorFor(username_input, error);
    });
  }

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

export function validateSignInForm() {
  const input = document.getElementById("email");
  const emailValue = input.value.trim();
  const emailValidationResult = validateEmailInput(emailValue);
  if (emailValidationResult) {
    setSuccessFor(input);
  } else {
    emailErrors.forEach((error) => {
      setErrorFor(input, error);
    });
  }


  const password_input = document.getElementById("password");
  const passwordValue = password_input.value.trim();
  const passwordValidationResult = validatePasswordInput(passwordValue);
  if (passwordValidationResult) {
    setSuccessFor(password_input);
  } else {
    passwordErrors.forEach((error) => {
      setErrorFor(password_input, error);
    });
  }
  console.log(emailValidationResult , passwordValidationResult);
  if (emailValidationResult && passwordValidationResult) {
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

export function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

export function validateEmailInput(emailValue) {
  if (emailValue === "") {
    emailErrors.push("Email cannot be blank");
    return false;
  } else if (!isEmail(emailValue)) {
    emailErrors.push("Not a valid email");
    return false;
  } else {
    return true;
  }
}
export function validatePasswordInput(passwordValue) {
  if (passwordValue === "") {
    passwordErrors.push("Password cannot be blank");
    return false; 
  } else if (passwordValue.length < 8) {
    passwordErrors.push("your Password should be more than or equal to 8 character");
    return false; 
  } else {
    return true;
  }
}
export function validatePassword2Input(password1value, password2value) {
  if (password2value === "") {
    password2Errors.push("Password2 cannot be blank");
    return false; 
  } else if (password1value !== password2value) {
    password2Errors.push("Passwords does not match");
    return false; 
  } else if ((password2value.length < 8) && (password2value === password1value)) {
    password2Errors.push("Invalid Password")
    return false; 
  }else {
    return true;
  }
}
export function validateFullNameInput(fullNameValue) {
  if (fullNameValue === "") {
    fullNameErrors.push("Username cannot be blank");
    return false; 
  } else if (fullNameValue.length < 5) {
    fullNameErrors.push("Your full Name must be more than or equal 5 character");
    return false; 
  } else {
    return true;
  }
}

// export function initLogInPage() {
//   document.getElementById("login_btn").addEventListener(
//     "click",
//     (e) => {
//       e.preventDefault();
//       validateSignInForm();
//     },
//     true
//   );
// }
// export function initSignUpPage() {
//   document.getElementById("signup_btn").addEventListener(
//     "click",
//     (e) => {
//       e.preventDefault();
//       validateSignUpForm();
//     },
//     true
//   );
// }
