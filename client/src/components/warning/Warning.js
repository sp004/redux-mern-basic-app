import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/user/userSlice'
import './Warning.css'

const Warning = () => {
  const user = useSelector(selectUser)

  return (
    <div className="warning">
      Deleting account cannot be undone <b>{user.name}</b>! You should confirm your
      password to delete your account.
    </div>
  )
}

export default Warning