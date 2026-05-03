import { Component } from "react";
import { nanoid } from "nanoid";

class TaskList extends Component {
  state = {
    inputText: "",
    tasks: [
      {id: 0, text: "Прийти на урок"},
      {id: 1, text: "Зробити уроки"},
      {id: 2, text: "Здати дз"},
    ],
  }
  
  handlerDelete = (taskId)=> {
    this.setState({
        tasks: this.state.tasks.filter(({id}) => id !== taskId)
    })
  }

  handlerInput = (event) => {
    this.setState({
        inputText: event.target.value
    })
  }

  handlerAdd = ()=> {
    if (this.state.inputText === "") {
        return 
    } else {
        const newTask = {id: nanoid(2), text: this.state.inputText}
        this.setState({
            tasks: [...this.state.tasks, newTask],
            inputText: ""
        })
    }
  } 

  render() {
    
    return <>
    <input type="text" value={this.state.inputText} onChange={this.handlerInput}/>
    <button type="button" onClick={this.handlerAdd}>Add</button>
    <ul>
        {this.state.tasks.map(({id, text})=> {
            return (
                <li key={id}>
                    <p>{id}</p>
                    <p>{text}</p>
                    <button type="button" onClick={()=> this.handlerDelete(id)} >Видалити</button>
                </li>
            )
        })}
    </ul>
    </>
  }
}

export default TaskList
