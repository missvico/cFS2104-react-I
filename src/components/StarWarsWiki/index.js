import CharacterList from './CharacterList';
import './index.css';

function StarWarsWiki (){
    return(
        <section style={{marginTop: "80px"}}>
            <h1>Star Wars Wiki</h1>
            <CharacterList/>
        </section>
    )
}

export default StarWarsWiki;