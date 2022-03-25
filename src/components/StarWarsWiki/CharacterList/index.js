import {useState, useEffect} from "react";
import {useLocation} from 'react-router-dom'
import axios from "axios";
import List from './List';
import Paginate from '../../shared/Paginate';

function CharacterList(){
    const [characters, setCharacters] = useState([])
    const location = useLocation();
    const [pages, setPages] = useState(0)

    useEffect(()=>{        
        axios({
            url: `https://swapi.dev/api/people/${location.search}`
        }).then(result => {
            setCharacters(result.data.results)
            setPages(Math.ceil(result.data.count/10))
        })
    },[location.search])

    return(
        <div>
            <Paginate pages={pages} category={"characters"}/>
            <List characters={characters}/>
        </div>
    )
}

export default CharacterList;