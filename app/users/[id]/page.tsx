import { notFound } from 'next/navigation';
import React from 'react'

interface Props {
    params: {id: number;};
}

const UsersPageDetail = ({params: { id }}: Props) => {
  if (id > 10){
    notFound();
  }
  return (
    <div>
      UsersDetailPage { id }
    </div>
  )
}

export default UsersPageDetail
