import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./Header.css"
import logo from "../imgs/1.png"
import { useLocation } from "react-router-dom";
import { delay, easeInOut, motion } from "framer-motion"
import { type } from "@testing-library/user-event/dist/type";
const Header = () => {
  const location = useLocation()
  const navs = [
    {
      id: "Home",
      ref: "/",
      isActive: false,
    },
    {
      id: "Courses",
      ref: "/courses",
      isActive: false,
    },
    {
      id: "Placement",
      ref: "/placement",
      isActive: false,
    },
    {
      id: "Campus",
      ref: "/campus",
      isActive: false,
    }, {
      id: "About",
      ref: "/about",
      isActive: false,
    },
    {
      id: "Contact",
      ref: "/contact",
      isActive: false,
    }
  ]
  const [isVisible, setisVisible] = useState(false);
  const menuVar={
    hidden:{
    opacity:1,
    y:0,
  },
visible:{
opacity:0,
y:"-50%",
}}
const closeVar={
  visible:{
  opacity:1,
  y:0,
  maxHeight:100
},
hidden:{
opacity:0,
y:"-50%",
maxHeight:0,
}}
const linkVar={
  hidden:{
    opacity:0,
    y:-30,
    maxHeight:0,
    transition:{
      ease:"easeInOut"
    }
  },
  visible:{
    opacity:1,
    y:0,
    maxHeight:100,
    transition:{
      ease:"easeInOut"
    }
  }
}
const linkUlVar={
  hidden:{
    opacity:0,
    maxHeight:0,
    transition:{
      duration:0.5,
      delay:-1,
      ease:"linear",
      staggerChildren:0.1,
      staggerDirection:-1,
      when:"afterChildren",
    }
  },
  visible:{
    opacity:1,
    maxHeight:500,
    transition:{
      staggerChildren:0.1,
      ease:"linear",
    }
  }
}
  return (
    <>
      <div className="h-fit bg-[#9bd4fa] p-2 pb-0 sticky top-0 z-20 md:bg-[#C8DAE9] w-full mb-3">
        <div className=' header h-fit w-full flex items-center p-3 pb-1 gap-2'>
          <img src={logo} alt="#" className='w-11 md:w-[150px] h-[auto]' />
          <div className='details mb-1'>
            <div className='text-sm leading-tight md:text-4xl text-[#19447D] font-semibold md:leading-[58px] font-[PMingLiU-ExtB] text'>Calcutta Institute Of Engineering and Managenment</div>
            <div className=' text-xs underline md:text-lg font-[Poppins] font-bold text-wrap'>24, 1A, Chandi Ghosh Rd, Ashok Nagar, Tollygunge, Kolkata, West Bengal 700040</div>
        <div className='md:hidden text-xs helpLine text-[#85373D]'>Helpline No. :+91 7605027821/26/27/30 </div>
        </div>
        </div>
        <div className='navigation hidden md:flex items-center justify-between px-12 font-mono text-lg'>
          <div className='flex pb-3  gap-3 w-fit h-fit'>
            {
              navs.map((item, key) => {
                const isActive = (location.pathname === item.ref);
                return (
                  <div key={key}>
                    <a href={item.ref} className={`navBut px-3 rounded ${isActive ? "bg-[#a4c4da]" : ""} py-2`}  >{item.id}</a>
                  </div>
                )
              })
            }
          </div>
          <div className='helpLine text-[#85373D]'>Helpline No. :+91 7605027821/26/27/30 </div>
        </div>
      <motion.div className="mobNav w-full flex flex-col h-auto p-3 md:hidden" initial="hidden" animate={!isVisible?"hidden":"visible"} variants={{
        hidden:{},
        visible:{}
      }}>
        <motion.div className="flex items-center select-none w-fit ml-auto" onTap={()=>{setisVisible(prev=>(!prev))}} variants={menuVar}>
          menu
        <i className="ri-menu-fill text-2xl"></i>
        </motion.div>
        <motion.div className="flex items-center select-none w-fit ml-auto" onTap={()=>{setisVisible(prev=>(!prev))}} variants={closeVar}>
          close
        <i className="ri-close-line text-2xl"></i>
        </motion.div>
        <motion.ul className="flex flex-col items-center gap-1 h-auto" variants={linkUlVar}>
          {navs?.map((item,key)=>{
                const isActive = (location.pathname === item.ref);
                return(
              <motion.li className={`${isActive?"bg-blue-200":""} px-3 w-fit h-auto `} key={key} variants={linkVar}><a href={item.ref}>{item.id}</a></motion.li>
            )
          })}
        </motion.ul>
      </motion.div>
      <hr className=' border-[2px] ml-1 mr-1 border-blue-950' />
      </div>
      </>
  )
}
export default Header