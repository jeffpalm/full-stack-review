import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { logoutUser, getUser } from '../../redux/reducers/sessionReducer'

class Profile extends Component {
  constructor() {
    super()
    this.state = { mounted: false }
  }

  logout = () => {
    axios.delete('/auth/logout').then(() => {
      this.props.logoutUser()
      this.props.history.push('/')
    })
  }

  componentDidMount() {
    this.props
      .getUser()
      .then(() => this.setState({ mounted: true }))
      .catch(() => {
        this.props.history.push('/')
      })
  }

  render() {
    const { mounted } = this.state
    return (
      <div>
        {mounted ? (
          <div className='profile'>
            <p>Profile Component</p>
            <button onClick={this.logout}>Logout</button>
          </div>
        ) : null}
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { logoutUser, getUser })(Profile)
