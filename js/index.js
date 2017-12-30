import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill'
import App from './components/app/component'
import CryptoCompare from './services/cryptocompare'

ReactDOM.render(<App />, document.getElementById('app'))

CryptoCompare.fetchPrice('BTC', 'USD').then((prices) => console.log(prices))
