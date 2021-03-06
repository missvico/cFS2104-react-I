import {Link} from 'react-router-dom'

function CharacterCard({character}){
    const id = character.url.split("/")[5]
    return (
        <Link to={`/starwars/characters/${id}`}>
            <div style={{margin: "60px", backgroundColor: "#304699"}}>
                <ul>
                    <li>Name: {character.name}</li>
                    <li>BirthYear: {character.birth_year}</li>
                    <li>Height: {character.height}</li>
                    <li>Eye Color: {character.eye_color}</li>
                    <li>Hair Color: {character.hair_color}</li>
                </ul>
            </div>
        </Link>
    )
}

export default CharacterCard