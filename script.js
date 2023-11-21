function validateEmail(value) {
  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regular expression
  return emailRegex.test(value);
}

divSubscribe = document.getElementsByClassName("subscribe")[0];
emailElement = document.getElementsByName("subscribe")[0];
button = document.getElementsByTagName("button")[0];

button.onclick = function () {
  emailValue = emailElement.value;
  if (!validateEmail(emailValue)) {
    divSubscribe.classList.add("error");
  }
  else{
    emailElement.value="";
    divSubscribe.classList.remove("error");
  }
};
