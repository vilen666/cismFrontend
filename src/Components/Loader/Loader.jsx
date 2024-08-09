import React from 'react'
import "./loader.css"
export const Loader = ({loading=false}) => {
    return (
        <>
        {loading&&(<div className=' w-full h-screen absolute bg-[#C8DAE9] flex items-center justify-center z-[1000]'>
            <svg className='circle-svg' viewBox="25 25 50 50">
                <circle className='circle' r="20" cy="50" cx="50"></circle>
            </svg>
        </div>)}
        </>
    )
}
