import Plot from 'react-plotly.js'
import React, { Component } from 'react'

import CryptoCompare from '../../services/cryptocompare'
import css from './styles.css'

class HistoPrice extends Component {
  constructor (props) {
    super(props)
    this.state = { data: null, loaded: false }
  }

  componentDidMount () {
    this.generateHistoryData()
  }

  async generateHistoryData () {
    const data = await CryptoCompare.fetchHistoricalPrice(this.props.from, this.props.to, 30)
    this.setState({ data, loaded: true })
  }

  render () {
    return (
      <div className='histoprice'>
        {this.state.loaded && this.renderPlot()}
      </div>
    )
  }

  get axisOptions () {
    return {
      showgrid: false,
      showline: false,
      showticklabels: false,
      zerolinecolor: 'rgba(0,0,0,0)'
    }
  }

  renderPlot () {
    return (
      <Plot
        config={{ displayModeBar: false }}
        data={[
          {
            x: Array.apply(null, {length: 30}).map(Number.call, Number),
            y: this.state.data,
            type: 'scatter',
            mode: 'lines',
            line: {
              color: this.props.percentChange > 0 ? '#70c9c0' : '#f79b7f',
              width: 2
            }
          }
        ]}
        layout={{
          width: 300,
          height: 242,
          paper_bgcolor: 'rgba(0,0,0,0)',
          plot_bgcolor: 'rgba(0,0,0,0)',
          xaxis: this.axisOptions,
          yaxis: this.axisOptions
        }}
      />
    )
  }
}

export default HistoPrice
