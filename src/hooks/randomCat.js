import { useEffect, useState } from "react";

function useRandomCatData() {
    const [data, setData] = useState();
    

    useEffect(() => {
        fetch("https://api.freeapi.app/api/v1/public/cats?page=1&limit=4"
            , {
                method: 'GET', // or 'POST' if you are posting data
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then((response) => response.json())
            .then((response) => {setData(response)    
            })     
                
    }, [])
    return data;
}

export default useRandomCatData;