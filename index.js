const username = document.getElementById('username')
const email = document.getElementById('email')
const phone = document.getElementById('phone')

let validUsername = false
let validEmail = false
let validPhone = false

// console.log(username,email,phone)

username.addEventListener('blur', () => {

    let regx = /^[A-Z]([0-9a-zA-Z]){2,9}$/
    let str = username.value

    if (regx.test(str)) {
        username.classList.remove('is-invalid')
        validUsername = true
    }
    else {
        username.classList.add('is-invalid')
        validUsername = false
    }
})

email.addEventListener('blur', () => {

    let regx = /([_0-9a-zA-Z\.\-\*\$\?]+)@([_0-9a-zA-Z\.\-\*\$\?]+)\.([a-zA-Z]){2,7}$/      //   \. means  .
    let str = email.value

    if (regx.test(str)) {
        email.classList.remove('is-invalid')
        validEmail = true
    }
    else {
        email.classList.add('is-invalid')
        validEmail = false
    }
})

phone.addEventListener('blur', () => {

    let regx = /^\W([0-9]){1,3}\s([0-9]){10}$/
    let str = phone.value

    if (regx.test(str)) {
        phone.classList.remove('is-invalid')
        validPhone = true
    }
    else {
        phone.classList.add('is-invalid')
        validPhone = false
    }
})

let submit = document.getElementById('submit')

submit.addEventListener('click', (x) => {
    
    x.preventDefault()   // x is name of event
    
    let success = document.getElementById('success')
    let error = document.getElementById('error')
    const address = document.getElementById('address')

    if (validUsername && validEmail && validPhone && address.value!="(Pickup Address)") {
        function p(){
            success.style.display=''
            error.style.display='none'    
        }
        setTimeout(p, 100)
    }
    else {
        function q(){
            success.style.display='none'
            error.style.display=''   
        }
        setTimeout(q, 100)
    }

})


