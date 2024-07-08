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
    <div className=' h-fit w-full'>
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
    <div className=' Hero h-screen w-full '>
      <div className='h-[50%] flex items-center justify-center p-3 gap-[70px]'>
        <div className='left text-2xl  h-[95%] flex flex-col bg-[#8ea0a02b] rounded w-[30%] text-center items-center'>
          <p className='text-[#85373D] leading-[50px]'>We are NAAC Accredited!</p>
          <p >Open Doors To A Brighter Tomorrow<br></br>With Our World Class Academics</p>
          <p className=' text-sm w-[90%] my-5 mx-auto'>CIEM presents an array of opportunities for students to grow academically well rounded. Starting from excellent courses across diverse domains, expert faculties, best in class infrastructure, here at CIEM we nurture our students into industry ready individuals, equipped with the right skills, to shape a brighter tomorrow.</p>
          <div className=' bg-blue-400 text-white text-3xl w-fit p-2 rounded cursor-pointer font-'>Take Admission</div>
        </div>
        <div className='right h-[95%] flex flex-col rounded-lg w-[40%] relative' style={{backgroundImage:`url(${img3})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
          <img src={img2} alt="#" className='absolute w-[150px] h-[100px] rounded-br-lg bottom-0 right-0 '/>
        </div>
      </div>
      <div className='h-[30%] bg-white mx-14 my-5 relative items-center justify-center gap-[120px] flex p-3 rounded shadow-[rgba(0, 0, 0, 0.35) 0px 5px 15px;]'>
        <div className='text-2xl absolute left-10 top-5 text-blue-800'>Top Recruiters</div>
        {
          recruites.map((item)=>{
            return(
              <>
              <a target='_blank' href={item.ref} className=' w-[200px] h-1/2' style={{backgroundImage:`url(${item.src})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}></a>
              </>
            )
          })
        }
      </div>
      <hr className=' border-[4px] border-black mx-[45%] rounded-full mt-24'/>
      </div>
  )
}
export default Index