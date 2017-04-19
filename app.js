const express = require('express');
const expressLayouts = require('express-ejs-layouts');


const app = express();

app.set('view engine', 'ejs');
app.set('layout', 'layouts/main-layout.ejs');

app.use(express.static('public'));
app.use(expressLayouts);


app.get('/', (req, res, next) => {
  res.render('home-view.ejs');
});

app.get('/fake-sign-up', (req, res, next) => {
  res.render('fake-sign-up-view.ejs');
});

  // <form method="get" action="/user-data">
  //                |                |
  // ================                |
  // |        ========================
  // |        |
app.get('/user-data', (req, res, next) => {
  console.log('GET submission!');
  console.log( req.query );
    // req.query = {
    //   fullNameValue: 'Ahmed Alvarez',
    //   emailValue: 'a@a.a',
    //   passwordValue: 'aaaaaaaa'
    // }

  res.render(
    'user-data-view.ejs',
    {
        //   <input name="fullNameValue">
        //                      |
      fullName: req.query.fullNameValue,
        //   <input name="emailValue">
        //                      |
      email:    req.query.emailValue,
        //   <input name="passwordValue">
        //                      |
      password: req.query.passwordValue
    }
  );
});


app.get('/fake-login', (req, res, next) => {
  res.render('fake-login-view.ejs');
});

  // <form method="post" action="/fake-login">
  //                |                 |
  // ================                 |
  // |         ========================
  // |         |
app.post('/fake-login', (req, res, next) => {
  console.log('POST submission!');
  console.log( req.query );
    // req.query = {}

  res.render(
    'user-data-view.ejs',
    {
      fullName: 'None',
        //   <input name="userEmail">
        //                    |
      email:    req.query.userEmail,
        //   <input name="userPassword">
        //                    |
      password: req.query.userPassword
    }
  );
});


app.listen(3000);
