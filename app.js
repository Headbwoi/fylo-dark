const form = document.getElementById('form');
const email = document.getElementById('email');


form.addEventListener('submit', e =>{
    e.preventDefault();

    checkInputs();

});

const isValidEmail = email => {
    const re = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return re.test(String(email).toLowerCase());
  }


  function checkInputs() {
    const emailValue = email.value.trim();

    //email validation

    if (emailValue === '') {
        document.getElementById('error-txt').innerHTML = "Email is required";    }
    else if (!isValidEmail(emailValue)) {
        document.getElementById('error-txt').innerHTML = "Please Enter Valid Email";
    }
    else {
        document.getElementById('error-txt').innerHTML = "";
    }
  }