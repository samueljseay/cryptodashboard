import React, { Component } from 'react'

import Price from '../price/component'
import Tile from '../tile/component'

import { Btc, Eth, Iota, Zec } from 'react-cryptocoins'

class PriceTile extends Component {
  getCoinIcon (coin) {
    return {
      ETH: <Eth size={48} />,
      ZEN: <Zec size={48} />,
      IOT: <Iota size={48} />,
      BTC: <Btc size={48} />
    }[coin]
  }

  render () {
    return (
      <Tile size={'small'} >
        {this.getCoinIcon(this.props.from)}
        <Price from={this.props.from} to={this.props.to} precision={this.props.precision} toSymbol={this.props.toSymbol} />
      </Tile>
    )
  }
}

export default PriceTile
