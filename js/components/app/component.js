import React, { Component } from 'react'

import ClockTile from '../clock_tile/component'
import PriceTile from '../price_tile/component'
import RigTile from '../rig_tile/component'

import css from './styles.css'

class App extends Component {
  render () {
    return (
      <div className='app'>
        {
          [
            ['ETH', 'USD', '$', 2],
            ['BTC', 'USD', '$', 2],
            ['IOT', 'USD', '$', 2],
            ['ZEN', 'BTC', 'Ƀ', 8]
          ].map(([from, to, toSymbol, precision, icon], i) => (
            <PriceTile
              key={i}
              icon={icon}
              precision={precision}
              from={from}
              size={'small'}
              to={to}
              toSymbol={toSymbol}
            />
          ))
        }
        <ClockTile />
        <RigTile />
      </div>
    )
  }
}

export default App
