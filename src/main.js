import React from "react"
import { Character } from "./Character";
import { useFetchData } from "./useFetchData";

export const Main = () => {
    const { data } = useFetchData();
    
    return (
        <div className="character-container">
            {data.map((character, index) => {
                <Character character={character} key={index} />
            ))}
         </div>
    };
};