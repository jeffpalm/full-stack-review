import React, { Component } from 'react'


export default class CreatePost extends Component {
  constructor() {
    super()
    this.state = {
      content: ''
    }
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submit = e => {
    e.preventDefault()
    this.props.newPost(this.state.content)
    this.setState({ content: '' })
  }

  render() {
    const { content } = this.state
    return (
      <form className='create-post' onSubmit={this.submit}>
        <input
          type='text'
          name='content'
          placeholder='...write post here'
          onChange={this.changeHandler}
          value={content}
        />
        <input type='submit' value='Post' />
      </form>
    )
  }
}
