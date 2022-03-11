import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";


function CharacterPage(){
    const params = useParams();
    const [character, setCharacter] = useState({});

    useEffect(()=>{
        axios({
            url: `https://swapi.dev/api/people/${params.id}`
        }).then((result)=> setCharacter(result.data))
        
    },[])

    return(
        <div style={{margin: "60px", backgroundColor: "#304699"}}>
                <h1> Pagina de {character.name} </h1>
                <ul>
                    <li>Name: {character.name}</li>
                    <li>BirthYear: {character.birth_year}</li>
                    <li>Height: {character.height}</li>
                    <li>Eye Color: {character.eye_color}</li>
                    <li>Hair Color: {character.hair_color}</li>
                </ul>
            </div>
    )
}

export default CharacterPage;