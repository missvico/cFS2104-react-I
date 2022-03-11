
import {useNavigate} from 'react-router-dom'

function Landing(props){
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate("/")
    }

    return(
        <section>
            <h1>Page Not Found</h1>
            <button onClick={handleClick}>Go To Home</button>
        </section>
    )
}

export default Landing;