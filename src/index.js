// import { ReactComponent } from '*.svg';
// import { render } from '@testing-library/react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// #1
// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       name: 'Andrew',
//       age: 47
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//         <h3><font color="#3AC1EF">{this.state.age} years old</font></h3>
//         {/* <h1>Is state important? {this.state.answer}</h1> */}
//         {/* <Header username="nikita" /> */}
//         {/* <Greeting /> */}
//       </div>
//     )
//   }

// }
// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       isLoggedIn: true
//     }
//   }
//   render() {
//     return (
//       <h1>You are logged {this.state.isLoggedIn ? 'in' : 'out'}</h1>
//     )
//   }

// }
// // #2
// class Header extends React.Component {
//   render() {
//     return (
//       <header>
//         <h1>Welcome, {this.props.username}!</h1>
//       </header>
//     )
//   }

// }

// // #3
// class Greeting extends React.Component {
//   render() {
//     const date = new Date()
//     const hours = date.getHours()
//     let timeOfDay

//     if (hours < 12) {
//       timeOfDay = "morning"
//     } else if (hours >= 12 && hours < 17) {
//       timeOfDay = "afternoon"
//     } else {
//       timeOfDay = "night"
//     }


//     return (
//       <h3> Good { timeOfDay} to you, sir or madam!</h3 >
//     )
//   }

// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
