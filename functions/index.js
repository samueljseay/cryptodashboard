const axios = require('axios')
const functions = require('firebase-functions')

exports.solaredge = functions.https.onRequest((req, res) => {
  const { solaredge: { site_id, api_key } } = functions.config()
  return axios.get(`https://monitoringapi.solaredge.com/site/${site_id}/overview.json?api_key=${api_key}`).then(({data}) => {
    res.status(200).send(data)
  })
})
