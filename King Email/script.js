const uName = document.getElementById('uName')
const pWord = document.getElementById('pWord')
const uName = document.getElementById('smtpAddr')
const uName = document.getElementById('smtpPort')

const form = document.getElementById('form')

form.addEventListener('submit', (e)) => {
    let messages = []
    if(name.value === '' || name.value == null){
        messages.push('Username is required!')
    }


    e.preventDefault()
}