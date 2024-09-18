import { useEffect, useState } from "react";

function useRandomJokeData() {
    const [data, setData] = useState();

    useEffect(() => {
        fetch("https://api.freeapi.app/api/v1/public/randomjokes/joke/random"
            , {
                method: 'GET', // or 'POST' if you are posting data
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then((response) => response.json())
            .then((response) => setData(response))
            
    }, [])
    return data;
}

export default useRandomJokeData;