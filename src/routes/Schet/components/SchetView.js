import React from 'react'
import { connect } from 'react-redux'
import { sendTransaction, sendMessage, typing, cancelTyping } from '../../../store/chat'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import './SchetView.scss'

class App extends React.Component {
  static propTypes = {
    schets: PropTypes.array.isRequired,
    sendTransaction: PropTypes.func.isRequired,
    startTyping: PropTypes.func.isRequired,
    cancelTyping: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
    params: PropTypes.object,
    messages: PropTypes.array.isRequired
  }

  state = {
    value: ''
  }

  handleTextChange = value => {
    this.setState({
      value: value.target.value
    })
  }

  componentDidMount () {
    let firstMessage = 'Привет, я бы хотел открыть новый счет, не могли бы вы мне помочь с этим?'
    let alreadySent = this.props.messages.some((m) => m.message === firstMessage)
    if (!alreadySent) {
      this.props.startTyping('IN_TYPING')
      setTimeout(() => {
        this.props.cancelTyping('IN_TYPING')
        this.props.sendMessage(firstMessage, 'IN')
      }, 5000)
    }
  }

  renderSchet = (schet, id) => {
    let LT = schet.transactions[0]
    return (
      <div className='schet'>
        <div className='schet__header'>
          <div className='schet__header-name'>
            {`Счет № ${schet.number}`}
          </div>
          {id !== undefined
            ? <Link to={`/schet/${schet.number}`}>
              <img src='http://localhost:3000/img/maximize.png'
                className='schet__header-open-button-image' />
            </Link>
            : <Link to={`/`}>
              <img src='http://localhost:3000/img/close.png'
                className='schet__header-open-button-image' />
            </Link>}
        </div>
        <div className='schet__amount'>
          {`${schet.money} ${schet.currency}`}
        </div>
        <div className='schet__percent'>
          {`${schet.percent}% годовых`}
        </div>
        <div className='schet__created'>
          {`Создан: ${schet.date_created}`}
        </div>
        <div className='schet__last-transaction'>
          {`Последняя операция: ${LT.date} `}
          (<span className={'schet__last-transaction--' + (LT.debit ? 'green' : 'red')}>
            {`${LT.debit ? '+' : '-'} ${LT.debit || LT.credit}`}
          </span>)
        </div>
      </div>
    )
  }

  renderTransactions = schets => {
    let schet = schets.find(e => e.number === this.props.params.schetID)
    return (
      <div className='schet__transactions-view-container'>
        {this.renderSchet(schet)}
        <div className='schet__transactions-title'>
          История операций
        </div>
        <div className='schet__transactions-container'>
          {schet.transactions.map((transaction, id) => this.renderTransaction(transaction, id))}
        </div>
      </div>
    )
  }

  handleTransactionSend = (transaction) => {
    this.props.sendTransaction(transaction, 'OUT_TRANSACTION')
  }

  renderTransaction = (transaction, id) => {
    let debit = !!transaction.debit
    let odd = id % 2 !== 0
    return (
      <div className={'schet__transaction-container' + (odd ? ' schet__transaction-container--grey' : '')}>
        <div className='schet__transaction-header'>
          <div className='schet__transaction-date'>
            {transaction.date}
          </div>
          <div className='schet__transaction-footer'>
            <div className='schet__transaction-description'>
              {transaction.description}
            </div>
            <div className='schet__transaction-amount'>
              {debit
              ? <span className='schet__transaction-amount--green'>
                {`+ ${transaction.debit}`}
              </span>
              : <span className='schet__transaction-amount--red'>
                {`- ${transaction.credit}`}
              </span>}
            </div>
          </div>
        </div>
        <img src='http://localhost:3000/img/mingle-share.png'
          onClick={() => { this.handleTransactionSend(transaction) }}
          width={15}
          height={15}
          className='schet__header-open-button-image' />
      </div>
    )
  }

  renderSchets = schets => {
    return schets.map(this.renderSchet)
  }

  render () {
    let schetNumber = this.props.params.schetID && this.props.schets.some(e => e.number === this.props.params.schetID)
    return (
      <div className='schet__container'>
        {schetNumber ? this.renderTransactions(this.props.schets) : this.renderSchets(this.props.schets)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  schets: state.schet,
  messages: state.chat.messages
})

const mapDispatchToProps = {
  sendTransaction: (transaction, type) => sendTransaction(transaction, type),
  sendMessage: (message, type) => sendMessage(message, type),
  startTyping: messageType => typing(messageType),
  cancelTyping: messageType => cancelTyping(messageType)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
