
document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();

    setTimeout(function() {
        hideErrors();

        document.getElementById('message-box').classList.remove('hidden');
    }, 500);

    let errorFields = document.querySelectorAll('.error');
    errorFields.forEach(function(field) {
        field.classList.remove('error');
        field.style.border = ''; 
    });

    let errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(message) {
        message.textContent = '';
    });

    let valid = true;


const name = document.getElementById("name").value.trim();
const lastName = document.getElementById("lastname").value.trim();
const email = document.getElementById("email").value.trim();
const message = document.getElementById('message').value.trim();
const queryType = document.querySelector('input[name="query_type"]:checked');
const consent = document.getElementById("consent").checked;

let hasError = false

function showError(elementId, message) {
    var element = document.getElementById(elementId);
    element.classList.add('error');
    element.style.border = '1px solid red';
    var errorMessageElement = document.getElementById(elementId + '-error');
    errorMessageElement.textContent = message;
    errorMessageElement.style.color = 'red'; 
    if (!hasError) {
        element.focus();
        hasError = true;
    }
}

// Validación de campos
if (name === '') {
    showError('name', 'This field is required');
    valid = false;
}

if (lastName === '') {
    showError('lastname', 'This field is required');
    valid = false;
}

if (email === '') {
    showError('email', 'Email Address is required');
    valid = false;
} else if (!/^\S+@\S+\.\S+$/.test(email)) {
    showError('email', 'Email Address is invalid');
    valid = false;
}

if (!queryType) {
    document.getElementById('queryType-error').textContent = 'Please select a query type';
    document.getElementById('queryType-error').classList.add('error-message');
    hasError = true;
    valid = false;
}

if (message === '') {
    showError('message', 'This field is required');
    valid = false;
}

if (!consent) {
    showError('consent', 'To submit this form, please consent to be contacted');
    valid = false;
}

// Si no hay errores, se puede enviar el formulario
if (!hasError) {
    document.getElementById('message-box').style.display = 'block';
    document.getElementById('myForm').submit();
    valid = true;

    setTimeout(function() {
        document.getElementById('contact-form').reset(); // Restablecer los valores del formulario
    }, 300);
}
});