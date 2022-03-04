import {useState} from "react";
import AddTask from './AddTask';
import TaskList from './TaskList';

function ToDoList(){
    const [currTask, setCurrTask] = useState("")
    const [taskList, setTaskList] = useState([])

    const handleChange = (event)=>{
        setCurrTask(event.target.value)
    }

    const handleClick = () => {
        setTaskList([...taskList, currTask])
        setCurrTask("")

        // const copyTaskList = taskList.slice()
        // copyTaskList.push(currTask)
        // setTaskList(copyTaskList)
    }

    const handleDelete = (index) =>{
        const filteredList = taskList.filter(function(task,currIndex){
            return currIndex !== index
        })
        setTaskList(filteredList)
    }

    //spread operator

    return(
        <section>
            <h1>To Do List</h1>
            <AddTask handleChange={handleChange} handleClick={handleClick} currTask={currTask}/>
            <TaskList taskList={taskList} handleDelete={handleDelete}/>
        </section>
    )
}

export default ToDoList