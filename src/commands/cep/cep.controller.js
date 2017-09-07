const axios = require('axios')

const query = (req, res) => {
  const url = `https://viacep.com.br/ws/${req.body.text}/json/`

  axios
    .get(url)
    .then(response => {
      res
        .status(200)
        .send({
          response_type: 'in_channel',
          text: `${response.data.cep} - ${response.data.logradouro}, ${response.data.bairro} - ${response.data.localidade} ${response.data.uf}`,
        })
    })
    .catch(error => res.status(500).send(error))
}

module.exports = {
  query
}