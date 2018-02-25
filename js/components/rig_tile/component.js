import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import EthosService from '../../services/ethos'
import Tile from '../tile/component'

import css from './styles.css'

class RigTile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      running: false,
      hash: 0,
      watts: 0
    }
  }

  componentDidMount () {
    setInterval(this.updateRigStatus.bind(this), 60000)
    this.updateRigStatus()
  }

  async updateRigStatus () {
    const [rig, secondRig] = await EthosService.fetchStatus()
    this.setState({
      running: secondRig.allGpusAlive,
      hash: secondRig.totalHash,
      watts: secondRig.watts
    })
  }

  render () {
    return (
      <Tile size={'small'} >
        <div className={`rig rig-ok-${this.state.running}`} >
          <FontAwesomeIcon icon='server' size='5x' />
          <div className='stats'>
            <p className='rig-id'>RIG</p>
            <p className='hash'>{this.state.hash} Sol/s</p>
            <p className='watts' >{this.state.watts} Watts</p>
          </div>
        </div>
      </Tile>
    )
  }
}

export default RigTile
