import React from 'react'

const Footer = () => {
    const socials=[
        {
            id:"insta",
            src:require("../imgs/insta.png"),
            ref:"#",
        },
        {
            id:"fb",
            src:require("../imgs/fb.png"),
            ref:"#",
        },
        {
            id:"x",
            src:require("../imgs/x.png"),
            ref:"#",
        },
        {
            id:"ldn",
            src:require("../imgs/ldn.png"),
            ref:"#",
        },
    ]
    return (
        <>
            <div className=' h-[350px] w-full flex items-center justify-center'>
                <div className='bg-[#5794F0] rounded h-[85%] w-[90%] flex items-center justify-between'>
                    <img src={require("../imgs/1.png")} alt="#" className='w-[200px] h-[200px]' />
                    <div>
                        <p className=' leading-10 font-semibold'>CAMPUS ADDRESS</p>
                        <p>24/1A Chandi Ghosh Road <br /> Tollygunge, Kolkata - 700040 <br />Phone: +91 6292284177 <br /> Email (AICTE): principal1@ciem.co.in <br /> Email (Non-AICTE): principal@ciem.co.in</p>
                    </div>
                    <div>
                        <p className=' leading-10 font-semibold underline'>QUICK LINKS</p>
                        <p>Admission <br /> Academics: AICTE <br /> Academics: Non-AICTE <br /> Placement <br />Research and Innovation <br /> CIEM Society</p>
                    </div>
                    <div>
                        <p> Mandatory Disclosure <br /> Career <br /> Notices <br /> About Us <br /> Contact Us</p>
                    </div>
                    <div className=' w-[20%] h-full rounded-r bg-slate-200 relative p-3'>
                        <p className=' text-2xl font-mono underline translate-x-1/4 absolute'>Social Media</p>
                        <div className=' grid grid-cols-2 mt-5 p-10 mx-auto'>
                            {
                                socials.map((item)=>{
                                    return(
                                        <a href={item.ref} target='_blank' className='w-[50px] h-[50px] mb-10 ml-4 ' style={{backgroundImage:`url(${item.src})`,backgroundPosition:"center",backgroundSize:"cover"}}></a>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer