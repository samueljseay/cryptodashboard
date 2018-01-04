import React, { Component } from 'react'

import Price from '../price/component'
import Tile from '../tile/component'

import { Btc, Eth, Iota, Xrp, Zec } from 'react-cryptocoins'

class PriceTile extends Component {
  getCoinIcon (coin) {
    return {
      ETH: <Eth size={80} />,
      ZEN: <Zec size={80} />,
      IOT: <Iota size={80} />,
      BTC: <Btc size={80} />,
      XRP: <Xrp size={80} />,
      ZEC: <Zec size={80} />
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
