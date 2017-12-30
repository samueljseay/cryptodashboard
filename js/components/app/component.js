import React, { Component } from 'react'

import Tile from '../tile/component'

import css from './styles.css'

class App extends Component {
  render () {
    return (
      <div className='app'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => <Tile key={i} icon='btc' from='BTC' to='USD' toSymbol={'$'} />)}
      </div>
    )
  }
}

export default App
