import React from 'react'
import TodoItem from './TodoItem'
import todosData from './todosData'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })

  }

  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
    return (
      <div className="todo-list" >
        {todoItems}
      </div>
    )
  }
}
// }
// function handleClick() {
//   console.log('I was clicked!');
// }

// function App() {
//   return (
//     <div>
//       <img src="https://www.fillmurray.com/200/100" />
//       <br />
//       <br />
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   )
// }
// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     this.setState(prevState => {
//       return {
//         count: prevState.count + 1
//       }
//     })
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick}>Change!</button>
//       </div>
//     )
//   }
// }
export default App;
