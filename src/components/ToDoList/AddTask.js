function AddTask(props){
    return(
        <div>
            <input onChange={props.handleChange} value={props.currTask}></input>
            <button onClick={props.handleClick}>Search</button>
        </div>
    )
}

export default AddTask;