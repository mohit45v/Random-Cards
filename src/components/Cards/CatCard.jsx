import React from 'react'
import cat from '../../assets/cat1.png'
import useRandomCatData from '../../hooks/randomCat'
import useRandomProfileData from '../../hooks/randomUsers'



function CatCard() {

    const data = useRandomCatData();    
    console.log(data)
    
    return (
        <>
            <div className='bg-catcard h-screen w-auto bg-slate-400 bg-no-repeat bg-cover'>
                <div className='text-4xl font-inter font-bold text-white ml-16 pt-4 '>
                    Cat Around Us
                </div>
                <div className='flex items-center content-center h-[410px] w-[325px] ml-14 mt-28 font-[400]'>
                    <div className='   '>
                        <img src={data?.data?.data[3].image} alt="" className='rounded-md mt-8'/>
                        <div className='bg-white rounded-b-lg pl-3 font-[400] pr-2 font-dm'>
                            <h4 className=' font-[600] text-[28px]  tracking-tighter font-dm'>{data?.data?.data[1].name}</h4>
                            <p className=' text-[14px] font-dm font-[400] tracking-tight '>{data?.data?.data[1].description}</p>
                            <p className='font-[600] text-sm mt-1'>Origin: <span className='font-[400] ml-10'>{data?.data?.data[1].origin}</span> </p>
                            <p className='font-[600] text-sm mt-1 mb-1'>Temperament </p>
                            <span className='bg-slate-200 rounded-full text-sm pl-1  pr-1 hover:bg-purple-300'>{data?.data?.data[1].temperament.split(',')[0].trim()}</span>
                            <span className='bg-slate-200 rounded-full text-sm pl-1  pr-1 ml-2  hover:bg-purple-300'>{data?.data?.data[1].temperament.split(',')[1].trim()}</span>
                            <span className='bg-slate-200 rounded-full text-sm pl-1  pr-1 ml-2  hover:bg-purple-300'>{data?.data?.data[1].temperament.split(',')[2].trim()}</span>
                            <p className='font-[600] text-sm mt-1 pb-4 font-dm'>Life Span <span className='font-[400] ml-6'>15-20 years</span>
                            </p>
                            <a href="" className='text-[14px] text-blue-500'>Learn more</a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CatCard