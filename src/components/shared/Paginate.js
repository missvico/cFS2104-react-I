import {Link} from 'react-router-dom'

function Paginate(props){

    const getNumbers = function (pages){
        const elements = []
        for(let i=1; i<=pages; i++){
            elements.push(<li className="page-item"><Link className="page-link" to={`/starwars/${props.category}?page=${i}`}>{i}</Link></li>)
        }
        return elements
    }

    return(
        <ul className="pagination">
            {
               getNumbers(props.pages) 
            }
        </ul>
    )
}

export default Paginate;