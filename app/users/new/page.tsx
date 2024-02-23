'use client';
import { useRouter } from 'next/navigation'
import React, { Suspense } from 'react'

const NewUserPage = () => {
  const router = useRouter()
  return (
    <div>
      <button className='btn btn-primary' onClick={() => router.push('/users')}>Submit</button>
    </div>
  )
}

export default NewUserPage