import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { loginUser } from '../../redux/reducers/sessionReducer'
import { connect } from 'react-redux'
import axios from 'axios'

class Landing extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  login = async e => {
    e.preventDefault()
    const { email, password } = this.state,
      user = await axios.post('/auth/login', { email, password }).catch(err => {
        alert('Invalid user or password')
        return
      })
    this.setState({ email: '', password: '' })
    if (user) {
      this.props.loginUser(user.data)
      this.props.history.push('/dashboard')
    }
  }

  render() {
    const { email, password } = this.state
    return (
      <div>
        <form className='login' onSubmit={this.login}>
          <input
            placeholder='enter email...'
            type='text'
            name='email'
            value={email}
            onChange={this.changeHandler}
          />
          <input
            placeholder='password...'
            type='password'
            name='password'
            value={password}
            onChange={this.changeHandler}
          />
          <input type='submit' value='Login' />
        </form>
        <span>
          Don't already have an account? <Link to='/register'>Register here</Link>
        </span>
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { loginUser })(Landing)
