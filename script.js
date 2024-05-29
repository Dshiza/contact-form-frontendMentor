let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let gEnquiry = document.getElementById("gEnquiry");
let sRequest = document.getElementById("sRequest");
let query = document.getElementsByName("query");
let message = document.getElementById("message");
let consent = document.getElementById("consent");
let submit = document.getElementById("submit");
let form = document.getElementsByTagName("form");
console.log(fname, lname, email, gEnquiry, sRequest, message, consent);
console.log(submit);
console.log(form);

console.log(document.querySelector("#email + p"));

function validateForm(event) {
  event.preventDefault();
  console.log(form);

  const validations = [
    validateFName,
    validateLName,
    validateEmail,
    validateQuery,
    validateMessage,
    validateConsent,
  ];

  // Execute all validation functions and collect validation
  const results = validations.map((validate) => validate());

  // Check if all validations passed
  const isValid = results.every((result) => result);
  console.log(validations);
  if (isValid) {
    document.querySelector("#confirmation").style.display = "block";
    setTimeout(() => {
      fname.value = "";
      lname.value = "";
      email.value = "";
      query[0].checked = false;
      query[1].checked = false;
      document.querySelector(
        "#radio-buttons div:nth-child(2)"
      ).style.backgroundColor = "white";
      document.querySelector("#radio-buttons div").style.backgroundColor =
        "white";
      message.value = "";
      consent.checked = false;
      document.querySelector("#confirmation").style.display = "none";
    }, 2000);

    return true;
    // Additional code to handle successful validation (e.g., send form)
  } else {
    return false;
  }

  return isValid;
}

function validateFName() {
  if (fname.value == "") {
    document.querySelector("#fname + p").style.visibility = "visible";
    fname.classList.add("bd-red");

    return false;
  } else {
    document.querySelector("#fname + p").style.visibility = "hidden";
    fname.classList.remove("bd-red");
    return true;
  }
}
function validateLName() {
  if (lname.value == "") {
    document.querySelector("#lname + p").style.visibility = "visible";
    lname.classList.add("bd-red");

    return false;
  } else {
    document.querySelector("#lname + p").style.visibility = "hidden";
    lname.classList.remove("bd-red");
    return true;
  }
}
function validateEmail() {
  console.log("erntiwtjw", email.value);
  if (email.value.trim() !== "") {
    if (validator.isEmail(email.value)) {
      email.classList.remove("bd-red");
      document.querySelector("#email + p").style.visibility = "hidden";
      return true;
    } else {
      email.classList.add("bd-red");
      document.querySelector("#email + p").innerText =
        "Please enter a valid email address";
      document.querySelector("#email + p").style.visibility = "visible";
      return true;
    }
  } else {
    email.classList.add("bd-red");
    document.querySelector("#email + p").style.visibility = "visible";
    return false;
  }
}
function validateQuery() {
  console.log(document.getElementById("radio-buttons"));
  for (var i = 0, length = query.length; i < length; i++) {
    if (query[i].checked) {
      // do whatever you want with the checked radio
      document.querySelector("#legend ~ p").style.visibility = "hidden";

      return true;
    }
  }
  document.querySelector("#legend ~ p").style.visibility = "visible";
  return false;
}
function validateMessage() {
  if (message.value == "") {
    document.querySelector("#message + p").style.visibility = "visible";
    message.classList.add("bd-red");
    return false;
  } else {
    document.querySelector("#message + p").style.visibility = "hidden";
    message.classList.remove("bd-red");
    return true;
  }
}
function validateConsent() {
  if (consent.checked == false) {
    document.querySelector("#consent ~ p").style.visibility = "visible";
    return false;
  } else {
    document.querySelector("#consent ~ p").style.visibility = "hidden";
    return true;
  }
}

query[0].addEventListener("change", function (event) {
  if (query[0].checked) {
    document.querySelector(
      "#radio-buttons div:nth-child(2)"
    ).style.backgroundColor = "white";
    document.querySelector("#radio-buttons div").style.backgroundColor =
      "#87a3a6";
  }
});
query[1].addEventListener("change", function (event) {
  if (query[1].checked) {
    document.querySelector("#radio-buttons div").style.backgroundColor =
      "white";
    document.querySelector(
      "#radio-buttons div:nth-child(2)"
    ).style.backgroundColor = "#87a3a6";
  }
});
