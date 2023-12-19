import React from 'react'
import disney from '../assets/Images/disney.png'
import marvel from '../assets/Images/marvel.png'
import national1G from '../assets/Images/nationalG.png'
import pixar from '../assets/Images/pixar.png'
import starwar from '../assets/Images/starwar.png';

import disneyV from '../assets/videos/disney.mp4'
import marvelV from '../assets/videos/marvel.mp4'
import national1GV from '../assets/videos/national-geographic.mp4'
import pixarV from '../assets/videos/pixar.mp4'
import starwarV from '../assets/videos/star-wars.mp4'
const ProductionHouse = () => {
  const ProductionHouseList = [
    {
      id:1,
      image:disney,
      video:disneyV
    },
    {
      id:2,
      image:marvel,
      video:marvelV
    },
    {
      id:3,
      image:national1G,
      video:national1GV
    },
    {
      id:4,
      image:pixar,
      video:pixarV
    },
    {
      id:5,
      image:starwar,
      video:starwarV
    }
  ]
  return (
    <div className='flex gap-5 p-2 px-5 md:px-16'>
      {ProductionHouseList.map((item)=>(
        <div className='border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-black shadow-gray-800'>
          <video src={item.video} autoPlay loop playsInline className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50 object-cover w-full h-full'/>
          <img src={item.image} className='w-full z-[1]'/>
        </div>
      ))}
    </div>
  )
}

export default ProductionHouse
