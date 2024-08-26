import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useNavigate } from 'react-router-dom';
import imgCollege from "../home/imgs/3.png"
import { FlatTree, motion } from "framer-motion"
import { useLoading } from '../..'
const backUrl="https://cismbackend.onrender.com";
// const backUrl="http://localhost:5000"
const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const { setLoading } = useLoading()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(prev => !prev)
            const response = await axios.post(backUrl+'/admin/login', { user, password }, { withCredentials: true });
            setLoading(prev => !prev)
            if (response.data.success) {
                // Handle successful login (e.g., store token, redirect, etc.)
                toast.success(response.data.data);
                navigate("/admin/portal")
            } else {
                throw new Error(response.data.data)
            }
        } catch (err) {
            toast.error(err.message);
        }
    };
    return (
        <>
            <div className=' w-full h-screen flex items-center justify-center'>
                <div id="main" className='p-4 flex flex-col items-center justify-center w-[400px] h-[500px] bg-blue-300 rounded-lg border-[5px] font-[Calibri] border-blue-400 gap-5 ' style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
                    <img src={require("./imgs/1.png")} alt="#" className=' w-[25%] h-[20%]' />
                    <form onSubmit={handleSubmit} className=' w-[80%] h-[70%] p-3 flex flex-col items-center justify-center gap-0 bg-[#D9D9D9] rounded text-lg' style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
                        <label htmlFor="username" className=' w-full text-left font-bold  uppercase'>Username</label>
                        <input type="text" name="username" className='px-2 w-full mb-5 border-2 border-blue-800 rounded' onChange={(e) => setUser(e.target.value)} />
                        <label htmlFor="password" className=' w-full text-left font-bold uppercase'>Password</label>
                        <input type="text" name="password" className='px-2 w-full mb-5 border-2 border-blue-800 rounded' onChange={(e) => setPassword(e.target.value)} />
                        <input type="submit" className=' w-[50%] bg-blue-600 rounded-full text-xl cursor-pointer' value="Login" />
                    </form>
                </div>
            </div>
        </>
    )
}
const Register = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { setLoading } = useLoading()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(prev => !prev)
            const response = await axios.post(backUrl+'/admin/register', { user, password });
            setLoading(prev => !prev)
            if (response.data.success) {
                toast.success(response.data.data);
                navigate("/admin")
            } else {
                throw new Error("")
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
            toast.error(error);
        }
    };
    return (
        <>
            <div className=' w-full h-screen flex items-center justify-center'>
                <div id="main" className='p-4 flex flex-col items-center justify-center w-[400px] h-[500px] bg-blue-300 rounded-lg border-[5px] font-[Calibri] border-blue-400 gap-5 ' style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
                    <img src={require("./imgs/1.png")} alt="#" className=' w-[25%] h-[20%]' />
                    <form onSubmit={handleSubmit} className=' w-[80%] h-[70%] p-3 flex flex-col items-center justify-center gap-0 bg-[#D9D9D9] rounded text-lg' style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
                        <label htmlFor="username" className=' w-full text-left font-bold  uppercase'>Username</label>
                        <input type="text" required name="username" className='px-2 w-full mb-5 border-2 border-blue-800 rounded' onChange={(e) => setUser(e.target.value)} />
                        <label htmlFor="password" className=' w-full text-left font-bold uppercase'>Password</label>
                        <input type="text" required name="password" className='px-2 w-full mb-5 border-2 border-blue-800 rounded' onChange={(e) => setPassword(e.target.value)} />
                        <input type="submit" className=' w-[50%] bg-blue-600 rounded-full text-xl cursor-pointer' value="Register" />
                    </form>
                </div>
            </div>
        </>
    )
}
const Portal = () => {
    const { setLoading } = useLoading()
    const navigate = useNavigate()
    useEffect(() => {
        const checkLogin = async () => {
            try {
                setLoading(prev => !prev)
                const response = await axios.get(backUrl+'/admin/portal', {
                    withCredentials: true // Include cookies in the request
                });
                setLoading(prev => !prev)
                if (!response.data.success) {
                    throw new Error(response.data.data);
                }
            } catch (err) {
                toast.error(err.message);
                navigate("/admin");
            }
        };
        checkLogin();
    }, []);
    const [elem, setelem] = useState(0);
    return (<>
        <div id="main" className="h-screen w-full md:flex block">
            <div id="sideBar" className='text-nowrap h-fit md:h-full w-full sticky top-0 z-[1000] md:w-[15%] bg-[#9bd4fa] overflow-hidden flex md:flex-col justify-center md:gap-12 gap-3 md:items-end py-5 flex-wrap '>
                {
                    ["Edit admin", "Edit course", "Edit Campus"].map((item, key) => {
                        const isActive = (key === elem)
                        return (
                            <div key={key} onClick={() => { setelem(key) }} className={`text-lg md:text-2xl  font-["Noto_Sans"] md:hover:shadow-inner shadow  md:shadow-blue-400 p-2 rounded-full md:rounded-none md:rounded-l-full px-3 w-fit cursor-pointer ${isActive ? "bg-white text-black" : "bg-blue-800 text-white"}`}>{item}</div>

                        )
                    })
                }
            </div>
            <div id='content' className='h-full w-full md:w-[85%] overflow-y-scroll'  >
                {(elem === 0) && <EditAdmin setLoading={setLoading} />}
                {(elem === 1) && <EditCourse setLoading={setLoading} />}
                {(elem === 2) && <EditCampus setLoading={setLoading} />}
            </div>
        </div>
    </>)
}
const EditAdmin = ({ setLoading }) => {
    const [user, setuser] = useState("username");
    const [pass, setpass] = useState("****************");
    const [oldUser, setoldUser] = useState("");
    const navigate = useNavigate()
    const userInput = useRef('')
    const [isDisabled, setisDisabled] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(prev => !prev)
                const response = await axios.get(backUrl+'/admin', {
                    withCredentials: true // Include cookies in the request
                });
                setLoading(prev => !prev)
                if (response.data.success) {
                    setuser(response.data.data.username || "")
                    setoldUser(response.data.data.username || "")
                }
                else {
                    throw new Error(response.data.data)
                }
            }
            catch (err) {
                toast.error(err.message)
            }
        }
        fetchData()
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(prev => !prev)
            const response = await axios.post(backUrl+'/admin/edit', { oldUser, user, pass }, { withCredentials: true });
            setLoading(prev => !prev)
            if (response.data.success) {
                toast.success(response.data.data);
                navigate("/admin/logout")
            } else {
                throw new Error(response.data.data);
            }
        } catch (err) {
            toast.error(err.message);
        }
    };
    return (
        <>
            <div className='h-full w-full  font-["Noto_Sans"] p-3 ' style={{ backgroundImage: `url(${imgCollege})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "stretch" }}>
                <div onClick={() => { navigate(("/admin/logout")) }} className=' text-lg md:text-2xl bg-blue-600 px-3 py-1 rounded w-fit mr-2 ml-auto mt-3 cursor-pointer text-white'>Logout</div>
                <form onSubmit={handleSubmit} className='w-[90%] md:w-[400px] h-[450px] mx-auto mt-20 rounded bg-white shadow-lg shadow-slate-400 px-7 items-center justify-center flex flex-col gap-9 text-lg '>
                    <label htmlFor="UserName" className='font-bold underline text-3xl text-[#5959c4]'>User Edit</label>
                    <div className='mt-10 flex flex-col gap-2 w-full'>
                        <div className='text-[#5959c4]'>{"Username:"}</div>
                        <input type="text" ref={userInput} required disabled={isDisabled} className='bg-white outline-none border-[2px] border-black  rounded p-2' value={user} onChange={(e) => { setuser(e.target.value) }} />
                    </div>
                    <div className=' flex flex-col gap-2 w-full'>
                        <div className='text-[#5959c4]'>Password:</div>
                        <input type="text" disabled={isDisabled} className='bg-white outline-none border-[2px] border-black rounded p-2' value={pass} onChange={(e) => { setpass(e.target.value) }} />
                    </div>
                    <div className=' flex items-center gap-5 mt-3'>
                        <button className='bg-[#0000b3] text-white rounded w-[100px] cursor-pointer' onClick={(e) => { e.preventDefault(); setisDisabled(prev => !prev); if (!isDisabled) { setpass("******") } else { setpass("") } }}>Edit</button>
                        {!isDisabled && <input className='bg-[#0000b3] text-white rounded w-[100px] cursor-pointer' type="submit" value="update" />}
                    </div>
                </form>
            </div>
        </>
    )
}
const EditCourse = ({ setLoading }) => {
    const [branches, setbranches] = useState([]);
    const [courses, setcourses] = useState([]);
    const [add, setAdd] = useState(false);
    const [checkedB, setCheckedB] = useState(0);
    const [newBranch, setnewBranch] = useState("");
    const [file, setFile] = useState(null);
    const [name, setname] = useState("");
    const [inputVisible, setinputVisible] = useState(false);
    const fetchData = async () => {
        try {
            setLoading(prev => !prev)
            let response = await axios.get(backUrl+"/admin/courses");
            setLoading(prev => !prev)
            if (response.data.success) {
                setcourses(response.data.courses || [])
                setbranches(response.data.branches || [])
                setnewBranch(response.data.branches[0] || "")
            }
            else {
                throw new Error(response.data.data)
            }
        }
        catch (err) {
            toast.error(err.message)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('branch', newBranch);
        formData.append('image', file); // Assuming 'file' is the state variable for the selected file
        setAdd(false)
        try {
            const response = await axios.post(backUrl+'/admin/courses/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
            if (!response.data.success) {
                throw new Error(response.data.data)
            }
            else {
                fetchData()
                toast.success(response.data.data)
                setbranches([])
            }
        } catch (error) {
            toast.error(error.message)
        }
    };
    const handleFileChange = (event) => {
        setFile(event.target.files[0])
    };
    useEffect(() => {
        fetchData()
    }, []);
    useEffect(() => {
        setCheckedB(0);
        setname("")
        branches[0] ? setnewBranch(branches[0]) : setnewBranch("")
        setFile(null)
        setinputVisible(false)
    }, [add]);
    return (
        <>
            <div className="h-full w-full">
                <div className="w-full h-fit flex justify-end p-2">
                    <div onClick={() => { setAdd(prev => (!prev)) }} className=' px-2 cursor-pointer py-1 w-fit rounded bg-blue-800'>+ADD</div>
                </div>
                {add && <>
                    <div className=' w-[90%] mx-auto h-fit bg-white shadow-lg shadow-slate-600 p-9 rounded-lg'>
                        <form onSubmit={handleSubmit} className='w-full text-xl h-full flex flex-col gap-2'>
                            <div className=' text-2xl underline text-blue-600 '>Add New Course</div>
                            <div className='branchOptions md:items-center flex flex-col items-start md:flex-row gap-3 '>
                                <div className=' px-4 rounded bg-blue-600 shadow shadow-blue-500'>Branches:</div>
                                {
                                    branches.map((option, key) => {
                                        return (
                                            <label key={key} className='flex items-center gap-1'>
                                                <input type="radio" className=' translate-y-[2px]' onChange={() => { setnewBranch(branches[key]); setCheckedB(key) }} name="color" value="yellow" checked={(key === checkedB)} />
                                                <div>{option}</div>
                                            </label>
                                        )
                                    })
                                }
                                {(inputVisible || !branches[0]) && <input required className='w-full md:w-[20%] text-xl p-1 outline-none border-2 border-black rounded shadow-md shadow-slate-300 ' placeholder='Enter new Branch' type='text' value={newBranch} onChange={(e) => { setnewBranch(e.target.value) }} />}
                                {!inputVisible && branches[0] && <div onClick={() => { if (!inputVisible) { setCheckedB(-1); setinputVisible(prev => (true)); setnewBranch("") } }} className=' px-2 cursor-pointer py-1 w-fit rounded bg-blue-800'>+ADD </div>}
                            </div>
                            <div className="flex flex-col items-start md:flex-row gap-2 md:items-center">
                                <div className=' px-4 rounded h-fit bg-blue-600 shadow shadow-blue-500' > Course Name:</div>
                                <input type="text" required placeholder="Enter course name" className='text-xl w-full md:w-[20%] p-1 outline-none border-2 border-black rounded shadow-md shadow-slate-300' name="name" value={name} onChange={(e) => { setname(e.target.value) }} />
                            </div>
                            <div className=' px-4 rounded bg-blue-600 shadow shadow-blue-500 w-fit pr-24'>Image:</div>
                            <div className='w-full h-fit flex justify-center'>
                                <label className=' bg-slate-300 relative overflow-hidden rounded w-[300px] h-[300px] flex items-center justify-center shadow-lg shadow-slate-500 cursor-pointer capitalize '>
                                    {file && <img src={URL.createObjectURL(file)} alt='#' className='w-full h-full absolute top-0 left-0' />}
                                    <div className='underline z-10'>Click To upload</div>
                                    <input type="file" className='hidden' required accept='image/*' name="image" onChange={handleFileChange} />
                                </label>

                            </div>
                            <input type="submit" value={"Update"} className=' bg-blue-600 rounded py-4 mt-10 cursor-pointer hover:shadow-inner shadow-slate-400 ' />
                        </form>
                    </div>
                </>}
                {!branches[0] && <div className=' text-3xl mt-24 w-fit mx-auto'>No Data Available</div>} <div className=' w-full h-fit p-5'>
                    {
                        branches?.map((branch, key) => {
                            return (

                                <div key={key}>
                                    <p className=' text-3xl font-bold uppercase  bg-yellow-100 w-fit mb-3'>{branch}</p>
                                    <hr className=' border-black border-1 mr-[50%] mb-12 rounded-full' />
                                    <div className='"w-full flex flex-col items-center gap-4" mb-3 md:grid md:grid-cols-3 2xl:grid-cols-4 md:gap-20 md:mb-10'>
                                        {
                                            courses.filter(course => course.branch === branch)?.map((course, index) => {
                                                return (
                                                    <Course key={index} course={course} branch={branch} setLoading={setLoading} fetchData={fetchData} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                    <hr className=' border-black border-[2px] mx-[45%] mb-12 rounded-full' />

                </div>
            </div>
        </>
    )
}

const Course = ({ course, branch, fetchData, setLoading }) => {
    const [editVisible, seteditVisible] = useState(false);
    const [courseName, setcourseName] = useState("");
    const [disable, setdisable] = useState(true);
    const [file, setfile] = useState(null);
    useEffect(() => {
        setcourseName(course.name)
    }, [course]);
    const handleDelete = async () => {
        try {
            setLoading(true)
            const response = await axios.post(backUrl+'/admin/courses/delete', { _id: course._id }, {
                withCredentials: true
            });
            setLoading(false)
            if (response.data.success) {
                toast.success(response.data.data)
                fetchData()
            }
            else {
                throw new Error(response.data.data)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    const handleUpdate = async () => {
        let formdata = new FormData()
        formdata.append("_id", course._id)
        formdata.append("name", courseName)
        formdata.append("branch", branch)
        if (file) formdata.append("image", file)
        try {
            setLoading(true)
            const response = await axios.post(backUrl+'/admin/courses/upload', formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
            setLoading(false)
            if (response.data.success) {
                fetchData()
                toast.success(response.data.data)
                setdisable(true);
                setfile(null)
                seteditVisible(false)
            }
            else {
                throw new Error(response.data.data)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <div className='icon w-full h-fit mb-2'>
            <div className=' cursor-pointer h-[300px] md:h-[275px]  rounded-xl overflow-hidden relative bg-white'
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                onMouseEnter={() => { seteditVisible(true) }}
                onMouseLeave={() => { seteditVisible(false) }}
            >
                <img src={file ? URL.createObjectURL(file) : `data:${course.picture.contentType};base64,${course.picture.data}`} alt="#" className=' w-full h-full' />
                <label className='flex items-center w-full h-full absolute top-0 bg-transparent'>
                    <input type="file" accept='image/*' className=' hidden' disabled={disable} onChange={(e) => { setfile(e.target.files[0]) }} />
                    {(!disable) && <div className=' text-center text-xl w-fit bg-white px-2 rounded mx-auto cursor-pointer'>Click To Upload</div>}
                </label>
                <p className='absolute text-xl text-center min-h-[22%] max-h-fit w-full bottom-0 bg-blue-700 p-2 px-4 flex justify-center items-center'>
                    <input type="text" value={courseName} disabled={disable} onChange={(e) => { setcourseName(e.target.value) }} className={` ${(disable) ? "bg-transparent" : "bg-white"} text-center text-wrap mx-auto min-w-3/4 max-w-[90%]`} />
                </p>
            </div>
            <motion.div className='w-full h-10 -z-10 flex items-baseline gap-4 px-3 text-3xl md:text-xl overflow-hidden' initial="initial" animate={editVisible ? "final" : "initial"}
                variants={{
                    initial: {
                        opacity: 0,
                        y: -50,
                        height: 0,
                    }
                    , final: {
                        height: "auto",
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.3
                        }
                    }
                }}
                onMouseEnter={() => { seteditVisible(true) }}
                onMouseLeave={() => { seteditVisible(false) }}
            >
                <i className="ri-edit-line cursor-pointer" onClick={() => { ; setdisable(prev => !prev) }}></i>
                <i className="ri-delete-bin-fill cursor-pointer text-red-800" onClick={handleDelete}></i>
                {
                    !disable &&
                    <span className='bg-blue-600 text-xl md:text-sm px-2 rounded cursor-pointer' onClick={handleUpdate}>Update</span>}
            </motion.div>
        </div>
    )
}
const EditCampus = ({ setLoading }) => {
    const [Name, setName] = useState([]);
    const [optionNum, setoptionNum] = useState(0);
    const [addVisible, setaddVisible] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [newname, setnewName] = useState("");
    const fetchNames = async () => {
        try {
            let response = await axios.get(backUrl+'/admin/campus/names')
            if (!response.data.success) {
                throw new Error(response.data.data)
            }
            else {
                setName(response.data.campuses || [])
            }
        }
        catch (err) {
            toast.error(err.message)
        }
    }
    const handleFileChange = (event) => {
        const filesArray = Array.from(event.target.files);
        setSelectedFiles(filesArray);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', newname);
        selectedFiles.forEach((file) => {
            formData.append('images', file);
        });

        try {
            setLoading(true)
            const response = await axios.post(backUrl+'/admin/campus/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setLoading(false)
            if (!response.data.success) {
                throw new Error(response.data.data)
            }
            else {
                toast.success(response.data.data)
                fetchNames()
                setName("")
                setSelectedFiles([])
            }
        }
        catch (error) {
            toast.error(error.message)
        }
    };
    useEffect(() => {
        fetchNames()
    }, []);
    useEffect(() => {
        setoptionNum(Math.floor(Name.length / 2))
    }, [Name]);
    return (
        <>
            <div className=' w-full h-fit p-3'>
                {Name[0] ? <div className="w-fit h-fit mx-auto">
                    <SliderButton items={Name} optionNum={optionNum} setoptionNum={setoptionNum} />
                </div> :
                    <div className=' text-2xl text-center'>No Data Available</div>
                }
                {Name[optionNum] && <ImageSection setLoading={setLoading} name={Name[optionNum]} key={Name[optionNum]?.name} fetchNames={fetchNames} />}
                <div onClick={() => { setnewName(""); setSelectedFiles([]); setaddVisible(prev => (!prev)) }} className=' w-fit h-fit px-3 text-3xl  text-white rounded m-5 font-mono bg-blue-500 cursor-pointer'>ADD</div>
                {addVisible && <>
                    <div className=' w-full min-h-[200px] bg-white rounded p-5 mt-3'>
                        <form onSubmit={handleSubmit} className='text-xl flex flex-col md:flex-row items-start md:items-center justify-center gap-2 text-nowrap'>
                            <input placeholder='Enter Name' type="text" required value={newname} onChange={(e) => { setnewName(e.target.value) }} className=' px-4 outline-none border-2 border-black rounded' />
                            <div className=' flex gap-2'><label className=' bg-blue-500 rounded flex items-center justify-center h-fit text-white px-4 cursor-pointer'>
                                Add File
                                <input
                                    type="file"
                                    multiple
                                    onChange={handleFileChange}
                                    accept='image/*'
                                    required
                                    className='hidden'
                                />
                            </label>
                                <button type="submit" className=' w-fit h-fit px-3 text-xl  text-white rounded font-mono bg-blue-500 cursor-pointer'>Upload</button>
                                <div onClick={() => { setaddVisible(prev => (!prev)); setnewName(""); setSelectedFiles([]) }} className=' w-fit h-fit px-3 text-xl  text-white rounded font-mono bg-blue-500 cursor-pointer'>Cancel</div></div>
                        </form>
                        <div>{selectedFiles[0] && <h2 className=' font-bold text-xl'>Selected Files:</h2>}
                            <div className='grid grid-cols-2 md:flex md:items-center md:justify-center g-5 flex-wrap'>
                                {selectedFiles.map((file, index) => (
                                    <img key={index} src={URL.createObjectURL(file)} alt="#" className='w-[200px] h-[100px]' />
                                ))}
                            </div></div>
                    </div>
                </>}
            </div>
        </>
    )
}
const ImageSection = ({ name, setLoading, fetchNames }) => {
    const [Pictures, setPictures] = useState([]);
    const [newPictures, setnewPictures] = useState([]);
    const [newName, setnewName] = useState("");
    const [nameEdit, setnameEdit] = useState(false);
    const [deleteImg, setdeleteImg] = useState([]);
    const fetchPictures = async () => {
        try {
            setLoading(true)
            let response = await axios.get(backUrl+'/admin/campus/' + name.name)
            setLoading(false)
            if (!response.data.success) {
                throw new Error(response.data.data)
            }
            else {
                setPictures(response.data.pictures || [])
            }
        }
        catch (err) {
            toast.error(err.message)
        }
    }
    const handleUpdate = async () => {
        try {
            if (deleteImg[0]) {
                setLoading(true)
                let response = await axios.post(backUrl+'/admin/campus/deleteImg', { _id: name._id,picId:deleteImg },
                    {
                        withCredentials: true
                    })
                setLoading(false)
                if (!response.data.success) {
                    throw new Error(response.data.data)
                }
                else {
                    toast.success(response.data.data)
                }
            }
            if (newPictures[0]) {
                let formData = new FormData()
                newPictures.forEach(pic => {
                    formData.append('newPictures', pic)
                })
                formData.append('pictures', JSON.stringify(Pictures))
                formData.append('name', name)
                setLoading(true)
                let response = await axios.post(backUrl+'/admin/campus/update', formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        },
                        withCredentials: true
                    })
                setLoading(false)
                if (!response.data.success) {
                    throw new Error(response.data.data)
                }
                else {
                    fetchPictures()
                }
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    const handleNameUpdate = async () => {
        try {
            let response = await axios.get(backUrl+'/admin/campus/updateName/' + name.name + "/" + newName, {
                withCredentials: true
            })
            if (response.data.success) {
                toast.success(response.data.data)
                setnameEdit(false)
                fetchNames()
            }
            else {
                throw new Error(response.data.data)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    const deleteCampus = async () => {
        try {
            setLoading(true)
            // let response=""
            let response = await axios.get(backUrl+"/admin/campus/campusDelete/" + name._id, {
                withCredentials: true
            })
            setLoading(false)
            if (response.data.success) {
                toast.success(response.data.data)
                fetchNames()
            }
            else {
                throw new Error(response.data.data)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    useEffect(() => {
        setnewName(name.name)
        fetchPictures()
    }, [name]);
    return (
        <>
            <div className=' text-2xl 2xl:text-3xl bg-yellow-200 w-full md:w-fit px-3 py-2 flex md:items-center items-start flex-col md:flex-row gap-2  mt-2'><input type="text" className='max-w-fit bg-transparent' value={newName} onChange={(e) => { setnewName(e.target.value); setnameEdit(true) }} />
                <div className='flex gap-3'>{nameEdit && <div onClick={handleNameUpdate} className=' bg-blue-500 w-fit px-3 rounded text-xl md:text-2xl text-white cursor-pointer'>UPDATE</div>}<i className="ri-close-circle-fill text-red-600 cursor-pointer" onClick={deleteCampus}></i></div></div>
            <div className="w-full min-h-[400px] rounded shadow-inner shadow-white bg-slate-50 p-5 gap-5 md:flex md:flex-wrap mt-1 md:items-center md:justify-center grid grid-cols-2">
                {Pictures[0] && Pictures.map((pic, key) => (
                    <EachImage key={key} pic={pic} name={name} setdeleteImg={setdeleteImg} setPictures={setPictures} />
                ))}
                {newPictures[0] && newPictures.map((pic, key) => {
                    return (
                        <img src={URL.createObjectURL(pic)} alt="#" className=' rounded w-[300px] h-[200px] ' />
                    )
                })}
                <div className='rounded md:w-[300px] md:h-[200px] bg-blue-400 text-white text-5xl text-center'>
                    <label className='w-full h-full  cursor-pointer flex items-center justify-center font-mono'>
                        <input type="file" className='hidden' accept='image/*' onChange={(e) => { if (e.target.files[0]) setnewPictures(prev => ([...prev, e.target.files[0]])); }} />
                        <p>ADD</p>
                    </label>
                </div>
            </div>
            {(newPictures[0] || deleteImg[0]) && <div onClick={handleUpdate} className=' bg-blue-500 w-fit px-3 rounded text-xl md:text-2xl text-white m-5 cursor-pointer'>UPDATE</div>}
        </>
    )
}
const EachImage = ({ pic, setdeleteImg,setPictures }) => {
    const [visible, setVisible] = useState(false);
    const deleteVar = {
        hidden: {
            y: -100,
            opacity: 0,
            maxHeight: 0,
        }
        , visible: {
            opacity: 1,
            y: 0,
            maxHeight: 100
        }
    }
    return (
        <div className='w-fit h-fit relative flex items-center justify-center'>
            <motion.i initial="hidden" animate={visible ? "visible" : "hidden"} variants={deleteVar} className="text-2xl text-red-600 ri-delete-bin-2-fill absolute z-10 cursor-pointer bg-white rounded-full px-2 py-1" onMouseEnter={() => { setVisible(true) }}  onClick={() => { setdeleteImg(prev => [...prev, pic._id]);
                setPictures(prev=>{
                    return(prev.filter(item=>(item._id!==pic._id)))
                })
             }}></motion.i>
            <img src={`data:${pic.contentType};base64,${pic.data}`} alt="#" className=' rounded w-[300px] h-[200px]' onMouseEnter={() => { setVisible(true) }} onMouseLeave={() => { setVisible(false) }} />
        </div>
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
            <div className='flex items-center w-fit h-fit gap-2 text-nowrap'>
                <button onClick={handleLeft} className='leftBut'><i className="ri-arrow-left-s-line"></i></button>
                <div className=' w-fit h-fit bg-white flex gap-1 items-center overflow-hidden rounded p-2'>
                    {items.map((option, key) => {
                        return (
                            <div onClick={() => { setoptionNum(key) }} style={{ transition: "1s easeInout" }} key={key} className={` bg-${(key === optionNum) && "blue-400"} px-4 py-2 rounded shadow-inner font-mono font-bold tracking-tighter cursor-pointer  border-black`}>{option.name}</div>
                        )
                    })}
                </div>
                <button onClick={handleRight} className='rightBut'><i className="ri-arrow-right-s-line"></i></button>
            </div>

        </>
    );
}
const Logout = () => {
    const { setLoading } = useLoading()
    const navigate = useNavigate()
    useEffect(() => {
        async function logout() {
            try {
                setLoading(prev => !prev)
                const response = await axios.get(backUrl+'/admin/logout', { withCredentials: true });
                setLoading(prev => !prev)
                navigate("/admin")
                if (response.data.success) {
                    toast.success(response.data.data)
                }
                else {
                    throw new Error(response.data.data)
                }
            } catch (error) {
                toast.error(error.message)
            }
        }
        logout()
    }, []);
    return (<></>)
}
export { Login, Register, Portal, Logout } 