import React, { useState, useRef, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import axios from 'axios';
import { toast } from 'react-toastify';
const Campus = () => {
    const [Name, setName] = useState([]);
    const [optionNum, setoptionNum] = useState(0);
    useEffect(() => {
        const fetchNames = async () => {
            try {
                let response = await axios.get('http://localhost:5000/admin/campus/names')
                console.log(response)
                if (!response.data.success) {
                    throw new Error(response.data.data)
                }
                setName(response.data.campuses || [])
                setoptionNum(Math.floor(response.data.campuses.length / 2))
            }
            catch (err) {
                console.log(err)
                toast.error(err.message)
            }
        }
        fetchNames()
    }, []);
    return (
        <>
        <Header/>
        <div className='w-full h-fit'>
            <div className="w-full h-[400px] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${require("./imgs/1.png")})` }}>
                <div className='ml-[10%] w-fit pt-24 '>
                    <p className='text-white text-3xl font-["CantoraOne"] '>Our Campus</p>
                    <p className='text-white text-2xl font-["CantoraOne"] h-3/4 ml-[50px]'>Calcutta Institute of Engineering and <br /> Management offers one of the most <br /> beautiful, robust and high-tech campus <br /> in India. Various facilities are available for <br /> our students in our campus. </p>
                </div>
            </div>
            <div className='w-full  my-8'>
            {Name[0]&&<><SliderButton items={Name} optionNum={optionNum} setoptionNum={setoptionNum} /></>}
            {Name[optionNum] && <ImageSlider name={Name[optionNum]?.name} key={Name[optionNum]?.name} />}
            
        </div>
        </div>
      <hr className=' border-[4px] border-black mx-[45%] rounded-full mt-24'/>
        <Footer/>
        </>
    )
}

function SliderButton({ items, optionNum, setoptionNum }) {
    const handleRight = () => {
        if (optionNum < items.length - 1) {
            setoptionNum(prev => (prev + 1))
        }
        else {
            setoptionNum(0)
        }
    }
    const handleLeft = () => {
        if (optionNum === 0) {
            setoptionNum(items.length - 1)
        }
        else {
            setoptionNum(prev => (prev - 1))
        }
    }
    return (
        <>
            <div className='flex items-center w-fit h-fit gap-2 text-nowrap mx-auto'>
                <button onClick={handleLeft} className='leftBut'><i className="ri-arrow-left-s-line"></i></button>
                <div className=' w-fit h-fit bg-white flex gap-1 items-center overflow-hidden rounded p-2'>
                    {items.map((option, key) => {
                        return (<>
                            <div onClick={() => { setoptionNum(key) }} style={{ transition: "1s easeInout" }} key={key} className={` bg-${(key === optionNum) && "blue-400"} px-4 py-2 rounded shadow-inner font-mono font-bold tracking-tighter cursor-pointer  border-black`}>{option.name}</div>
                        </>)
                    })}
                </div>
                <button onClick={handleRight} className='rightBut'><i className="ri-arrow-right-s-line"></i></button>
            </div>
        </>
    );
}


const ImageSlider = ({ name }) => {
const [Pictures, setPictures] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === Pictures.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? Pictures.length - 1 : prevIndex - 1));
  };
  useEffect(() => {
    const fetchPictures = async () => {
        try {
            let response = await axios.get('https://cismbackend.onrender.comadmin/campus/' + name)
            if (!response.data.success) {
                throw new Error(response.data.data)
            }
            setPictures(response.data.pictures || [])
        }
        catch (err) {
            toast.error(err.message)
            console.log(err.message)
        }
    }
    fetchPictures()
}, [name]);
if(Pictures[0])
{
  return (
    <>
    <div className="w-full h-full flex items-center justify-center mt-5 gap-3">
         <button
          className="text-white text-lg focus:outline-none bg-gray-800 bg-opacity-50 hover:bg-opacity-75 px-3 py-1 rounded-lg"
          onClick={prevSlide}
        >
          Previous
        </button>
      <div className="w-[85%] h-[600px]">
        {Pictures[0]&&<img
          className="w-full h-full object-cover transition-opacity duration-500 ease-in-out  rounded bg-white"
          src={`data:${Pictures[currentImageIndex].contentType};base64,${Pictures[currentImageIndex].data}`}
          alt={`Slide ${currentImageIndex + 1}`}
        />}
       </div>
        <button
          className="text-white text-lg focus:outline-none bg-gray-800 bg-opacity-50 hover:bg-opacity-75 px-3 py-1 rounded-lg"
          onClick={nextSlide}
        >
          Next
        </button>
        </div>
        <div className=' font-bold text-2xl font-mono mx-auto w-fit mt-2'>{currentImageIndex+1} out of {Pictures.length+1}</div>
        </>
  );}
  else{
    return(
        <>
        <div className='W-fit h-fit uppercase font-mono font-bold mx-auto'>NO PIctures available</div>
        </>
    )
  }
};


export default Campus