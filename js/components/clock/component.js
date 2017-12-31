import React, { Component } from 'react'
import moment from 'moment'

import css from './styles.css'

class Clock extends Component {
  constructor (props) {
    super(props)
    this.state = this.getDateAndTime()
  }

  componentDidMount () {
    setInterval(this.tick.bind(this), 1)
    this.tick()
  }

  getDateAndTime () {
    const now = moment()

    return {
      time: now.format('H:mm:ss'),
      a: now.format('a'),
      date: now.format('MMMM Do YYYY')
    }
  }

  tick () {
    this.setState(this.getDateAndTime())
  }

  render () {
    return (
      <div className='clock'>
        <i className='fas fa-clock fa-10x' />
        <div className='date-time' >
          <h1 className='heading' >{this.state.time}</h1>
          <h2 className='subheading'>{this.state.date}</h2>
        </div>
      </div>
    )
  }
}

export default Clock
