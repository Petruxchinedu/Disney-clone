import React, { useState } from 'react'
import logo from "./../assets/Images/disney.png"
import { HiHome } from "react-icons/hi2";
import { HiMagnifyingGlass,HiStar, HiPlayCircle,HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical  } from "react-icons/hi";
import HeaderItem from './HeaderItem';
import Pic from "./../assets/Images/download (6).jpeg"



const Header = () => {
  const [toggle,setToggle]= useState(false)
  
  const pete=[
    {
      name:'HOME',
      icon:HiHome
    },
    {
      name:'SEARCH',
      icon:HiMagnifyingGlass
    },
    {
      name:'WATCH LIST',
      icon:HiPlus
    },
    {
      name:'ORIGINALS',
      icon:HiStar
    },
    {
      name:'MOVIES',
      icon:HiPlayCircle
    },
    {
      name:'SERIES',
      icon:HiTv
    },
  ]
    
  return (
    <div className='flex p-5 items-center justify-between'>
      <div className='flex items-center gap-8'>
      <img src={logo} className="w-[80px] md:w-[110px] object-cover"/>
      <div className='hidden md:flex gap-8'>
        {pete.map((item)=>(
          <HeaderItem name={item.name} Icon={item.icon}/>
        ))}
      </div>
      <div className='flex md:hidden gap-5'>
        {pete.map((item, index)=>index<3&&(
          <HeaderItem name={''} Icon={item.icon}/>
        ))}
      </div>
      <div className='md:hidden gap-8'onClick={()=>setToggle(!toggle)}>
         <HeaderItem name={''} Icon={HiDotsVertical} />
        {toggle ? <div className='absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray-700 px-5 py-3'>
         {pete.map((item, index)=>index>2&&(
          <HeaderItem name={item.name} Icon={item.icon}/>
        ))}
         </div>: null}
      </div>
      </div>
      
    <img src={Pic} alt="office-pic" className='w-[50px] rounded-full ' />
      
    </div>
  )
}

export default Header
