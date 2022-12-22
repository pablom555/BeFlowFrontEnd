import React from 'react'

const Title = ({title}: {title: string}) => {
  return (
    <div className='flex justify-center py-3'>
      <h1 className='text-2xl font-bold text-gray-600'>{title}</h1>
    </div>
  )
}

export default Title