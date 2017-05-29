// ------------------------------------
// Constants
// ------------------------------------
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const SEND_TRANSACTION = 'SEND_TRANSACTION'
export const TYPING = 'TYPING'
export const CANCEL_TYPING = 'CANCEL_TYPING'

const URL = 'http://localhost:3000'

// ------------------------------------
// Actions
// ------------------------------------
export function sendTransaction (transaction, messageType) {
  return {
    type: SEND_TRANSACTION,
    transaction,
    messageType
  }
}
export function sendMessage (message, messageType) {
  return {
    type: SEND_MESSAGE,
    message,
    messageType
  }
}

export function typing (messageType) {
  return {
    type: TYPING,
    messageType
  }
}

export function cancelTyping (messageType) {
  return {
    type: CANCEL_TYPING,
    messageType
  }
}

export const actions = {
  sendMessage,
  typing,
  cancelTyping,
  sendTransaction
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [SEND_MESSAGE] : (state, action) => {
    let message = {
      type: action.messageType,
      date: new Date(),
      picture: action.messageType === 'IN' ? URL + '/img/Josh.png' : URL + '/img/Liza.png',
      name: action.messageType === 'IN' ? 'Джош' : 'Лиза',
      message: action.message
    }
    return {
      ...state,
      messages: [message, ...state.messages]
    }
  },
  [SEND_TRANSACTION]: (state, action) => {
    let message = {
      type: action.messageType,
      date: new Date(),
      picture: action.messageType === 'IN_TRANSACTION' ? URL + '/img/Josh.png' : URL + '/img/Liza.png',
      name: action.messageType === 'IN_TRANSACTION' ? 'Джош' : 'Лиза',
      message: action.transaction
    }
    return {
      ...state,
      messages: [message, ...state.messages]
    }
  },
  [TYPING]: (state, action) => {
    return {
      ...state,
      typing: {
        inTyping: action.messageType === 'IN_TYPING' ? true : state.typing.inTyping,
        outTyping: action.messageType === 'OUT_TYPING' ? true : state.typing.outTyping
      }
    }
  },
  [CANCEL_TYPING]: (state, action) => {
    return {
      ...state,
      typing: {
        inTyping: action.messageType === 'IN_TYPING' ? false : state.typing.inTyping,
        outTyping: action.messageType === 'OUT_TYPING' ? false : state.typing.outTyping
      }
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  typing: {
    inTyping: false,
    outTyping: false
  },
  messages: [
    {
      type: 'OUT',
      date: '2017-05-24T12:56:33.468Z',
      picture: 'http://localhost:3000/img/Liza.png',
      name: 'Лиза',
      message: 'спасибо за обращение!'
    },
    {
      type: 'IN',
      date: '2017-05-24T12:56:33.468Z',
      picture: 'http://localhost:3000/img/Josh.png',
      name: 'Джош',
      message: 'Лиза спасибо большое за помощь!'
    },
    {
      type: 'OUT',
      date: '2017-05-24T12:56:33.468Z',
      picture: 'http://localhost:3000/img/Liza.png',
      name: 'Лиза',
      message: 'Джош, уже подключила вам новый тариф, на котором процент на остаток в счетах будет еще больше'
    },
    {
      type: 'OUT',
      date: '2017-05-24T12:56:33.468Z',
      picture: 'http://localhost:3000/img/Liza.png',
      name: 'Лиза',
      message: 'Сейчас посмотрим, что можно сделать'
    },
    {
      type: 'IN',
      date: '2017-05-24T12:56:33.468Z',
      picture: 'http://localhost:3000/img/Josh.png',
      name: 'Джош',
      message: 'Привет. А как перейти на тариф, на котором самый большой процент на остаток по счетам?'
    },
    {
      type: 'OUT',
      date: '2017-05-24T12:56:33.468Z',
      picture: 'http://localhost:3000/img/Liza.png',
      name: 'Лиза',
      message: 'Привет!'
    }
  ]
}
export default function chatReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
