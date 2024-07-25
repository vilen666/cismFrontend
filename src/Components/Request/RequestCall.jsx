import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const RequestCall = () => {
  const [name, setname] = useState();
  const [phone, setphone] = useState();
  const [qualifi, setqualifi] = useState();
  const [mark, setmark] = useState();
  const [fullMark, setfullMark] = useState();
  const [choice, setchoice] = useState();
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try {
      let response = await axios.get("https://cismbackend.onrender.com/contact",{text:`Hello I am ${name}. Phone No.: ${phone}, Qualification: ${qualifi}, Marks Obtained: ${mark} out of ${fullMark} and I am Interested in ${choice}`})
      console.log(response.data)
      if(!response.data.success)
      {
        throw new Error(response.data.data)
      }
      toast.success(response.data.data)
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <>
    <div className="w-3/4 h-[400px] rounded bg-[#A4CEFF] mx-auto my-4 shadow-lg shadow-slate-500 flex flex-col p-2 items-center gap-2 ">
    <p className=' text-2xl font-bold'>Request A call</p>
    <form onSubmit={handleSubmit} className=' w-full h-fit p-6 flex flex-col gap-2 text-nowrap text-xl justify-between'>
      <div className='flex gap-2 items-center'>
        <div className='font-bold w-[150px]'>Student Name:</div><input type="text" onChange={(e)=>{setname(e.target.value)}} required value={name} className=' w-1/3 rounded border-2 border-black'/>
      </div>
      <div className='flex gap-2 items-center'>
        <div className='font-bold w-[150px]'>Mobile No.:</div><input type="tel" onChange={(e)=>{setphone(e.target.value)}} required value={phone} className=' w-1/3 rounded border-2 border-black'/>
      </div>
      <div className='flex gap-2 items-center'>
        <div className='font-bold w-[150px]'>Qualification:</div><input type="tel" onChange={(e)=>{setqualifi(e.target.value)}} required value={qualifi} className=' w-1/3 rounded border-2 border-black'/>
      </div>
      <div className='flex gap-2 items-center'>
        <div className='font-bold w-[150px]'>Obtained Mark:</div><input type="tel" onChange={(e)=>{setmark(e.target.value)}} required value={mark} className=' w-1/3 rounded border-2 border-black'/>
        <div className='font-bold'>Out Of:</div><input type="tel" onChange={(e)=>{setfullMark(e.target.value)}} required value={fullMark} className=' w-1/3 rounded border-2 border-black'/>
      </div>
      <div className='flex gap-2 items-center'>
        <div className='font-bold w-[150px]'>Apply for:</div><input type="text" onChange={(e)=>{setchoice(e.target.value)}} required value={choice} className=' w-1/3 rounded border-2 border-black'/>
      </div>
      <input type="submit" value={"submit"} className=' bg-blue-700 px-5 rounded-full w-fit py-2 text-2xl mx-auto uppercase cursor-pointer hover:shadow-md shadow-slate-500'/>
    </form>
    </div>
    </>
  )
}

export default RequestCall