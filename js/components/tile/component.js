import React, { Component } from 'react'

import css from './styles.css'

class Tile extends Component {
  render () {
    return (
      <div className={`tile ${this.props.size}`}>
        {this.props.children}
      </div>
    )
  }
}

export default Tile
