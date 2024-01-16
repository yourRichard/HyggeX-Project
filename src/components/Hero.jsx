import React,{useState} from 'react'
import Arrow from '/arrow-right.svg';
import Home from '/home.svg'
import Sound from '/sound.svg';
import Light from '/light-bult.svg'
import Replay from '/replay.svg'
import LeftArrow from '/left-arrow-blue.svg'
import RightArrow from '/right-arrow-blue.svg'
import Maximize from '/maxi.svg'
import Logo3 from '/logo-3.0.png'
import Logo2 from '/logo-2.svg'
import Plus from '/plus.svg'

import { navLinks } from '../constants';


const Hero = () => {

  const [active, setActive] = useState('Study')
  return (
    <div className='ml-[104px]'>
        <div className='flex items-center text-[18px] font-medium text-[#696671]'>
            <img src={Home} alt="home" />
            <img src={Arrow} alt="arrow" />
            <p>Flashcard</p>
            <img src={Arrow} alt="arrow" />
            <p>Mathematics</p>
            <img src={Arrow} alt="arrow" />
            <p className='font-bold text-[#06286E]'>Relation and Functions</p>
        </div>
        <div className='mt-6 text-[32px] font-[700] text-gradient'>
        Relations and Functions ( Mathematics )
        </div>
        <div className='flex justify-center mt-4'>
        <ul className='list-none hidden sm:flex flex-row gap-10 '>
          {navLinks.map((link)=>(
            <li
            key={link.id}
            className={`${
            active === link.title 
            ? 'text-[#06286E] underline decoration-[#06286E] underline-offset-8'
            :'text-[#696671]'}
            hover:text-[#06286E] font-medium text-[20px] cursor-pointer `}
            onClick={()=>setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        </div>
        <div class="group h-[393px] mt-8 w-[712px] [perspective:1000px] flex mx-auto">
    <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div class="absolute cursor-pointer inset-0 bg-black card-gradient">
        <div className='left-8 mt-4 absolute'>
            <img src={Light} alt="light " />
        </div>
        <div className=' mt-4 absolute right-8'>
            <img src={Sound} alt="light " />
        </div>
        <p className='text-center mt-[10rem] text-[38px] font-bold text-white'>9 + 6 + 7x - 2x - 3</p>
      </div>
      <div class="absolute inset-0 h-full w-full rounded-xl  bg-gradient-to-r from-cyan-500 to-blue-500 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div class="flex min-h-full flex-col items-center justify-center">
          <p className='text-[38px] font-bold text-white'>5x + 15</p>
        </div>
      </div>
    </div>
    </div>
    <div className='flex justify-center gap-[7rem] mt-14'>
        <img src={Replay} alt="replay"  />
        <img src={LeftArrow} alt="leftarrow"  />
        <p className='mt-4 text-[#202B37] text-[24px] font-bold'>01/10</p>
        <img src={RightArrow} alt="rightarrow"  />
        <img src={Maximize} alt="rightarrow"  />

    </div>
    <div className='mt-16 flex justify-between'>
        <div className='flex'>
        <div className='w-[98px] h-[100px] flex justify-center bg-[#ffffff] shadow-2xl rounded-full border border-slate-200'>
            <img src={Logo3} alt="logo3" className='mt-2'  />
        </div>
        <div className='ml-6 mt-6'>
            <p className='text-[#696671] text-[12px] font-bold'>Published by</p>
            <img src={Logo2} alt="logo2" />
        </div>
        </div>
        <div className='flex w-[310px] mr-2'>
            <img src={Plus} alt="plus" />
            <p className='text-gradient mt-8'>Create Flashcard</p>
        </div>
    </div>
    </div>
  )
}

export default Hero