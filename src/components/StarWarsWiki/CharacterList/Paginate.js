import {Link} from 'react-router-dom'


function Paginate(props){
    return(
        <ul className="pagination">
            <li className="page-item"><Link className="page-link" to="/starwars?page=1" >1</Link></li>
            <li className="page-item"><Link className="page-link" to="/starwars?page=2" >2</Link></li>
            <li className="page-item"><Link className="page-link" to="/starwars?page=3" >3</Link></li>
            <li className="page-item"><Link className="page-link" to="/starwars?page=4" >4</Link></li>
            <li className="page-item"><Link className="page-link" to="/starwars?page=5" >5</Link></li>
            <li className="page-item"><Link className="page-link" to="/starwars?page=6" >6</Link></li>
            <li className="page-item"><Link className="page-link" to="/starwars?page=7" >7</Link></li>
            <li className="page-item"><Link className="page-link" to="/starwars?page=8" >8</Link></li>
            <li className="page-item"><Link className="page-link" to="/starwars?page=9" >9</Link></li>

        </ul>
    )
}

export default Paginate;