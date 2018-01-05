import React, { Component } from 'react'

import Tile from '../tile/component'
import NiceHashWallet from '../nice_hash_wallet/component'

class NiceHashWalletTile extends Component {
  render () {
    return (
      <Tile size={'small'} >
        <NiceHashWallet />
      </Tile>
    )
  }
}

export default NiceHashWalletTile
