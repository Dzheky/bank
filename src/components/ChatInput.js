import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './ChatInput.scss'
import { sendMessage, typing, cancelTyping } from '../store/chat'

class App extends React.Component {
  static propTypes = {
    sendMessage: PropTypes.func.isRequired,
    startTyping: PropTypes.func.isRequired,
    cancelTyping: PropTypes.func.isRequired,
    outTyping: PropTypes.bool.isRequired
  }

  state = {
    value: '',
    control: false
  }

  handleTextChange = event => {
    if (event.target.value.length && !this.props.outTyping) {
      this.props.startTyping('OUT_TYPING')
    } else if (event.target.value.length === 0 && this.props.outTyping) {
      this.props.cancelTyping('OUT_TYPING')
    }
    this.setState({
      value: event.target.value
    })
  }

  handleKeyPress = e => {
    if (e.key === 'Control' && !this.state.control) {
      this.setState({
        control: true
      })
    } else if (this.state.control && e.key === 'Enter') {
      this.handleSend()
    } else if (this.state.control && e.key !== 'Control') {
      this.setState({
        control: false
      })
    }
  }

  handleSend = () => {
    if (this.state.value.length > 0) {
      this.props.sendMessage(this.state.value, 'OUT')
      this.props.cancelTyping('OUT_TYPING')
      this.setState({
        value: ''
      })
    }
  }

  render () {
    return (
      <div className='chat-input'>
        <div className='chat-input__nametag'>Чат</div>
        <textarea
          className='chat-input__textarea'
          rows='4'
          cols='50'
          placeholder='Сообщение'
          value={this.state.value}
          onKeyDown={this.handleKeyPress}
          onChange={this.handleTextChange} />
        <div className='chat-input__button' onClick={this.handleSend}>{'Отправить'}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  outTyping: state.chat.typing.outTyping,
})

const mapDispatchToProps = {
  sendMessage : (message, type) => sendMessage(message, type),
  startTyping: messageType => typing(messageType),
  cancelTyping: messageType => cancelTyping(messageType)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
