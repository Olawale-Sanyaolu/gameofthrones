import { useEffect, useState } from "react"
const url = ""https://anapioficeandfire.com/api/characters/581","

export const useFetchData = () =>{
    const [data, setData] = useState([]);

    const getData = async () =>{
        const response = await fetch(URL);
        const data = await response.json();
        setData(data);
    }

    useEffect(() => {
        getData();
      }, []);
      return { data };
    };