import React, { Component } from 'react'
import Post from './Post/Post'
import axios from 'axios'

export default class PostContainer extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      mounted: false
    }
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
        {mounted ? posts.map(p => <Post key={p.post_id} post={p} />) : null}
      </div>
    )
  }
}
