const generatePassword = require('generate-password');


//function to generate random  password
const generateRandomPassword = () => {
    const password = generatePassword.generate({
        length: 12,
        numbers: true,
        symbols: true,
        uppercase: true,
        excludeSimilarCharacters: true,
    });
    console.log('Generated Password', password)
}

generateRandomPassword();