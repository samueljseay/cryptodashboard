import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import NiceHashService from '../../services/nicehash'
import styles from '../zen_wallet/styles.css'

class NiceHashWallet extends Component {
  constructor (props) {
    super(props)
    this.state = { walletBalance: 0, walletUSD: 0 }
  }

  componentDidMount () {
    setInterval(this.updateBalance.bind(this), 60000)
    this.updateBalance()
  }

  async updateBalance () {
    const { balance, balanceUSD } = await NiceHashService.fetchWalletBalance()
    this.setState({ walletBalance: balance, walletUSD: balanceUSD })
  }

  render () {
    return (
      <div className='wallet'>
        <div className='balances'>
          <FontAwesomeIcon icon='usd-square' size='2x' />
          <div className='balance-details'>
            <h2 className='heading'>NH WALLET</h2>
            <div>BTC Ƀ{this.state.walletBalance}</div>
            <div>USD ${this.state.walletUSD}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default NiceHashWallet
