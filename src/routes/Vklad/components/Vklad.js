import React from 'react'
import { connect } from 'react-redux'
import { sendTransaction } from '../../../store/chat'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import './Vklad.scss'

class Vklad extends React.Component {
  static propTypes = {
    sendTransaction: PropTypes.func.isRequired,
    vklad: PropTypes.object.isRequired,
    vkladID: PropTypes.number.isRequired
  }

  state = {
    screen: 'Баланс'
  }

  render () {
    let amount = 0
    this.props.vklad.transactions.forEach((t) => { amount += parseInt(t.debit) })
    amount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    return (
      <div className='vklad-main'>
        <div className='vklad-main__header'>
          <div className='vklad-main__header-name'>
            {`Вклад № ${this.props.vklad.number}`}
          </div>
          {this.props.vkladID !== undefined
            ? <Link to={`/vklad/${this.props.vklad.number}`}>
              <img src='http://localhost:3000/img/maximize-white.png'
                className='vklad-main__header-open-button-image' />
            </Link>
            : <Link to={`/vklady`}>
              <img src='http://localhost:3000/img/close-white.png'
                className='vklad-main__header-open-button-image' />
            </Link>}
        </div>
        <div className='vklad-main__created'>
          {`Создан: ${this.props.vklad.date_created}`}
        </div>
        <div className='vklad-main__line' />
        <div className='vklad-main__controls'>
          <div
            onClick={() => { this.setState({ screen: 'Баланс' }) }}
            className={'vklad-main__control-button' + (this.state.screen === 'Баланс' ? '--active' : '')}>
            {'Баланс'}
          </div>
          <div
            onClick={() => { this.setState({ screen: 'Доход' }) }}
            className={'vklad-main__control-button' + (this.state.screen === 'Доход' ? '--active' : '')}>
            {'Доход'}
          </div>
        </div>
        <div className='vklad-main__amount'>
          {this.state.screen === 'Баланс'
          ? `${this.props.vklad.money} ${this.props.vklad.currency}`
          : `+ ${amount} ${this.props.vklad.currency}`}
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  static propTypes = {
    vklady: PropTypes.array.isRequired,
    params: PropTypes.object
  }

  state = {
    value: ''
  }

  handleTextChange = value => {
    this.setState({
      value: value.target.value
    })
  }

  renderVklad = (vklad, id) => {
    return (
      <Vklad vkladID={id} vklad={vklad} />
    )
  }

  renderTransactions = vklady => {
    let vklad = vklady.find(e => e.number === this.props.params.vkladID)
    return (
      <div className='vklad__transactions-view-container'>
        {this.renderVklad(vklad)}
        <div className='vklad__transactions-title'>
          История операций
        </div>
        <div className='vklad__transactions-container'>
          {vklad.transactions.map((transaction, id) => this.renderTransaction(transaction, id))}
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
      <div className={'vklad__transaction-container' + (odd ? ' vklad__transaction-container--grey' : '')}>
        <div className='vklad__transaction-header'>
          <div className='vklad__transaction-date'>
            {transaction.date}
          </div>
          <div className='vklad__transaction-footer'>
            <div className='vklad__transaction-description'>
              {transaction.description}
            </div>
            <div className='vklad__transaction-amount'>
              {debit
              ? <span className='vklad__transaction-amount--green'>
                {`+ ${transaction.debit}`}
              </span>
              : <span className='vklad__transaction-amount--red'>
                {`- ${transaction.credit}`}
              </span>}
            </div>
          </div>
        </div>
        <img src='http://localhost:3000/img/mingle-share.png'
          onClick={() => { this.handleTransactionSend(transaction) }}
          width={15}
          height={15}
          className='vklad__header-open-button-image' />
      </div>
    )
  }

  renderVklady = vklady => {
    return vklady.map(this.renderVklad)
  }

  render () {
    let vkladNumber = this.props.params.vkladID && this.props.vklady.some(e => e.number === this.props.params.vkladID)
    return (
      <div className='vklad__container'>
        {vkladNumber ? this.renderTransactions(this.props.vklady) : this.renderVklady(this.props.vklady)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  vklady : state.vklady
})

const mapDispatchToProps = {
  sendTransaction: (transaction, type) => sendTransaction(transaction, type)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
