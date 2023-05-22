import  { useEffect, useState } from "react";
import API_KEY,{CONTEXT_KEY} from "./Keys";


const useGooogleSearch = (term) => {
    const[data,setDate] = useState(null);
    useEffect(() => {
    const fetchDate = async () => {
        fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`).then((response)=>
        response.json()).then ((result)=>{setDate(result);
        })
    }
    fetchDate();
}, [term])

return {data};
}

export default useGooogleSearch;