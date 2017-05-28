import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './ChatOutput.scss'

class App extends React.Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
    inTyping: PropTypes.bool.isRequired,
    outTyping: PropTypes.bool.isRequired
  }

  renderDate = (date) => {
    let d = new Date(date)
    return (
      <div className='chat-output__date'>
        {`—${d.getDate()}.${d.getMonth() + 1}.${d.getYear() + 1900}—`}
      </div>
    )
  }

  renderIn = (message, id) => {
    return (
      <div className='chat-output__in-container' key={'chat-output__in-conteainer' + id}>
        <img src={message.picture} alt={message.name} width={50} height={50} className='chat-output__picture' />
        <div className='chat-output__in-text'>
          <span className='chat-output__name'>{message.name}</span>: {message.message}
        </div>
      </div>
    )
  }

  renderOut = (message, id) => {
    return (
      <div className='chat-output__out-container' key={'chat-output__in-conteainer' + id}>
        <div className='chat-output__out-text'>
          <span className='chat-output__name'>{message.name}</span>: {message.message}
        </div>
        <img src={message.picture} alt={message.name} width={50} height={50} className='chat-output__picture' />
      </div>
    )
  }

  renderInWaiting = (message, id) => {
    return (
      <div className='chat-output__in-container' key={'chat-output__in-conteainer' + id}>
        <img src={message.picture} alt={message.name} width={50} height={50} className='chat-output__picture' />
        <div className='chat-output__in-text'>
          <img
            src='http://localhost:3000/img/loading.gif'
            alt={message.name}
            height='10'
            className='chat-output__waiting' />
        </div>
      </div>
    )
  }

  renderOutWaiting = (message, id) => {
    return (
      <div className='chat-output__out-container' key={'chat-output__in-conteainer' + id}>
        <div className='chat-output__out-text'>
          <img
            src='http://localhost:3000/img/loading.gif'
            alt={message.name}
            height='10'
            className='chat-output__waiting' />
        </div>
        <img src={message.picture} alt={message.name} width={50} height={50} className='chat-output__picture' />
      </div>
    )
  }

  renderMessages = (messages) => {
    let date = 0
    let result = []
    if (this.props.inTyping) {
      let message = {
        type: 'IN_TYPING',
        date: new Date(),
        picture: 'http://localhost:3000/img/Josh.png',
        name: 'Джош',
        message: ''
      }
      result.push(this.renderInWaiting(message, '-2'))
    }
    if (this.props.outTyping) {
      let message = {
        type: 'OUT_TYPING',
        date: new Date(),
        picture: 'http://localhost:3000/img/Liza.png',
        name: 'Лиза',
        message: ''
      }
      result.push(this.renderOutWaiting(message, '-1'))
    }
    messages.forEach((message, id) => {
      let messageDate = new Date(message.date)
      if (messageDate.getDate() !== date) {
        result.push(this.renderDate(message.date, id))
        date = messageDate.getDate()
      }
      if (message.type === 'IN') {
        result.push(this.renderIn(message, id))
      } else if (message.type === 'OUT') {
        result.push(this.renderOut(message, id))
      }
    })
    return result
  }

  render () {
    return (
      <div className='chat-output'>
        {this.renderMessages(this.props.messages)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  messages : state.chat.messages,
  outTyping: state.chat.typing.outTyping,
  inTyping: state.chat.typing.inTyping
})

export default connect(mapStateToProps)(App)
