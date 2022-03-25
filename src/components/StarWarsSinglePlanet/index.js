import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import axios from "axios"

function StarWarsSinglePlanet(){
    const [planet, setPlanet] = useState({})

    const params = useParams()

    useEffect(
        function(){
            axios({
                url: `https://swapi.dev/api/planets/${params.id}`
            }).then(
                function(result){
                    setPlanet(result.data)
                }
            )
        }
    ,[])

    return (
      <div class="card" style={{width: "18rem", marginTop: "100px"}}>
        <div class="card-body">
          <h5 class="card-title">Esta es la pagina de {planet.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Climate: {planet.climate}</li>
          <li class="list-group-item">Terrain: {planet.terrain}</li>
          <li class="list-group-item">Population: {planet.population}</li>
        </ul>
      </div>
    );
  }
  
  export default StarWarsSinglePlanet;