const express = require('express')
const app = express()

const port = process.env.PORT || 3000

const user =
{
  user: "syscoin",
  password: "meEscolhe"
}
const errado = {
  "mensagem": "Credenciais erradas."
}

function getUser(req, res) {
  if (String(req.query.user).replace('"', '').replace('"', '') == user["user"]
    && String(req.query.password).replace('"', '').replace('"', '') == user["password"]) {
    res.send({
      "mensagem": "Meu nome completo é " + req.get('host') + ". Eu quero essa vaga!"
    });

  }
  else
    res.send(errado)
};

app.get('/provasyscoin', function (req, res) {
  getUser(req, res);

})

app.listen(port, err => {
  if (!err) {
    console.log('server listening on port', port)
  } else {
    console.log(err)
  }
})



