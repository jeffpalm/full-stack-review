import React, { Component } from 'react'
import routes from './routes'
import { Header, AuthHeader } from './Components/Header/Header'
import { connect } from 'react-redux'
import { getUser } from './redux/reducers/sessionReducer'
import './reset.css'
import './App.css'

class App extends Component {
  componentDidMount() {
    this.props.getUser()
  }

  render() {
    const { isLoggedIn } = this.props.session
    return (
      <main className='App'>
        {isLoggedIn ? <Header /> : <AuthHeader />}
        <div className='routes'>{routes}</div>
      </main>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { getUser })(App)
