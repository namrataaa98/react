
//import logo from './logo.svg';
//import './App.css';

//import Reac, {Component} from 'react';

//the enture application is divided into a small logical groups of code, which is known as a component
//components are core building blocks of a React application
//React components have their own structure, methids as well as APIs.
//Class (Stateful) Components, fuctional (stateless) Components [returns jsx]
//JSX (JavaScript XML) : conditional (ternary) expressions, instead of if else condition

// ANCHOR example 1

//import React from 'react';
/*function App() {

  const greeting = "Hello.. I am functional component";
  return <h1>{greeting}</h1>

} 

export default App; //returning function */

//import React, {Component} from 'react';
 /*class App extends Component { //or class App extends 'react'.Component
   render() {
     return (
       <div className="App">
       <h1>Hello.. I am from class</h1>
       </div>
     );
   }
 }

 export default App; */

 //ANCHOR example 2 
 //import React from 'react';

 /*function App() {
   return <HeadLine/>; //returning Headline function within app function 
 }

 function HeadLine() {
   const greeting = 'Hello Function Component';

   return <h1>{greeting}</h1>;

 }

 export default App; // returning app function */

 //ANCHOR example 3 - props
/*import React from 'react';
function App() {
 const greeting = 'example of props'; //assigning text to greeting

 return <HeadLine value = {greeting}/>; //assigning expression to value
}

 function HeadLine (props) { 
 return <h1>{props.value}</h1>;
}

export default App; */

//ANCHOR example 4
/*import React from 'react';

const App = () => {
  
  const greeting = 'Arrow Function';
  return <HeadLine value = {greeting} />;
 // return <Footer value={footer} />;

};

const HeadLine = ({value}) => {
  
  const footer = 'footer test'
  return <div><h1>{value}</h1><Footer value2={footer}/></div>

};

const Footer = ({value2}) => {
  return <div>{value2}</div>;
};
 
//app returns head, head returns foot

export default App; */

//ANCHOR example 5 

/*const App = () => {
  return <Headline />;
}

const Headline = () => {
  const greeting = 'state - example';

  return <h1>{greeting}</h1>
}

export default App; */


//ANCHOR example 6 => useState
/*import React, {useState} from 'react'; //instead of import React from 'react'.

// see example 5, converting to useState in example6 

const App = () => {
  return <Headline />
}
const Headline = () => {
  const [greeting, setGreeting] = useState("hello");

  return <h1>{greeting}</h1>;
};

export default App; */

//ANCHOR example 7 

/*import React, { useState } from 'react';

const App = () => {
  return <Headline />;
};

const Headline = () => {
  const [greeting, setGreeting] = useState("Hello");

  return (
   <div>  
     <h1>{greeting}</h1>
     <input type="text" value={greeting} onChange={event => setGreeting(event.target.value)} />
   </div>

  );
};

export default App; */

//ANCHOR example 8

/*import React, { useState } from 'react';

const App = () => {
  return <Headline />;
}

const Headline = () => {
  const[greeting, setGreeting] = useState("hello");

  const handleChange = event => setGreeting(event.target.value); // assign event to variable "handleChange"
  return (
    <div>
    <h1>{greeting}</h1>
    <input type="text" value={greeting} onChange={handleChange}/>  
    </div>
  );
};

export default App; */

//ANCHOR example 9
/*import React, { useState } from 'react';
const App = () => {
  const[greeting, setGreeting] = useState("Hello");
  const handleChange = event => setGreeting(event.target.value);

  return (
    <Headline headLine ={greeting} onChangeHeadLine={handleChange} />
  );
};

const Headline = ({ headLine, onChangeHeadLine }) => ( 
  <div>
    <h1>{headLine}</h1>
    <input type="text" value={headLine} onChange={onChangeHeadLine} />
  </div>
); 

export default App; */

//notes - class component is stateful compononet, pure component is stateless component. 
//use semicolon for functional components: methods not for class components.

//ANCHOR example 10 - class component
//import React, {Component} from 'react';
/*import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <First/>
        <Second/>
      </div>
    );
  }
}

class First extends React.Component {
  render() {
    return(
      <div>
        <h1>Web Development</h1>
      </div>
    );
  }
}


//note: in react, a class is a component
//function is a stateless component, class is a stateful component 
class Second extends React.Component {
  render() {
    return(
      <div>
        <h2>Mobile Development</h2>
      </div>
    );
  }
}

export default App; */

/*import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
   super(props);
     // Define your state object here
     this.state = {
       name: "Jane Doe"
     }
   }
   render(){
     return <h1>Hello { this.state.name }</h1>;
   }
}

function Test (props) { 
  return <h1>{props.value}</h1>;
} 

export default Greeting; */

//type text in a textbox, upon button click text should apear on the html page

//import React, { useState } from 'react';
//import React from 'react'

//ANCHOR testing button click code
/*import React, { useState } from 'react';

const AddTripButton = props => {
  return <button onClick={props.addTrip}>Show</button>
}

//const handleChange = event => setGreeting(event.target.value);

const App = () => {
  const[greeting, setGreeting] = useState("");
  const handleChange = event => setGreeting(event.target.value);

  return (
    <div><AddTripButton addTrip={handleChange} />
    <Headline headLine ={greeting} onChangeHeadLine={handleChange} /></div>
  );
}; 

const Headline = ({ headLine, onChangeHeadLine }) => ( 
  <div>
    <h1>{headLine}</h1>
    <input type="text" value={headLine} onChange={onChangeHeadLine} />
  </div>
); */

/*const Headline = ({ headLine, onChangeHeadLine }) => ( 
  <div>
    <h1>{headLine}</h1>
    <input type="text" value={headLine} onChange={onChangeHeadLine} />
  </div>
); */

/*const Headline = ({ headLine, onChangeHeadLine }) => ( 
  <div>
    <h1>{headLine}</h1>
    <input type="text" value={headLine} onChange={onChangeHeadLine} />
  </div>
); */



//export default AddTripButton

/*class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isEmptyState: true }
  }

  

  triggerAddTripState = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAddTripState: true
    })
  }

  render() {
    return (
      <div>
        {this.state.isEmptyState && <AddTripButton addTrip={this.triggerAddTripState} />}
  
        
      </div>
    )
  }
} */

//{this.state.isAddTripState && <AnotherComponent />}

import React from 'react';

class App extends React.Component {
  state = {
    /*  Initial State */
    input: "",
    ouputText: ""
  };

  /* handleChange() function to set a new state for input */
  handleChange = event => {
    const value = event.target.value;
    this.setState({
      input: value
    });
  };

  /* handleReverse() function to reverse the input and set that as new state for reversedText */
  handleOutput = event => {
    //event.preventDefault();
    const text = this.state.input;
    this.setState({
      outputText: text
    });
  }; 

  render() {
    return (
      <div>
          <div>
          </div>
          <div>
            <input
              type="text"
              value={this.state.input}
              onChange={this.handleChange}
              placeholder="Enter a text"
            />
          </div>
          <div>
            <button onClick={this.handleOutput}>Click</button>
          </div>
        <p>Output: {this.state.outputText}</p>
      </div>
    );
  }
}

//const 

export default App; 














/* function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */
