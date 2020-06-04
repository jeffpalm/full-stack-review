import React, { Component } from 'react'
import PostContainer from '../PostContainer/PostContainer'
import { connect } from 'react-redux'
import { getUser } from '../../redux/reducers/sessionReducer'

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      user: {},
      mounted: false
    }
  }

  componentDidMount() {
    this.props
      .getUser()
      .then(() => {
        this.setState({ mounted: true })
      })
      .catch(() => this.props.history.push('/'))
  }

  render() {
    const { mounted } = this.state
    return (
      <div>
        {mounted ? 
        <PostContainer />
        : null}
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { getUser })(Dashboard)
