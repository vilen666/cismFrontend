import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useNavigate } from 'react-router-dom';
import imgCollege from "../home/imgs/3.png"

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/admin/login', { user, password }, { withCredentials: true });
            if (response.data.success) {
                // Handle successful login (e.g., store token, redirect, etc.)
                toast.success(response.data.data);
                navigate("/admin/portal")
            } else {
                toast.error(response.data.data);
                navigate("/admin/portal")
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
            toast.error(error);
            navigate("/admin/portal")

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
                        <input type="submit" className=' w-[50%] bg-blue-600 rounded-full text-xl' value="Login" />
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
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/admin/register', { user, password });
            if (response.data.success) {
                // Handle successful login (e.g., store token, redirect, etc.)
                toast.success(response.data.data);
                navigate("/admin")
            } else {
                toast.error(response.data.data);
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
            toast.error(error);
            navigate("/admin")
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
                        <input type="submit" className=' w-[50%] bg-blue-600 rounded-full text-xl' value="Register" />
                    </form>
                </div>
            </div>
        </>
    )
}
const Portal = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/admin/portal', {
                    withCredentials: true // Include cookies in the request
                });
                if (!response.data.success) {
                    throw new Error(response.data.data);
                }
            } catch (err) {
                toast.error(err.message);
                navigate("/admin");
            }
        };
        fetchData();
    }, []);
    const [elem, setelem] = useState(0);
    return (<>
        <div id="main" className="h-screen w-full flex">
            <div id="sideBar" className=' h-full w-[15%] bg-blue-700 overflow-hidden flex flex-col justify-center gap-12 items-end py-5 '>
                {
                    ["Edit admin", "Edit course",  "Edit Campus"].map((item, key) => {
                        return (
                            <>
                                <div key={key} onClick={() => { setelem(key) }} className='text-2xl text-white font-["Noto_Sans"] hover:shadow-inner shadow shadow-blue-400 p-2 rounded-l-full px-5 cursor-pointer'>{item}</div>
                            </>
                        )
                    })
                }
            </div>
            <div id='content' className='h-full w-[85%] overflow-y-scroll'  >
                {(elem === 0) && <EditAdmin />}
                {(elem === 1) && <EditCourse />}
                {(elem === 2) && <EditCampus />}
            </div>
        </div>
    </>)
}
const EditAdmin = () => {
    const [user, setuser] = useState("username");
    const [pass, setpass] = useState("****************");
    const [oldUser, setoldUser] = useState("");
    const navigate = useNavigate()
    const userInput = useRef('')
    const [isDisabled, setisDisabled] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/admin', {
                    withCredentials: true // Include cookies in the request
                });
                if (response.data.success) {
                    setuser(response.data.data.username)
                    setoldUser(response.data.data.username)
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
            const response = await axios.post('/admin/edit', { oldUser, user, pass }, { withCredentials: true });
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
            <div onSubmit={handleSubmit} className='h-full w-full  font-["Noto_Sans"] p-3 ' style={{ backgroundImage: `url(${imgCollege})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "stretch" }}>
                <form className='w-[400px] h-[450px] mx-auto mt-20 rounded bg-white shadow-lg shadow-slate-400 px-7 items-center justify-center flex flex-col gap-9 text-lg '>
                    <label htmlFor="UserName" className='font-bold underline text-3xl text-[#5959c4]'>UserName</label>
                    <div className='mt-10 flex flex-col gap-2 w-full'>
                        <div className='text-[#5959c4]'>{"Username:"}</div>
                        <input type="text" ref={userInput} required disabled={isDisabled} className='bg-white outline-none border-[2px] border-black  rounded p-2' value={user} onChange={(e) => { setuser(e.target.value) }} />
                    </div>
                    <div className=' flex flex-col gap-2 w-full'>
                        <div className='text-[#5959c4]'>Password:</div>
                        <input type="text" disabled={isDisabled} className='bg-white outline-none border-[2px] border-black rounded p-2' value={pass} onChange={(e) => { setpass(e.target.value) }} />
                    </div>
                    <div className=' flex items-center gap-5 mt-3'>
                        <button className='bg-[#0000b3] text-white rounded w-[100px] cursor-pointer' onClick={(e) => { e.preventDefault(); setisDisabled(!isDisabled); if (!isDisabled) { setpass("******") } else { setpass("") } }}>Edit</button>
                        {!isDisabled && <input className='bg-[#0000b3] text-white rounded w-[100px] cursor-pointer' type="submit" value="update" />}
                    </div>
                </form>
            </div>
        </>
    )
}
const EditCourse = () => {
    const [branches, setbranches] = useState([]);
    const [courses, setcourses] = useState([]);
    const [add, setAdd] = useState(false);
    const [checked, setChecked] = useState(0);
    const [newBranch, setnewBranch] = useState(branches[0]);
    const [file, setFile] = useState(null);
    const [name, setname] = useState("");
    const [inputVisible, setinputVisible] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('branch', newBranch);
        formData.append('image', file); // Assuming 'file' is the state variable for the selected file
        try {
            const response = await axios.post('/admin/courses/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
            if (!response.data.success) {
                throw new Error(response.data.data)
            }
            else {
                window.location.reload()
                toast.success(response.data.data)
            }
        } catch (error) {
            toast.error(error.message)
        }
    };
    const handleFileChange = (event) => {
        setFile(event.target.files[0])
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await axios.get("/admin/courses");
                setbranches(response.data.branches)
                setnewBranch(response.data.branches[0])
                setcourses(response.data.courses)
            }
            catch (err) {
                toast.error(err.message)
            }

        }
        fetchData()
    }, []);
    return (
        <>
            <div className="h-full w-full">
                <div className="w-full h-fit flex justify-end p-2">
                    <div onClick={() => { if (add) { setChecked(-1); setinputVisible(false) } setAdd(prev => (!prev)) }} className=' px-2 cursor-pointer py-1 w-fit rounded bg-blue-800'>+ADD</div>

                </div>
                {add && <>
                    <div className=' w-[90%] mx-auto h-fit bg-white shadow-lg shadow-slate-600 p-9 rounded-lg'>
                        <form onSubmit={handleSubmit} className='w-full text-xl h-full flex flex-col gap-2'>
                            <div className=' text-2xl underline text-blue-600 '>Add New Course</div>
                            <div className='branchOptions items-center flex gap-3 '>
                                <div className=' px-4 rounded bg-blue-600 shadow shadow-blue-500'>Branches:</div>
                                {
                                    branches.map((option, key) => {
                                        return (<>
                                            <label key={key} className='flex items-center gap-1'>
                                                <input type="radio" className=' translate-y-[2px]' onClick={() => { setnewBranch(branches[key]); setChecked(key) }} name="color" value="yellow" checked={(key === checked)} />
                                                <div>{option}</div>
                                            </label>
                                        </>)
                                    })
                                }
                                {(inputVisible || !branches[0]) && <input required className=' text-xl p-1 outline-none border-2 border-black rounded shadow-md shadow-slate-300 ' placeholder='Enter new Branch' type='text' value={newBranch} onChange={(e) => { setnewBranch(e.target.value) }} />}
                                {!inputVisible && branches[0] && <div onClick={() => { if (!inputVisible) { setChecked(-1); setinputVisible(prev => (true)); setnewBranch("") } }} className=' px-2 cursor-pointer py-1 w-fit rounded bg-blue-800'>+ADD </div>}
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className=' px-4 rounded h-fit bg-blue-600 shadow shadow-blue-500' > Course Name:</div>
                                <input type="text" required placeholder="Enter course name" className='text-xl w-[20%] p-1 outline-none border-2 border-black rounded shadow-md shadow-slate-300' name="name" value={name} onChange={(e) => { setname(e.target.value) }} />
                            </div>
                            <div className=' px-4 rounded bg-blue-600 shadow shadow-blue-500 w-fit pr-24'>Image:</div>
                            <div className='w-full h-fit flex justify-center'>
                                <label className=' bg-slate-300 relative overflow-hidden rounded w-[300px] h-[300px] flex items-center justify-center shadow-lg shadow-slate-500 cursor-pointer capitalize '>
                                    {file && <img src={URL.createObjectURL(file)} alt='#' className='w-full h-full absolute top-0 left-0' />}
                                    <div className='underline z-10'>Click To upload</div>
                                    <input type="file" className='hidden' required name="image" onChange={handleFileChange} />
                                </label>

                            </div>
                            <input type="submit" value={"Update"} className=' bg-blue-600 rounded py-4 mt-10 cursor-pointer hover:shadow-inner shadow-slate-400 ' />
                        </form>
                    </div>
                </>}

                {!branches[0] && <div className=' text-3xl mt-24 w-fit mx-auto'>No Data Available</div>} <div className=' w-full h-fit p-5'>
                    {
                        branches.map((branch) => {
                            return (
                                <>
                                    <div>
                                        <p className=' text-3xl font-bold  bg-yellow-100 w-fit mb-3'>{branch}</p>
                                        <hr className=' border-black border-1 mr-[50%] mb-12 rounded-full' />
                                        <div className='w-full grid grid-cols-4 gap-20 mb-10'>
                                            {
                                                courses.filter(course => course.branch === branch).map((course) => {
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
            </div>
        </>
    )
}

const EditCampus = () => {
    const [Name, setName] = useState([]);
    const [optionNum, setoptionNum] = useState(Math.floor(Name.length / 2));
    const [addVisible, setaddVisible] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [newname, setnewName] = useState("");
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
            const response = await axios.post('/admin/campus/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (!response.data.success) {
                throw new Error(response.data.data)
            }
            window.location.reload()
        } catch (error) {
            toast.error(error.message)
        }
    };
    useEffect(() => {
        const fetchNames = async () => {
            try {
                let response = await axios.get('/admin/campus/names')
                if (!response.data.success) {
                    throw new Error(response.data.data)
                }
                setName(response.data.campuses)
            }
            catch (err) {
                toast.error(err.message)
            }
        }
        fetchNames()
    }, []);
    return (
        <>
            <div className=' w-full h-fit p-3'>
                <div className="w-fit h-fit mx-auto">
                    <SliderButton items={Name} optionNum={optionNum} setoptionNum={setoptionNum} />
                </div>
                {Name[optionNum] && <ImageSection name={Name[optionNum]?.name} key={Name[optionNum]?.name} />}
                {!addVisible &&
                    <div onClick={() => { setaddVisible(prev => (!prev)) }} className=' w-fit h-fit px-3 text-3xl  text-white rounded m-5 font-mono bg-blue-500 cursor-pointer'>ADD</div>}
                {addVisible && <>
                    <div className=' w-full min-h-[200px] bg-white rounded p-5 mt-3'>
                        <form onSubmit={handleSubmit} className='text-xl flex items-center justify-center gap-2 text-nowrap'>
                            <input placeholder='Enter Name' type="text" required value={newname} onChange={(e) => { setnewName(e.target.value) }} className=' px-4 outline-none border-2 border-black rounded' />
                            <label className=' bg-blue-500 rounded flex items-center justify-center h-fit text-white px-4 cursor-pointer'>
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
                            <div onClick={() => { setaddVisible(prev => (!prev)); setnewName(""); setSelectedFiles([]) }} className=' w-fit h-fit px-3 text-xl  text-white rounded font-mono bg-blue-500 cursor-pointer'>Cancel</div>
                        </form>
                        <div>{selectedFiles[0]&&<h2 className=' font-bold text-xl'>Selected Files:</h2>}
                            <div className=' flex items-center justify-center g-5 flex-wrap'>
                                {selectedFiles.map((file, index) => (
                                    <img key={index} src={URL.createObjectURL(file)} alt="#"  className=' w-[100px] h-[50px]'/>
                                ))}
                            </div></div>
                    </div>
                </>}
            </div>
        </>
    )
}
const ImageSection = ({ name }) => {
    const [Pictures, setPictures] = useState([]);
    const [newPictures, setnewPictures] = useState([]);
    const handleUpdate = async () => {
        try {
            let formData = new FormData()
            newPictures.forEach(pic => {
                formData.append('newPictures', pic)
            })
            formData.append('pictures', JSON.stringify(Pictures))
            formData.append('name', name)
            let response = await axios.post('/admin/campus/update', formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    withCredentials: true
                })
            if (!response.data.success) {
                throw new Error(response.data.data)
            }
            else {
                window.location.reload()
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    useEffect(() => {
        const fetchPictures = async () => {
            try {
                let response = await axios.get('/admin/campus/' + name)
                if (!response.data.success) {
                    throw new Error(response.data.data)
                }
                setPictures(response.data.pictures)
            }
            catch (err) {
                toast.error(err.message)
            }
        }
        fetchPictures()
    }, [name]);
    return (
        <>
            <div className="w-full min-h-[400px] rounded shadow-inner shadow-white bg-slate-50 p-5 gap-5 flex flex-wrap mt-6 items-center justify-center">
                {Pictures[0] && Pictures.map(pic => (
                    <>
                        <img src={`data:${pic.contentType};base64,${pic.data}`} alt="#" className=' rounded w-[300px] h-[200px] ' />
                    </>
                ))}
                {newPictures[0] && newPictures.map(pic => {
                    return (
                        <>
                            <img src={URL.createObjectURL(pic)} alt="#" className=' rounded w-[300px] h-[200px] ' />
                        </>)
                })}
                <div className='rounded w-[300px] h-[200px] bg-blue-400 text-white text-5xl text-center'>
                    <label className='w-full h-full  cursor-pointer flex items-center justify-center font-mono'>
                        <input type="file" className='hidden' accept='image/*' onChange={(e) => { if (e.target.files[0]) setnewPictures(prev => ([...prev, e.target.files[0]])); }} />
                        <p>ADD</p>
                    </label>
                </div>
            </div>
            {newPictures[0] && <div onClick={handleUpdate} className=' bg-blue-500 w-fit px-3 rounded text-3xl text-white m-5 cursor-pointer'>UPDATE</div>}
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
            <div className='flex items-center w-fit h-fit gap-2 text-nowrap'>
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
const Logout = () => {
    const navigate = useNavigate()
    useEffect(() => {
        function clearSpecificCookie(cookieName) {
            document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            toast.success("You are successfully Logged out")
            navigate("/admin")
        }
        clearSpecificCookie('token');
    }, []);

}
export { Login, Register, Portal, Logout } 