
import CharacterCard from './CharacterCard'

function List(props){
    return(
        <ul>
           {
               props.characters.map(
                   function(character, index){
                       return (
                        <li key={index}> 
                            <CharacterCard character={character}/> 
                        </li>)
                   }
               )
           }
        </ul>
    )
}

export default List;