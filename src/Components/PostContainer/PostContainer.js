import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post/Post'
import CreatePost from './CreatePost/CreatePost'
import axios from 'axios'

class PostContainer extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      mounted: false
    }
  }

  newPost = content => {
    const { user_id } = this.props.session.user
    axios
      .post('/api/post', { user_id, content })
      .then(() => this.componentDidMount())
  }

  componentDidMount() {
    axios.get('/api/posts').then(res => {
      this.setState({ posts: res.data, mounted: true })
    })
  }

  render() {
    const { posts, mounted } = this.state
    return (
      <div className='posts-cont'>
        {mounted ? <CreatePost newPost={this.newPost} /> : null}
        {mounted ? posts.map(p => <Post key={p.post_id} post={p} />) : null}
      </div>
    )
  }
}

const mapStateToProps = state => state
export default connect(mapStateToProps)(PostContainer)