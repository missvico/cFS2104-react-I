function Button(props){
    return(
        <button onClick={props.handleClick}>
            {props.sign}
        </button>
    )
}

export default Button;