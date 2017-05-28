import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import ChatInput from '../../components/ChatInput'
import ChatOutput from '../../components/ChatOutput'

export const PageLayout = ({ children }) => (
  <div className='container'>
    <div className='left-screen'>
      <ChatInput />
      <img src='http://localhost:3000/img/bitmap.png'
        className='left-screen__chat-shadow' />
      <ChatOutput />
    </div>
    <div className='right-screen'>
      <div className='right-screen__buttons'>
        <Link
          to='/'
          activeClassName='right-screen__button-schet--active'
          className='right-screen__button-schet'>Счета</Link>
        <Link
          to='/vklady'
          activeClassName='right-screen__button-vklad--active'
          className='right-screen__button-vklad'>Вклады</Link>
      </div>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
