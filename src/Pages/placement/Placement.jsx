import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

const Placement = () => {
  return (
    <>
    <Header/>
    <div className='h-fit w-full'>
        <div className="w-full flex items-center h-[400px] bg-[#253186]">
            <div className="w-[50%] h-full flex flex-col p-16">
                <p className='uppercase text-4xl font-bold text-white'>Top Students(2025-2026):</p>
                <p className=' text-xl text-white px-16 py-9'>XXXXXXX and YYYYYYYYYY are one of <br /> the best student we ever get. We are very <br /> proud and also very glad by teaching them. <br /> We wish they become more and more <br /> successful in their life.</p>
            </div>
            <div className="w-[40%] h-full flex gap-8 items-end">
                <div className=' w-[200px] bg-yellow-400 rounded-t-full h-[90%] flex items-start p-6'>
                    <div className='w-full rounded-full h-1/2' style={{backgroundImage:`url(${require("../../Pages/admin/imgs/1.png")})`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                </div>
                <div className=' w-[200px] bg-yellow-400 rounded-t-full h-[75%] flex items-start p-6'>
                <div className='w-full rounded-full h-1/2' style={{backgroundImage:`url(${require("../../Pages/admin/imgs/1.png")})`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                </div>
            </div>
            <div className="w-[10%] h-full flex items-center justify-end">
                <div className=' w-fit text-xl transform translate-x-16 -rotate-90 bg-yellow-400 p-5 text-nowrap '>Take Admission</div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Placement