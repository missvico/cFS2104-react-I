
function Paginate(props){
    return(
        <div>
            <button onClick={()=> props.handleClick(1)} style={{fontSize: "40px", margin: "10px", backgroundColor: "#ffdf44"}}>1</button>
            <button onClick={()=> props.handleClick(2)} style={{fontSize: "40px", margin: "10px", backgroundColor: "#ffdf44"}}>2</button>
            <button onClick={()=> props.handleClick(3)} style={{fontSize: "40px", margin: "10px", backgroundColor: "#ffdf44"}}>3</button>
            <button onClick={()=> props.handleClick(4)} style={{fontSize: "40px", margin: "10px", backgroundColor: "#ffdf44"}}>4</button>
            <button onClick={()=> props.handleClick(5)} style={{fontSize: "40px", margin: "10px", backgroundColor: "#ffdf44"}}>5</button>
            <button onClick={()=> props.handleClick(6)} style={{fontSize: "40px", margin: "10px", backgroundColor: "#ffdf44"}}>6</button>
            <button onClick={()=> props.handleClick(7)} style={{fontSize: "40px", margin: "10px", backgroundColor: "#ffdf44"}}>7</button>
            <button onClick={()=> props.handleClick(8)} style={{fontSize: "40px", margin: "10px", backgroundColor: "#ffdf44"}}>8</button>
            <button onClick={()=> props.handleClick(9)} style={{fontSize: "40px", margin: "10px", backgroundColor: "#ffdf44"}}>9</button>

        </div>
    )
}

export default Paginate;