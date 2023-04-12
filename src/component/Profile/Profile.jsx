import React from 'react'
import Full_name from './Full_name';
import ProfilePhoto from './ProfilePhoto';
import Address from './Address';
import './Style/Profile.css'

export default function Profile() {
  return (
    <div>
    <div className='profile'>
    <ProfilePhoto></ProfilePhoto>
    <Full_name></Full_name>
    <Address></Address>
    </div>
    </div>
  )
}
