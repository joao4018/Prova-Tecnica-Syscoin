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



app.get('/provasyscoin', function (req, res) {


})

app.listen(port, err => {
  if (!err) {
    console.log('server listening on port', port)
  } else {
    console.log(err)
  }
})


