// import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import Timer from './useeffect';
import Appp from './useref';
// import Component1 from './usecontext';


function App() {

  function Car(props) {
    return <h2>I am a {props.brand}!</h2>;
  }

  function Garage() {
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <Car brand="Ford" />
      </>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <div>
      <Garage />
      <Football />
      <Timer />
      <Appp />
      {/* <Component1 /> */}
    </div>
    
  );

  function Football() {
    const shoot = () => {
      alert("Great Shot!");
    }

    return (
      <button onClick={shoot}>Take the shot!</button>
    );
  }

  // const root = ReactDOM.createRoot(document.getElementById('root1'));
  // root1.render(<Football />);

  class Car1 extends React.Component {
    constructor() {
      super();
      this.state = { color: "red" };
    }
    render() {
      return <h2>I am a {this.state.color} Car!</h2>;
    }
  }

  const root2 = ReactDOM.createRoot(document.getElementById('root2'));
  root2.render(<Car1 />);

  const myElement = (
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>
  );
  
  const root3 = ReactDOM.createRoot(document.getElementById('root3'));
  root3.render(myElement);

  function Car2(props) {
    return <h2>I am a { props.brand.model }!</h2>;
  }
  
  function Garage1() {
    const carInfo = { name: "Ford", model: "Mustang" };
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <Car2 brand={ carInfo } />
      </>
    );
  }
  
  const root4 = ReactDOM.createRoot(document.getElementById('root4'));
  root4.render(<Garage1 />);

  function MissedGoal() {
    return <h1>MISSED!</h1>;
  }
  
  function MadeGoal() {
    return <h1>GOAL!</h1>;
  }
  
  function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
      return <MadeGoal/>;
    }
    return <MissedGoal/>;
  }
  
  const root5 = ReactDOM.createRoot(document.getElementById('root5'));
  root5.render(<Goal isGoal={false} />);
  
  function GroceryList() {
    const items = [
      {id: 1, name: 'bread'},
      {id: 2, name: 'milk'},
      {id: 3, name: 'eggs'}
    ];
  
    return (
      <>
        <h1>Grocery List</h1>
        <ul>
          {items.map((item) => <li 
  key
  ={item.id}>{item.name}</li>)}
        </ul>
      </>
    );
  }
  
  const root6 = ReactDOM.createRoot(document.getElementById('root6'));
  root6.render(<GroceryList />);

  function MyForm() {
    const [name, setName] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The name you entered was: ${name}`);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    )
  }
  
  const root7 = ReactDOM.createRoot(document.getElementById('root7'));
  root7.render(<MyForm />);
  const myelement1 = (
    <table>
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
    </table>
  );
  
  const root8=ReactDOM.createRoot(document.getElementById('root8'));
  root8.render(myelement1);

  function FavoriteColor() {
    const [color] = useState("red");
  
    return <h1>My favorite color is {color}!</h1>
  }
  
  const root9 = ReactDOM.createRoot(document.getElementById('root9'));
  root9.render(<FavoriteColor />);



}

export default App;
