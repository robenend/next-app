import React from 'react'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex p-5'>
      <aside className='bg-slate-400 p-5 mr-5'>Admin Sidebar</aside>
      <div>{children}</div>
    </div>
  )
}

export default AdminLayout