import {Link} from "react-router-dom"

function PlanetCard(props) {
    const id = props.planet.url.split("/")[5]
    console.log(id)
  return (
    <div class="card" style={{width: "18rem", margin: "20px"}}>
      <div class="card-body">
       <Link to={`${id}`}> <h5 class="card-title">{props.planet.name}</h5> </Link>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Climate: {props.planet.climate}</li>
        <li class="list-group-item">Terrain: {props.planet.terrain}</li>
        <li class="list-group-item">Population: {props.planet.population}</li>
      </ul>
    </div>
  );
}

export default PlanetCard;