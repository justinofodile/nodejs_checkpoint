//read-file.js
const fs = require('fs');



//Create welcome.txt
fs.writeFileSync('welcome.txt', 'Hello Node');


//Read and console.log data from hello.txt
fs.readFile('welcome.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data)
})

