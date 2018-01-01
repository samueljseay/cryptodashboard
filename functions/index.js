const axios = require('axios')
const functions = require('firebase-functions')

exports.rigstatus = functions.https.onRequest((req, res) => {
  return axios.get('http://31dcea.ethosdistro.com/?json=yes').then(({ data }) => {
    res.status(200).send(data)
  })
})
