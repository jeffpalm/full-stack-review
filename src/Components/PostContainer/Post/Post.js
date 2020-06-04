import React from 'react'

export default function Post(props) {
  const { email, content, created_at } = props.post,
    created = new Date(created_at),
    now = new Date(),
    dif = Math.floor((now.getTime() - created.getTime())/1000/60)
  
  return (
    <div className='post'>
      <h3 className='post-user'>
        Posted by: {email} {dif} min ago
      </h3>
      <span className='post-datetime'></span>
      <p className='post-content'>{content}</p>
    </div>
  )
}
