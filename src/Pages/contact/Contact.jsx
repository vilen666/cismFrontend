import React from 'react'
import RequestCall from '../../Components/Request/RequestCall'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

const Contact = () => {
  return (
    <>
    <Header/>
    <div className="w-full h-fit p-4">
      <p className='text-3xl font-bold  tracking-wide'><i className="ri-phone-fill"></i>Request a Call</p>
    <RequestCall/>
    <p className='text-3xl font-bold  tracking-wide'><i className="ri-map-pin-2-fill"></i>Locate Us</p>
    <div className=' w-[60%] h-[350px] mx-auto overflow-hidden flex bg-white p-0'>
      <img src={require("./imgs/map.png")} alt="#" className=' w-[70%] h-full'/>
      <div className='w-[20%] text-xl p-2 py-5 flex flex-col items-center gap-7 justify-center'>
        <p>24, 1A, Chandi Ghosh Rd, Ashok Nagar, Tollygunge, Kolkata, West Bengal 700040</p>
        <a href="#" className=' text-xl underline text-white bg-blue-700 px-4 rounded-full text-nowrap p-3'>Open Google Map</a>
      </div>
    </div>
    </div>
    <hr className=' border-[4px] border-black mx-[45%] rounded-full mt-24'/>
    <Footer/>
    </>
  )
}

export default Contact