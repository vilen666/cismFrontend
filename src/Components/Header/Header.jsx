import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./Header.css"
import logo from "../imgs/1.png"
const Header = () => {
  // const [data, setData] = useState("")
  // useEffect(() => {
  //   axios.get('http://localhost:5000')
  //     .then(response => {
  //       setData(response.data);
  //     })
  //     .catch(error => {
  //       console.error('There was an error fetching the data!', error);
  //     });
  // }, []);
  const navs = [
    {
      id: "Home",
      ref: "/",
    },
    {
      id: "Courses",
      ref: "/courses",
    },
    {
      id: "Placement",
      ref: "/placement"
    },
    {
      id: "Campus",
      ref: "/campus"
    }, {
      id: "About",
      ref: "/about",
    },
    {
      id: "Contact",
      ref: "/contact"
    }
  ]
  return (
    <>
      <div className=' header h-[205px]'>
        <div className=' h-fit w-full flex items-center p-3 pb-1'>
          <img src={logo} alt="#" className=' w-[150px] h-[]' />
          <div className=' ml-4'>
            <div className=' text-4xl text-[#19447D] font-semibold leading-[58px] font-[PMingLiU-ExtB]'>Calcutta Institute Of Engineering and Managenment</div>
            <div className=' underline text-md font-[Poppins] font-bold'>24, 1A, Chandi Ghosh Rd, Ashok Nagar, Tollygunge, Kolkata, West Bengal 700040</div>
          </div>
        </div>
        <div className='navigation flex items-center justify-between px-12 font-mono text-lg'>
          <div className=' flex pb-3  gap-3 w-fit h-fit'>
            {
              navs.map((item) => {
                return (
                  <>
                    <a href={item.ref} className='navBut px-3 rounded' key={item.id}>{item.id}</a>
                  </>
                )
              })
            }
          </div>
          <div className='helpLine text-[#85373D]'>Helpline No. :+91 7605027821/26/27/30 </div>
        </div>
      </div>
      <hr className=' border-[2px] ml-1 mr-1 mb-4 border-blue-950' />
    </>
  )
}
export default Header