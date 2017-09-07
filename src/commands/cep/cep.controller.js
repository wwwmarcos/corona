const axios = require('axios')

const query = (req, res) => {
  const url = `https://viacep.com.br/ws/${req.body.text}/json/`

  axios
    .get(url)
    .then(response => {
      res
        .send({
          response_type: 'in_channel',
          text: `${response.data.cep} - ${response.data.logradouro}, ${response.data.bairro} - ${response.data.localidade} ${response.data.uf}`,
        })
    })
    .catch(error => {
      res.send({
        response_type: 'in_channel',
        text: 'Error :grimacing:'
      })
    })
}

module.exports = {
  query
}