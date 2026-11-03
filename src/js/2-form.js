const form = document.querySelector('.feedback-form');

const formState = {
  email: '',
  message: '',
};

form.addEventListener('input', event => {
  formState[event.target.name] = event.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
});

const savedData = localStorage.getItem('feedback-form-state');

if (savedData) {
  const parsedData = JSON.parse(savedData);

  formState.email = parsedData.email;
  formState.message = parsedData.message;

  form.elements.email.value = formState.email;
  form.elements.message.value = formState.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formState.email.trim() === '' || formState.message.trim() === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formState);

  localStorage.removeItem('feedback-form-state');

  formState.email = '';
  formState.message = '';

  form.reset();
});