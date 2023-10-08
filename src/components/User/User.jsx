import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
const {userId}=useParams();

  return (
    <div className='text-center font-semibold text-xl'>
      UserId:{userId }
    </div>
  )
}

export default User
