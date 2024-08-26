import React from 'react'
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import { useState,useEffect } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useLoading } from '../..'
const backUrl="https://cismbackend.onrender.com";
const Courses = () => {
    const [branches, setbranches] = useState(Array(1).fill(null));
    const [courses, setcourses] = useState(Array(1).fill(null));
    const {setLoading}=useLoading();
    const fetchData = async () => {
        try {
            setLoading(prev=>!prev)
            let response = await axios.get(backUrl+"/admin/courses");
            setbranches(response.data.branches || [])
            setcourses(response.data.courses || [])
            setLoading(prev=>!prev)
            if(!response.data.success){
                throw new Error(response.data.data)
            }
        }
        catch (err) {
            toast.error(err.message)
        }

    }
    useEffect(() => {
        fetchData()
    }, []);
    return (
        <>
            <Header/>
            <div className=' w-full h-fit p-5'>
                {
                    branches[0]?(branches.map((branch,key) => {
                        return (
                                <div key={key}>
                                    <p className=' text-3xl font-bold  bg-yellow-100 w-fit mb-3 pr-[200px]'>{branch}</p>
                                    <hr className=' border-black border-1 mr-[50%] mb-12 rounded-full' />
                                    <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-20 mb-10'>
                                        {
                                            courses[0] && courses.filter(course => course.branch === branch).map((course,key) => {
                                                return (
                                                        <div key={key} className='h-[175px] md:h-[275px] rounded-xl overflow-hidden relative'
                                                            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                                                        >
                                                            <img src={`data:${course.picture.contentType};base64,${course.picture.data}`} alt="#" className=' w-full h-full' />
                                                            <p className='absolute  text-xl text-center h-fit md:h-[22%] w-full bottom-0 bg-blue-700 px-2 md:p-2'>{course.name}</p>
                                                        </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                        )
                    })):<div className=' text-xl md:text-3xl mt-24 w-fit mx-auto'>No Data Available</div>
                }
                <hr className=' border-black border-[2px] mx-[45%] mb-12 rounded-full' />
            </div>
            <Footer/>
        </>
    )
}

export default Courses