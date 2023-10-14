const form = document.getElementById('form')
const firstName = document.getElementById('fname')
const lastName = document.getElementById('lname')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit', e => {
    e.preventDefault()

    validateInputs()
})

const setError = (element, message) => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = message
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = message
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}

const validEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())

}

const validateInputs = () => {
    const firstNameValue = firstName.ariaValueMax.trim()
    const lastNameValue = lastName.ariaValueMax.trim()
    const emailValue = email.ariaValueMax.trim()
    const passwordValue = password.ariaValueMax.trim()

    if(firstNameValue === ''){
        setError(firstName, 'First Name cannot be empty')
    }else{
        setSuccess(firstName)
    }

    if(lastNameValue === ''){
        setError(lastName, 'Last Name cannot be empty')
    }else{
        setSuccess(lastName)
    }    

    if(emailValue === ''){
        setError(email, 'Looks like this is not an email')
    }else if (!validEmail(emailValue)){
        setError(email, 'Looks like this is not an email')
    }else{
        setSuccess(email)
    }

    if(passwordValue === ''){
        setError(password, 'Password cannot be empty')
    }else if (passwordValue.length < 8){
        setError(password, 'Password must be at least 8 characters.')
    }else{
        setSuccess(password)
    }
}