const formSend= document.querySelector('.login-form');
formSend.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const formValues = {};
  formData.forEach((value, name) => {
    formValues[name] = value.trim();
  });

  const email = formValues.email;
  const password = formValues.password;

  if (email === '' || password === '') {
    return alert ('All form fields must be filled in');
  }

  console.log(formValues);
  event.currentTarget.reset();
}