import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import ZenExplorer from '../../services/zenexplorer'

import styles from './styles.css'

class ZenWallet extends Component {
  constructor (props) {
    super(props)
    this.state = { walletAddress: '', walletBalance: 0, walletUSD: 0 }
  }

  componentDidMount () {
    setInterval(this.updateBalance.bind(this), 60000)
    this.updateBalance()
  }

  async updateBalance () {
    const { walletAddress, walletZEN, walletUSD } = await ZenExplorer.fetchWalletBalance()
    this.setState({ walletAddress, walletUSD: walletUSD.toFixed(2), walletZEN: walletZEN.toFixed(2) })
  }

  render () {
    return (
      <div className='wallet'>
        <div className='balances'>
          <FontAwesomeIcon icon='dollar-sign' size='2x' />
          <div className='balance-details'>
            <h2 className='heading'>WALLET</h2>
            <div>ZEN {this.state.walletZEN}</div>
            <div>USD ${this.state.walletUSD}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ZenWallet
