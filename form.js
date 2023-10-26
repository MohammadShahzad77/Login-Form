let email = document.getElementById('email')
let password = document.getElementById('password')
// let image=document.getElementById('image')

let LogIn = () => {
    if (email.value == 'mdshahzad511200@gmail.com' && password.value == 12345) {
        alert('login successful')
    }
    else {
        alert('invalid credentials')
        email.style.borderColor = "red"
        password.style.borderColor = "red"

    }
}