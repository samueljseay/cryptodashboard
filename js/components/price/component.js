import React, { Component } from 'react'

import CryptoCompare from '../../services/cryptocompare'

import styles from './styles.css'

class Price extends Component {
  constructor (props) {
    super(props)
    this.state = { percentChange: 0, price: 0, icon: 'arrow-down' }
  }

  componentDidMount () {
    setInterval(this.updatePrice.bind(this), 30000)
    this.updatePrice()
  }

  async updatePrice () {
    const { price, percentChange } = await CryptoCompare.fetchPrice(this.props.from, this.props.to)
    this.setState({ price, percentChange, icon: percentChange > 0 ? 'arrow-up' : 'arrow-down' })
  }

  render () {
    return (
      <div className='price'>
        <div class='stats'>
          <h4 className='from-to'>{this.props.from} / {this.props.to}</h4>
          <p className='to-price'>{this.props.toSymbol}{this.state.price}</p>
          <p className={`change ${this.state.icon}`} >{this.state.percentChange}%</p>
        </div>
        <div className={`icon-wrapper ${this.state.icon}`} >
          <i className={`fas fa-3x fa-${this.state.icon}`} />
        </div>
      </div>
    )
  }
}

export default Price
