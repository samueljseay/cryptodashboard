import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import SolarEdgeService from '../../services/solaredge'
import Tile from '../tile/component'

import css from './styles.css'

class SolarEdgeTile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      kwNow: 0,
      kwToday: 0
    }
  }

  componentDidMount () {
    setInterval(this.updateSolarEdge.bind(this), 60000)
    this.updateSolarEdge()
  }

  async updateSolarEdge () {
    const { kwNow, kwToday } = await SolarEdgeService.fetchOverview()
    this.setState({ kwNow, kwToday })
  }

  render () {
    return (
      <Tile size={'small'} >
        <FontAwesomeIcon icon='bolt' size='5x' />
        <div className='solar-edge' >
          <div className='title'>NOW</div>
          <div>{this.state.kwNow} KW/h</div>
          <div className='title'>TODAY</div>
          <div>{this.state.kwToday} KW/h</div>
        </div>
      </Tile>
    )
  }
}

export default SolarEdgeTile
