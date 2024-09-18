import React, { useState } from 'react'
import useRandomProfileData from '../../hooks/randomUsers'
import image from '../../assets/randomuserbg.png'

function RandomUserCard() {
    const [value, setValue] = useState(0)
    const data = useRandomProfileData(value);
    const bgstyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        height: '100vh',
        backgroundColor : 'black'
    }
    return (
        <>
            
            <div className="flex justify-center items-center h-screen " style={bgstyle}>
                <div className="bg-purple-200 text-gray-800 rounded-xl shadow-lg p-6 w-80">
                    <div className="flex justify-between items-center mb-4">
                        <button className="text-gray-600">&#8592;</button>
                        <h2 className="text-gray-700 font-semibold text-sm">Profile Overview</h2>
                        <button className="text-gray-600"
                        
                        onClick={()=>{
                            setValue(value+1)

                        }}
                        >&#8634;</button>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={data?.data?.picture.large} alt="Profile picture" className="rounded-full mb-3" />
                        <h1 className="text-xl font-bold">{data?.data?.name.first}</h1>
                        <span className="text-sm text-gray-500"></span>
                    </div>
                    <div className="flex justify-around text-gray-600 text-sm my-4">
                        <button className="flex items-center"
                        
                        onClick={()=>{
                            // window.location.href = `https://www.google.com/maps/search?api=1&query=${data?.data?.location.coordinates.latitude +','+ data?.data?.location.coordinates.longitude }`
                            
                            // window.location.href = `https://www.google.com/maps/search/?api=1&query=${data?.data?.location.coordinates.latitude},${data?.data?.location.coordinates.longitude }` 
                            window.open(`https://www.google.com/maps/search/?api=1&query=${data?.data?.location.coordinates.latitude},${data?.data?.location.coordinates.longitude}`, '_blank');

                        }}
                        >
                            <svg classNameName="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h1l1-2h13l1 2h1v7H3v-7z"></path></svg>
                            Location
                        </button>
                        <button className="flex items-center"
                        onClick={()=>{
                            window.location.href = `tel:${data?.data?.phone}`
                        }}
                        >
                            
                            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7 7 7-7"></path></svg>
                            Call me
                        </button>
                    </div>
                    <div className="text-gray-600 text-sm space-y-2">
                        <div className="flex justify-between">
                            <span>City</span>
                            <span className="font-semibold">{data?.data?.location.city}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Nationality</span>
                            <span className="font-semibold">{data?.data?.location.country}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Date of birth</span>
                            <span className="font-semibold">{data?.data?.dob.date.slice(0,-14)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Phone No</span>
                            <span className="font-semibold">{data?.data?.phone}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Time Zone</span>
                            <span className="font-semibold">{data?.data?.location.timezone.offset}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Registered since</span>
                            <span className="font-semibold">{data?.data?.registered.date.slice(0, -14)}</span>
                        </div>
                    </div>
                    <div className="flex justify-center mt-6">
                        <div className="bg-orange-400 w-8 h-8 flex items-center justify-center rounded-full">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )


}

export default RandomUserCard