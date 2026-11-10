import React from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function SecretBooks() {
  const { logout } = useAuth()

  return (
    <div>
      <ul>
        <li>Book 1</li>
        <li>Book 2</li>
        <li>Book 3</li>
      </ul>
      <button onClick={logout}>Log out</button>
    </div>
  )
}
