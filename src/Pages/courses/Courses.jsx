import React from 'react'
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import { useState,useEffect } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
const Courses = () => {
    const [branches, setbranches] = useState(Array(1).fill(null));
    const [courses, setcourses] = useState(Array(1).fill(null));
    // const course=[
    //     {
    //         id:"AICTE",
    //         sub:[
    //             {
    //                 id:"Computer Science Engineering",
    //                 src:require("./imgs/cse.avif"),
    //             },
    //             {
    //                 id:"Civil Engineering ",
    //                 src:require("./imgs/civil.avif"),
    //             },
    //             {
    //                 id:"Electronics And Communication Engineering",
    //                 src:require("./imgs/ece.avif"),
    //             },
    //             {
    //                 id:"Electrical Engineering",
    //                 src:require("./imgs/ee.avif"),
    //             },
    //             {
    //                 id:"Information Technology",
    //                 src:require("./imgs/it.avif"),
    //             },
    //             {
    //                 id:"Masters of Business Administration",
    //                 src:require("./imgs/mba.avif"),
    //             },
    //         ]
    //     },
    //     {
    //         id:"NON-AICTE",
    //         sub:[
    //             {
    //                 id:"Bachelor of Computer Application",
    //                 src:require("./imgs/bca.avif"),
    //             },
    //             {
    //                 id:"BBA Business Analytics",
    //                 src:require("./imgs/ba.avif"),
    //             },
    //             {
    //                 id:"Bachelor of Business Administration",
    //                 src:require("./imgs/bba.avif"),
    //             },
    //             {
    //                 id:"Bachelor of Medical Labaratory Technology",
    //                 src:require("./imgs/bmlt.avif"),
    //             },
    //             {
    //                 id:"B.SC Data Science",
    //                 src:require("./imgs/data.avif"),
    //             }]
    //     }
    // ]
    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await axios.get("https://cismbackend.onrender.com/admin/courses");
                setbranches(response.data.branches || [])
                setcourses(response.data.courses || [])
            }
            catch (err) {
                toast.error(err.message)
            }

        }
        fetchData()
    }, []);
    return (
        <>
            <Header/>
            <div className=' w-full h-fit p-5'>
                {!branches[0] && <div className=' text-3xl mt-24 w-fit mx-auto'>No Data Available</div>}
                {
                    branches[0]&&branches.map((branch) => {
                        return (
                            <>
                                <div>
                                    <p className=' text-3xl font-bold  bg-yellow-100 w-fit mb-3 pr-[200px]'>{branch}</p>
                                    <hr className=' border-black border-1 mr-[50%] mb-12 rounded-full' />
                                    <div className='w-full grid grid-cols-4 gap-20 mb-10'>
                                        {
                                            courses[0] && courses.filter(course => course.branch === branch).map((course) => {
                                                return (
                                                    <>
                                                        <div className='h-[275px] rounded-xl overflow-hidden relative'
                                                            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                                                        >
                                                            <img src={`data:${course.picture.contentType};base64,${course.picture.data}`} alt="#" className=' w-full h-full' />
                                                            <p className='absolute text-xl text-center h-[22%] w-full bottom-0 bg-blue-700 p-2'>{course.name}</p>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                            </>
                        )
                    })
                }
                <hr className=' border-black border-[2px] mx-[45%] mb-12 rounded-full' />

            </div>
            <Footer/>
        </>
    )
}

export default Courses