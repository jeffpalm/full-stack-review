import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { loginUser } from '../../redux/reducers/sessionReducer'
import { connect } from 'react-redux'
import axios from 'axios'

class Register extends Component {
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

  register = async e => {
    e.preventDefault()
    const { email, password } = this.state,
      user = (
        await axios.post('/auth/register', { email, password }).catch(err => {
          alert(err)
          return
        })
      ).data
    this.setState({ email: '', password: '' })
    this.props.loginUser(user)
    this.props.history.push('/dashboard')
  }

  render() {
    return (
      <div>
        <form className='login' onSubmit={this.register}>
          <input
            placeholder='enter email...'
            type='text'
            name='email'
            onChange={this.changeHandler}
          />
          <input
            placeholder='password...'
            type='password'
            name='password'
            onChange={this.changeHandler}
          />
          <input type='submit' value='Register' />
        </form>
        <span>
          Already have an account? <Link to='/'>Login here</Link>
        </span>
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { loginUser })(Register)
