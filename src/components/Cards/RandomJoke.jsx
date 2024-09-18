import React from 'react'
import useRandomJokeData from '../../hooks/randomjokes'
import useRandomProfileData from '../../hooks/randomUsers';
import elon from '../../assets/Elonmusk.png'
import verified from '../../assets/verified.svg'
import comment from '../../assets/comment.svg'
import retweet from '../../assets/retweet.svg'
import like from '../../assets/likes.svg'
import bookmark from '../../assets/bookmark.svg'
import like2 from '../../assets/likes2.svg'
function RandomJoke() {

    const jsdata = useRandomJokeData();
    const data = useRandomProfileData();

    return (
        <>
            <div className='w-full h-screen bg-cover bg-no-repeat rounded-lg  text-white bg-heropattern flex justify-center items-center'
            >
                <div className='w-[524px] h-[290px] rounded-xl bg-black text-white '>
                    <div className='flex items-center gap-5 mt-5 mr-2.5 mb-2.5 ml-6 font-bold  text-base font-inter bg-black '>
                        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.7713 5.63915L1.32133 5.63915M1.32133 5.63915L5.99008 10.3539M1.32133 5.63915L5.99008 0.924416"
                                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>Post</span>
                    </div>
                    <div className='flex items-center mt-4 mr-[10px] mb-[10px] ml-[25px] gap-[7px]'>
                        <img src={elon} alt="" className='h-[45]  w-[45px]  rounded-full ' />
                        <div className='flex flex-col '>
                            <span className='font-bold font-inter
                            text-[14px] '>Elon Musk</span>
                            <img src={verified} alt="" className='h-[14px] w-[14px] absolute top-[340px] left-[650px]' />
                            <span className='font-inter text-[12px] text-gray-400' >@elonmusk</span>
                        </div>
                        <span className='text-gray-500 absolute right-[550px] top-[335px] font-[800] tracking-[-0.5px]' >...</span>
                    </div>
                    <div className=' font-inter text-[14px] mt-5 mr-2.5 mb-4 ml-6 '>
                        <p>Even some of the best AI software engineers in the world don’t realize how advanced Tesla AI has
                            become
                        </p>
                    </div>
                    <div className='text-gray-500 font-inter text-[12px] ml-6 mb-4'>
                        <p>11:18 PM · Jul 30, 2024 · <span style={{ color: 'white' }}>20.5M</span> Views</p>
                    </div>
                    <hr className=' ml-6 mr-6' />
                    <div className='flex justify-around mt-[1%] mb-[1%]'>
                        <div className='flex mt-1' >
                            <span >
                                <img src={comment} alt="" className='h-[11px] w-[11px]' />
                            </span>
                            <span className='font-inter text-gray-500 font-bold text-[10px] mt-[1px] ml-[10%]'>50k</span>
                        </div>
                        <div className='flex mt-1' >
                            <span>
                                <img src={retweet} alt="" className='h-[12px] w-[12px]' />
                            </span>
                            <span className='font-inter text-gray-500 font-bold text-[10px] mt-[1px] ml-[10%]'>
                                50k
                            </span>
                        </div>
                        <div className='flex mt-1' >
                            <span>
                                <img src={like2} alt="" className='h-[14px] w-[14px]' />
                            </span>
                            <span className='font-inter text-gray-500 font-bold text-[10px] mt-[1px] ml-[10%]'>
                                50k
                            </span>
                        </div>
                        <div className='flex mt-1' >
                            <span>
                                <img src={like} alt="" className='h-[12px] w-[12px]' />
                            </span>
                            <span className='font-inter text-gray-500 font-bold text-[10px] mt-[1px] ml-[14%]'>
                                50k
                            </span>
                        </div>
                        <div className='flex mt-1' >
                            <span>
                                <img src={bookmark} alt="" className='h-[12px] w-[12px]' />
                            </span>

                        </div>
                    </div>
                    <hr className=' ml-6 mr-6  ' />
                    <span className=' font-inter text-gray-500 mt-[12%] ml-[39%] text-[13px]' >© chai aur code</span>
                </div>
            </div>

        </>
    );
}

export default RandomJoke   