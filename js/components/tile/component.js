import React, { Component } from 'react'

import Price from '../price/component'

import css from './styles.css'

class Tile extends Component {
  render () {
    return (
      <div className='tile'>
        <i className={`icon fab fa-3x fa-${this.props.icon}`} />
        <Price from={this.props.from} to={this.props.to} toSymbol={this.props.toSymbol} />
      </div>
    )
  }
}

export default Tile
