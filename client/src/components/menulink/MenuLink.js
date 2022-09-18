import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/user/userSlice'
import './MenuLink.css'

const MenuLink = ({text}) => {
  const user = useSelector(selectUser)
  
  return (
    <div className="menulink">
      <span className="menuLinkText">{text}</span>
      <span className="menuLinkTextName">
        {text === 'Logout' && `(${user.name})`}
      </span>
    </div>
  )
}

export default MenuLink