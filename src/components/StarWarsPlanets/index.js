import {useState, useEffect} from "react"
import "./index.scss"
import Paginate from "../shared/Paginate"
import PlanetCard from "./PlanetCard"
import axios from "axios"
import {useLocation} from 'react-router-dom'

function StarWarsPlanets () {
    const [pages, setPages] = useState(0)
    const [planets, setPlanets] = useState([])
    const location = useLocation()
    useEffect(
        function(){
            axios(
                {
                    url: `https://swapi.dev/api/planets${location.search}`
                }
            ).then(
                function(response){
                    setPlanets(response.data.results)
                    setPages(Math.ceil(response.data.count/10))
                }
            ).catch(
                function(error){
                    console.log(error)
                }
            )
        }
    ,[location.search])

    return (
        <section className="planets-container">
            <h1> Planetas </h1>
            <Paginate pages={pages} category={"planets"}/>
            {
                planets.map(
                    function(planet){
                        return <PlanetCard planet={planet} />
                    }
                )
            }
        </section>
    )
}

export default StarWarsPlanets