const express = require('express');
const app = express();

app.use(express.static('public'))

// body parser
app.use(express.urlencoded({
  extended: true
}))

app.post('/sign-up', (req, res) => {
  const { fName, lName, email, subscribe } = req.body;
  subscribe ?
    res.write(`Hello ${fName} ${lName}, 
    Thank you for signing up. Your account is now created.
    You would be receiving our periodic newsletters to your email: ${email}`)
    :
    res.write(`Hello ${fName} ${lName},
     Thank you for signing up. Your account is now created`)
  res.end();
})

app.listen(3000);


