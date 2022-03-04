function TaskList(props){
    return (
        <div>
            <ol>
                {
                    props.taskList.map(
                        function(task, index){
                            return(
                                <li key={index}>{task} <button onClick={()=>props.handleDelete(index)}>Borrar</button></li>    
                            )
                        }
                    )
                }   
                {/* <li>{props.taskList[0]}</li>
                <li>{props.taskList[1]}</li>
                <li>{props.taskList[2]}</li> */}
            </ol>
        </div>
    )
}

export default TaskList;