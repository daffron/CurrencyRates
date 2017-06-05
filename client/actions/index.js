import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_CURRENCY = 'RECEIVE_CURRENCY'
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY'
export const RECEIVE_LIST = 'RECEIVE_LIST'
export const CURRENCY_SUFFIX = 'CURRENCY_SUFFIX'
export const SHOW_NEWS = 'SHOW_NEWS'
export const DISPLAY_NEWS = 'DISPLAY_NEWS'
export const SHOW_SEARCH = 'SHOW_SEARCH'


export const requestCurrency = () => {
  return {
    type: REQUEST_CURRENCY,
   
  }
}

export const showSearch = (amount, from) => {
    return {
      type: SHOW_SEARCH,
      amount,
      from
    }
}

export const receiveCurrency = (currency) => {
  return {
    type: RECEIVE_CURRENCY,
    currency
  }
}

export const currencySuffix = (currency) => {
  return {
    type:CURRENCY_SUFFIX,
    currency
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export const showNews = (news) => {
  return {
    type: SHOW_NEWS,
    news
  }
}

export const displayNews = () => {
  return {
    type: DISPLAY_NEWS
  }
}

export function fetchCurrency (currencyFrom, amount, currencyTo) {
  return (dispatch) => {
    dispatch(requestCurrency())
    request
      .get(`https://currency-exchange.p.mashape.com/exchange?from=${currencyFrom}&q=${amount}&to=${currencyTo}`)
      .set("X-Mashape-Key", "XcaM22gAsgmshXGnRcnZzg3AFG8mp1sEuYdjsntmMJWMYM7dfR")
      .end((err, res) => {
        if (err) {
          dispatch(showError(err.message))
          return
        }
        dispatch(currencySuffix(currencyTo))
        dispatch(receiveCurrency(res.text))
        dispatch(showSearch(amount, currencyFrom))
      })
  }
}


export const receiveList = (list) => {
  return {
    type: RECEIVE_LIST,
    list
  }
}


export function fetchCurrencyList () {
  return (dispatch) => {
      dispatch(requestCurrency())
    request
      .get(`https://currency-exchange.p.mashape.com/listquotes`)
      .set("X-Mashape-Key", "XcaM22gAsgmshXGnRcnZzg3AFG8mp1sEuYdjsntmMJWMYM7dfR")
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          dispatch(showError(err.message))
          return
        }
        dispatch(receiveList(JSON.parse(res.text)))
      })
  }
}


export function fetchNews (newsQuery) {
  return (dispatch) => {
      dispatch(requestCurrency())
        dispatch(displayNews())
      }
  }
