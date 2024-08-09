import React from 'react'
import "./css/home.css"
import img3 from "./imgs/3.png"
import img2 from "./imgs/2.png"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
const Index = () => {
  return (
    // <div className=' text-3xl'>Hello</div>
    <>
    <Header></Header>
    <div className='h-fit w-full'>
      <Hero />
    </div>
    <Footer></Footer>
    </>
  )
}

const Hero = () => {
  const recruites=[
    {
      id:"amazon",
      src:require("./imgs/8.jpg"),
      ref:"https://www.amazon.in/"
    },
    {
      id:"tcs",
      src:require("./imgs/5.png"),
      ref:"https://www.tcs.com/"
    },
    {
      id:"IBM",
      src:require("./imgs/6.png"),
      ref:"https://www.ibm.com/"
    },
    {
      id:"Wipro",
      src:require("./imgs/7.png"),
      ref:"https://www.wipro.com/"
    }
  ] 
   return (
    <div className=' Hero h-fit md:h-screen w-full '>
      <div className='h-[70vh] md:h-[50%] w-full flex flex-col-reverse md:flex-row items-center md:justify-center p-3 md:gap-[70px] gap-5'>
        <div className='left h-fit md:h-[95%] text-sm md:text-2xl w-[90%] md:w-[40%] 2xl:w-[30%] flex flex-col bg-[#8ea0a02b] rounded text-center items-center'>
          <p className='text-[#85373D] leading-[50px]'>We are NAAC Accredited!</p>
          <p >Open Doors To A Brighter Tomorrow<br></br>With Our World Class Academics</p>
          <p className=' text-sm w-[90%] my-5 mx-auto'>CIEM presents an array of opportunities for students to grow academically well rounded. Starting from excellent courses across diverse domains, expert faculties, best in class infrastructure, here at CIEM we nurture our students into industry ready individuals, equipped with the right skills, to shape a brighter tomorrow.</p>
          <div className=' bg-blue-400 text-white text-xl md:text-3xl mb-2 w-fit p-2 rounded cursor-pointer font-'>Take Admission</div>
        </div>
        <div className='right h-[40%] md:h-[95%] flex flex-col rounded-lg md:w-[40%] w-[90%] relative' style={{backgroundImage:`url(${img3})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
          <img src={img2} alt="#" className='absolute w-[150px] h-[100px] rounded-br-lg bottom-0 right-0 '/>
        </div>
      </div>
      <div className='h-[30vh] md:h-[30%] mx-auto w-[90%] bg-white md:mx-14 md:my-5 relative md:flex md:items-center md:justify-center md:gap-[120px] grid grid-cols-2 p-5 gap-3 rounded shadow-[rgba(0, 0, 0, 0.35) 0px 5px 15px;]'>
        <div className='text-2xl absolute left-10 top-5 text-blue-800'>Top Recruiters</div>
        {
          recruites.map((item,key)=>{
            return(
              <a target='_blank' href={item.ref} className='md:w-[200px] md:h-1/2 w-3/4 h-auto mx-auto mt-4' style={{backgroundImage:`url(${item.src})`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}} key={key}></a>
            )
          })
        }
      </div>
      <hr className=' border-[4px] border-black mx-6 md:mx-[45%] mb-5 rounded-full mt-24'/>
      </div>
  )
}
export default Index