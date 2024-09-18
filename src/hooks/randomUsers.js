// import {useEffect,useState} from  'react'

// function useRandomProfileData (){

//     const [data,setData] = useState()
//     useEffect( ()=> { 
//     const response= fetch('https://api.freeapi.app/api/v1/public/randomusers/user/random')
//         .then((response)=>{
//             const data = response.json()
//             setData(data)

//         })

//     }, [])

//     return data 
// }

// export default useRandomProfileData

import { useEffect, useState } from "react";

function useRandomProfileData(v) {
    const [data, setData] = useState();

    useEffect(() => {
        fetch("https://api.freeapi.app/api/v1/public/randomusers/user/random"
            , {
                method: 'GET', // or 'POST' if you are posting data
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then((response) => response.json())
            .then((response) => setData(response))
    }, [v])
    return data;
}

export default useRandomProfileData;