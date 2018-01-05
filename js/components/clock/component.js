import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
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
      time: now.format('h:mm'),
      a: now.format('a'),
      date: now.format('dddd Do MMMM YYYY')
    }
  }

  tick () {
    this.setState(this.getDateAndTime())
  }

  render () {
    return (
      <div className='clock'>
        <div className='date-time'>
          <FontAwesomeIcon icon='clock' size='10x' />
          <h1 className='heading'>{this.state.time}</h1>
        </div>
        <h2 className='subheading'>{this.state.date}</h2>
      </div>
    )
  }
}

export default Clock
