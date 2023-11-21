const emails = ['email@gmail.com','email2@gmail.com', 'email.e@gmail.com','email.J@gmail.com','email@hotmail.com', 'email@outlook.com']

const hash_email = {}

for(let index = 0; index < emails.length; index++){
    const domain = emails[index].split('@')[1]
    const email  = emails[index]

    if(!Array.isArray(hash_email[domain])) hash_email[domain] = []
    hash_email[domain].push(email)

}

const select_emeil = 'gmail.com'
console.log(hash_email[select_emeil].map((email, index) => email[index]));