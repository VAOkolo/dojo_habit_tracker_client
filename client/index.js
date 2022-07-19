function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector('.form__message');
    messageElement.textContent = message;
    messageElement.classList.remove('form__message--success', 'form__message--error')
    messageElement.classList.add('.form__message--${type}')
}

function setInputError(inputElement, message) {
    inputElement.classList.add('form__input--error');
    inputElement.parentElement.querySelector('.form__input-error-message').textContent = message
}

function clearInputError(inputElement) {
    inputElement.classList.remove('form__input--error');
    inputElement.parentElement.querySelector('.form__input-error-message').textContent = "";
}

document.addEventListener("DOMContentLoaded", () =>{
    const loginForm = document.querySelector('#login');
    const createAccountForm = document.querySelector('#signup');

    document.querySelector('#linkCreateAccount').addEventListener('click', (e) =>{
        e.preventDefault();
        loginForm.classList.add('form--hidden');
        createAccountForm.classList.remove('form--hidden');
    })

    document.querySelector('#linkLogin').addEventListener('click', (e) =>{
        e.preventDefault();
        loginform.classList.remove('form--hidden');
        createAccountForm.classList.add('form--hidden');
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input_email = e.target[0].value
        console.log("SUBMIT");
        // if (e.target[0].value === )
        getData(input_email);

        setFormMessage(loginForm, 'error', 'Invalid username/password combination');
    });

    const getData = async (input_email) => {
        const res = await fetch( "http://localhost:3001/users");
        const searchData = await res.json();
        const emailData = searchData.map(search => search.email)
        if ()

        console.log("123")
        c
        console.log("SIUU")
        console.log(findData)
        return items
    };

    createAccountForm.addEventListener('submit', (e) =>{
        e.preventDefault();

    })

    document.querySelectorAll('.form__input').forEach(inputElement =>{
        inputElement.addEventListener("blur", (e) =>{
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10){
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        })

        inputElement.addEventListener("input", (e) =>{
            clearInputError(inputElement);
        })
    })
})
