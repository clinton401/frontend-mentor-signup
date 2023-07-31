const form = document.getElementById('form');
const success = document.getElementById('success');
const dismiss = document.getElementById('dismiss');
const sucEmail = document.getElementById('suc-email')
function validateEmail() {
  const emailInput = document.getElementById("email");
  const errorElement = document.getElementById("error-msg");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput.value)) {
    errorElement.innerText = "Valid email required";
  } else {
    errorElement.innerText = "";
  }
}

const formHandler = e => {
   
    const email = document.getElementById('email')
    e.preventDefault()
    // alert(email.value)
    sucEmail.innerText = email.value;
    success.classList.toggle('active');
    form.classList.toggle('active')
    
}
const diss = () => {
    // success.classList.toggle('act');
    // form.classList.toggle('act');
    location.reload()
    // alert('boy')
}
form.addEventListener('submit', formHandler)
dismiss.addEventListener('click', diss)
