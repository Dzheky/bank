const initialState = [
  {
    number: '57890456',
    money: '69 650',
    currency: '₽',
    percent: '8',
    date_created: '23.01.2017 | 13:55',
    transactions: [
      {
        date: '08.03.2017 | 19:21',
        debit: '3 500',
        description: 'Пополнение с карты ****0465'
      },
      {
        date: '07.03.2017 | 13:55',
        debit: '1 250',
        description: 'Пополнение с карты ****0465'
      },
      {
        date: '05.03.2017 | 19:16',
        credit: '6 800',
        description: 'Списание на карту ****0465'
      },
      {
        date: '01.03.2017 | 10:25',
        debit: '10 000',
        description: 'Пополнение с карты ****0465'
      },
      {
        date: '20.02.2017 | 18:10',
        debit: '230',
        description: 'Начисление процентов'
      }
    ]
  },
  {
    number: '57890398',
    money: '3 502',
    currency: '$',
    percent: '0.3',
    date_created: '14.08.2016 | 10:12',
    transactions: [
      {
        date: '08.03.2017 | 19:21',
        debit: '100',
        description: 'Пополнение с карты ****0465'
      },
      {
        date: '07.03.2017 | 13:55',
        debit: '32',
        description: 'Пополнение с карты ****0465'
      },
      {
        date: '05.03.2017 | 19:16',
        credit: '10 000',
        description: 'Списание на карту ****0465'
      },
      {
        date: '01.03.2017 | 10:25',
        debit: '123',
        description: 'Пополнение с карты ****0465'
      },
      {
        date: '20.02.2017 | 18:10',
        debit: '130',
        description: 'Начисление процентов'
      },
      {
        date: '20.02.2017 | 18:10',
        debit: '555',
        description: 'Пополнение с карты ****0472'
      },
      {
        date: '13.02.2017 | 23:18',
        debit: '777',
        description: 'Пополнение с карты ****0465'
      },
      {
        date: '13.02.2017 | 23:18',
        credit: '123',
        description: 'Списание на карту ****0465'
      },
    ]
  },
  {
    number: '57890239',
    money: '10 500',
    currency: '₽',
    percent: '8',
    date_created: '01.03.2017 | 20:03',
    transactions: [
      {
        date: '08.03.2017 | 19:21',
        credit: '1 100',
        description: 'Списание на карту ****0465'
      },
      {
        date: '07.03.2017 | 13:55',
        debit: '22 032',
        description: 'Пополнение с карты ****0465'
      },
      {
        date: '05.03.2017 | 19:16',
        credit: '24 000',
        description: 'Списание на карту ****0465'
      },
      {
        date: '01.03.2017 | 10:25',
        debit: '123',
        description: 'Пополнение с карты ****0465'
      },
      {
        date: '20.02.2017 | 18:10',
        debit: '1 130',
        description: 'Начисление процентов'
      },
      {
        date: '20.02.2017 | 18:10',
        debit: '5 555',
        description: 'Пополнение с карты ****0472'
      },
      {
        date: '13.02.2017 | 23:18',
        debit: '7 777',
        description: 'Пополнение с карты ****0465'
      },
      {
        date: '13.02.2017 | 23:18',
        credit: '1 123',
        description: 'Списание на карту ****0465'
      },
    ]
  },
]

export default function schetReducer (state = initialState, action) {
  return state
}
