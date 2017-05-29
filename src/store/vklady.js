const initialState = [
  {
    number: '546187913',
    money: '15 350',
    currency: '₽',
    percent: '15',
    date_created: '01.01.2016 | 13:00',
    transactions: [
      {
        date: '08.03.2017 | 12:00',
        debit: '1 350',
        description: 'Начисление процентов'
      },
      {
        date: '08.02.2017 | 12:00',
        debit: '1 200',
        description: 'Начисление процентов'
      },
      {
        date: '08.01.2017 | 12:00',
        debit: '1 100',
        description: 'Начисление процентов'
      },
      {
        date: '08.12.2016 | 12:00',
        debit: '100',
        description: 'Начисление процентов'
      },
      {
        date: '08.11.2016 | 12:00',
        debit: '950',
        description: 'Начисление процентов'
      },
      {
        date: '08.10.2016 | 12:00',
        debit: '850',
        description: 'Начисление процентов'
      },
      {
        date: '08.09.2016 | 12:00',
        debit: '750',
        description: 'Начисление процентов'
      },
    ]
  },
  {
    number: '75462161',
    money: '5 600',
    currency: '$',
    percent: '1',
    date_created: '25.03.2016 | 10:12',
    transactions: [
      {
        date: '08.03.2017 | 12:00',
        debit: '350',
        description: 'Начисление процентов'
      },
      {
        date: '08.02.2017 | 12:00',
        debit: '200',
        description: 'Начисление процентов'
      },
      {
        date: '08.01.2017 | 12:00',
        debit: '100',
        description: 'Начисление процентов'
      },
      {
        date: '08.12.2016 | 12:00',
        debit: '90',
        description: 'Начисление процентов'
      },
      {
        date: '08.11.2016 | 12:00',
        debit: '50',
        description: 'Начисление процентов'
      },
      {
        date: '08.10.2016 | 12:00',
        debit: '25',
        description: 'Начисление процентов'
      },
      {
        date: '08.09.2016 | 12:00',
        debit: '10',
        description: 'Начисление процентов'
      },
      {
        date: '08.08.2016 | 12:00',
        debit: '5',
        description: 'Начисление процентов'
      },
      {
        date: '08.07.2016 | 12:00',
        debit: '3',
        description: 'Начисление процентов'
      },
    ]
  },
  {
    number: '5555555',
    money: '11 450',
    currency: '₽',
    percent: '15',
    date_created: '01.01.2016 | 13:00',
    transactions: [
      {
        date: '08.03.2017 | 12:00',
        debit: '2 350',
        description: 'Начисление процентов'
      },
      {
        date: '08.02.2017 | 12:00',
        debit: '3 200',
        description: 'Начисление процентов'
      },
      {
        date: '08.01.2017 | 12:00',
        debit: '14 100',
        description: 'Начисление процентов'
      },
      {
        date: '08.12.2016 | 12:00',
        debit: '2 424',
        description: 'Начисление процентов'
      },
      {
        date: '08.11.2016 | 12:00',
        debit: '222',
        description: 'Начисление процентов'
      },
      {
        date: '08.10.2016 | 12:00',
        debit: '850',
        description: 'Начисление процентов'
      },
      {
        date: '08.09.2016 | 12:00',
        debit: '750',
        description: 'Начисление процентов'
      },
    ]
  }
]

export default function vkladyReducer (state = initialState, action) {
  return state
}
