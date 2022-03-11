import {useState, useEffect} from "react";
import {useLocation} from 'react-router-dom'
import axios from "axios";
import List from './List';
import Paginate from './Paginate';

function CharacterList(){
    const [characters, setCharacters] = useState([])
    const location = useLocation();

    useEffect(()=>{        
        axios({
            url: `https://swapi.dev/api/people/${location.search}`
        }).then(result => setCharacters(result.data.results))
    },[location.search])

    return(
        <div>
            <Paginate/>
            <List characters={characters}/>
        </div>
    )
}

export default CharacterList;