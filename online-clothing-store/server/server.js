var express = require('express');
var mysql = require('mysql');
var cors = require('cors');

const app = express ();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection(
  {
    user: "root",
    host: "localhost",
    password: "",
    database: "tests",
  }
)

app.post('/registration', (req,res) => {
  const email = req.body.email
  const username = req.body.username
  const password = req.body.password

  con.query("INSERT INTO users(email, username, password)VALUES(?,?,?)",[email,username, password],
  (err,result) => {
    if(result) {
      res.send(result);
    } else {
      res.send({message: "Enter again."})
    }
  }
  )

})

app.post('/registration', (req,res) => {
  const email = req.body.email
  const username = req.body.username
  const password = req.body.password

  con.query("SELECT * FROM users users WHERE username = ? AND password = ?",[username, password],
  (err,result) => {
    if(err) {
      res.setDefaultEncoding({err: err});
    } else {
      if (result.lenght > 0) {
        res.send(result);
      } else {
        res.send({message: "Wrong password or username."});
      }
    }
  }
  )

})

app.listen(3001, () => {
  console.log('running backend');
})
