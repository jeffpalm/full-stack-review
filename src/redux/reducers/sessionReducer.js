import axios from 'axios'

const initialState = {
  user: {},
  isLoggedIn: false
}

const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'
const GET_USER = 'GET_USER'

export function loginUser(user) {
  return {
    type: LOGIN_USER,
    payload: user
  }
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
    payload: initialState
  }
}

export function getUser() {
  const payload = axios.get('/auth/user')
  return { type: GET_USER, payload }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, isLoggedIn: true, user: action.payload }
    case LOGOUT_USER:
      return { ...state, ...action.payload }
    case GET_USER + '_PENDING':
      return state
    case GET_USER + '_FULFILLED':
      return { ...state, user: action.payload.data, isLoggedIn: true }
    case GET_USER + '_REJECTED':
      return { ...state, isLoggedIn: false, user: {} }
    default:
      return state
  }
}
