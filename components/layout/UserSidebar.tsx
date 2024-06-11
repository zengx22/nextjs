'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const UserSidebar = () => {
  const menuItem = [
    {
      name: 'Update Profile',
      url: '/me/update',
      icon: 'fas fa-user',
    },
    {
      name: 'Upload Avatar',
      url: '/me/upload_avatar',
      icon: 'fas fa-user-circle',
    },
    {
      name: 'Update Password',
      url: '/me/update_password',
      icon: 'fas fa-lock',
    },
  ]

  const [activeMenuItem, setActivteMenuItem] = useState('menuItem[0].name')

  const handleMenuItemClick = (menuItem: string) => {
    setActivteMenuItem(menuItem)
  }

  return (
    <div className='list-group mt-5 pl-4'>
      {menuItem.map((menuItem, index) => (
        <Link
          key={index}
          href={menuItem.url}
          className={`fw-bold list-group-item list-group-item-action ${
            activeMenuItem === menuItem.url ? 'active' : ''
          }`}
          onClick={() => handleMenuItemClick(menuItem.url)}
          aria-current={activeMenuItem === menuItem.url ? 'true' : 'false'}
        >
          <i className={`${menuItem.icon} fa-fw pe-2`}></i> {menuItem.name}
        </Link>
      ))}
    </div>
  )
}

export default UserSidebar
