import React, { Component } from 'react'

import ClockTile from '../clock_tile/component'
import PriceTile from '../price_tile/component'
import SolarEdgeTile from '../solar_edge_tile/component'
import ZenWalletTile from '../zen_wallet_tile/component'

const PRICE_UPDATE_INTERVAL = 15000

import css from './styles.css'

class App extends Component {
  render () {
    return (
      <div className='app'>
        {
          [
            ['ETH', 'USD', '$', 2],
            ['BTC', 'USD', '$', 2],
            ['ETH', 'BTC', 'Ƀ', 6],
            ['ZEN', 'BTC', 'Ƀ', 6],
          ].map(this.renderPriceTile)
        }
        <ClockTile />
        {
          [
            ['EOS', 'BTC', 'Ƀ', 6],
            ['ZEC', 'USD', '$', 2],
            ['LTC', 'USD', '$', 2]
          ].map(this.renderPriceTile)
        }
        <SolarEdgeTile />
      </div>
    )
  }

  renderPriceTile ([from, to, toSymbol, precision, icon], i) {
    return (
      <PriceTile
        interval={PRICE_UPDATE_INTERVAL}
        key={i}
        icon={icon}
        precision={precision}
        from={from}
        size={'small'}
        to={to}
        toSymbol={toSymbol}
      />
    )
  }
}

export default App
