import React from 'react'

const HeaderItem = ({name, Icon}) => {
  return (
    <div className='text-white flex items-center gap-3 cursor-pointer text-[15px] font-semibold hover:underline underline-offset-8 mb-2'>
      <Icon/>
      <h1>{name}</h1>
    </div>
  )
}

export default HeaderItem
