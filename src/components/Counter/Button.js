function Button(props){
    return(
        <button className="btn btn-primary" onClick={props.handleClick}>
            {props.sign}
        </button>
    )
}

export default Button;