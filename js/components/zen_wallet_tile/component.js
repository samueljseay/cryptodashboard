import React, { Component } from 'react'

import Tile from '../tile/component'
import ZenWallet from '../zen_wallet/component'

class ZenWalletTile extends Component {
  render () {
    return (
      <Tile size={'small'} >
        <ZenWallet />
      </Tile>
    )
  }
}

export default ZenWalletTile
