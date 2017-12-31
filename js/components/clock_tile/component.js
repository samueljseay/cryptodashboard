import React, { Component } from 'react'

import Clock from '../clock/component'
import Tile from '../tile/component'

class ClockTile extends Component {
  render () {
    return (
      <Tile size={'large'} >
        <Clock />
      </Tile>
    )
  }
}

export default ClockTile
