import React from 'react'
import { Link } from 'react-router-dom'

export function Header(props) {
  return (
    <nav>
      <h1>Simply Social</h1>
      <div>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/profile'>Profile</Link>
      </div>
    </nav>
  )
}

export function AuthHeader(props) {
  return (
    <nav>
      <h1>Simply Social</h1>
    </nav>
  )
}