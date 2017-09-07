const axios = require('axios')

const query = (req, res) => {
  const url = `https://viacep.com.br/ws/${req.body.cep}/json/`

  axios
    .get(url)
    .then(response => res.json(response.data))
    .catch(error => res.status(500).send(error))
}

module.exports = {
  query
}