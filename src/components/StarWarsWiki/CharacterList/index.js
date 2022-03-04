import {useState, useEffect} from "react";
import axios from "axios";
import List from './List';
import Paginate from './Paginate';

function CharacterList(){
    const [characters, setCharacters] = useState([])
    const [currPage, setCurrPage] = useState(1)

    useEffect(()=>{
        console.log("se monto el componente en la pagina", currPage)
        
        axios({
            url: `https://swapi.dev/api/people/?page=${currPage}`
        }).then(result => setCharacters(result.data.results))
        
        return ()=> console.log("se desmonto el componente en la pagina", currPage)
    },[currPage])

    const handleClick = (clickedPage) => {
        setCurrPage(clickedPage)
    }

    return(
        <div>
            <Paginate handleClick={handleClick}/>
            <List characters={characters}/>
        </div>
    )
}

export default CharacterList;