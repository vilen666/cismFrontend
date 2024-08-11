import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

const Placement = () => {
    const placementDetails=[{
        id:"placement rate",
        subid:"64%",
    },
    {
        id:"Top Salary",
        subid:"25.4LPA",
    },
    {
        id:"student placed",
        subid:"1500+",
    },
    {
        id:"Recruiters",
        subid:"75+",
    },
]
const records=[{
    id:"2022"
},
{
    id:"2023"
},{
    id:"2024"
}]
  return (
    <>
    <Header/>
    <div className='h-fit w-full'>
        <div className="w-full flex items-center flex-col md:flex-row h-[50vh] bg-[#253186]">
            <div className="w-full h-1/2 md:w-1/2 md:h-full flex flex-col items-start p-2 md:p-16 bg-pink">
                <p className='uppercase text-lg md:text-3xl 2xl:text-4xl font-bold text-white'>Top Students(2025-2026):</p>
                <p className=' text-sm md:text-xl text-white px-16 py-9'>XXXXXXX and YYYYYYYYYY are one of the best student we ever get. We are very proud and also very glad by teaching them.We wish they become more and more successful in their life.</p>
            </div>
            <div className="md:w-[40%] md:h-full justify-center gap-6 w-full h-1/2 flex md:gap-8 items-end">
                <div className=' md:w-[200px] w-[150px] bg-yellow-400 rounded-t-full h-[90%] flex items-start p-6'>
                    <div className='w-full rounded-full h-1/2' style={{backgroundImage:`url(${require("../../Pages/admin/imgs/1.png")})`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                </div>
                <div className=' w-[150px] md:w-[200px] bg-yellow-400 rounded-t-full h-[75%] flex items-start p-6'>
                <div className='w-full rounded-full h-1/2' style={{backgroundImage:`url(${require("../../Pages/admin/imgs/1.png")})`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                </div>
            </div>
            <div className="w-[10%] h-full items-center justify-end hidden md:flex">
                <div className=' w-fit text-xl transform translate-x-16 -rotate-90 bg-yellow-400 p-5 text-nowrap '>Take Admission</div>
            </div>
        </div>
        <div className='h-1/2 w-full'>
        <div className='flex w-full bg-blue-500 justify-between md:px-72'>
            {
                placementDetails.map((item,key)=>{
                    return(
                        <div key={key} className='text-white text-lg md:text-xl flex items-center flex-col'>
                            <p className='leading-tight'>{item.subid}</p>
                            <p>{item.id}</p>
                        </div>
                    )
                })
            }
        </div>
        <div className='w-full h-fit p-3'>
            <h2 className=' text-2xl underline'>Placement Records:</h2>
            <div className='grid grid-cols-2 md:grid-cols-5 2xl:grid-cols-7 gap-2'>
                {
                    records.map((item,key)=>{
                        return(
                            <div key={key} className='w-full flex flex-col gap-2 items-center'>
                                <div className=' w-[150px] h-[150px] border-2 border-black bg-white rounded-full flex items-center justify-center text-2xl'>{item.id}</div>
                                <div className=' bg-white text-xl border border-black rounded px-2'>Download</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Placement