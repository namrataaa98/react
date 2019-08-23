//ANCHOR main
// import React from 'react';
// import './App.css';
// import ReactBasic1 from './ReactBasics1/ReactBasics1';

// class App extends React.Component {
//   state = {
//     persons: [
//       { name: "Max", age: 28 },
//       { name: "Sally", age: 22 },
//       { name: "Leonard", age: 29 }
//     ]
//   }
//   //naming convention consists of "handler" to identify that the method is an event handler
//   //use arrowfunction for this because we want the variable to contain a method as a property
//   //When assigning handler events to buttons; make sure to not add the "()" because we want to only pass a reference not execute the method automatically.
//   //While using the handler function in a class; always use the "this" keyword: e "{this.eventhandler}"
//   switchNameHandler = () => {
//     //console.log("Was clicked!");
//     this.setState({ //component object has a setstate method; which allows us to update the "state" property. Set state takes an object as an argument and merges whatever we define here with our existing state
//     //   persons: [
//     //   { name: "Maximilian", age: 28 },
//     //   { name: "Sally", age: 22 },
//     //   { name: "Leonard", age: 27 }
//     // ] 
   
  
//   })
//   }

// render() {
//   return (
//     <div className="App"> 
//      <h1> Hi i'm react app </h1>
//      <button onClick={this.switchNameHandler}>Switch Name</button> 
//      <ReactBasic1 name={this.state.persons[0].name} age={this.state.persons[0].age} />
//      <ReactBasic1 name={this.state.persons[1].name} age={this.state.persons[1].age} />
//      <ReactBasic1 name={this.state.persons[2].name} age={this.state.persons[2].age} />

//     </div>
    

//   );
// }


// }
    


  

// export default App; 


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
// import React from 'react';

// function App() {
//  const greeting = 'example of props'; //assigning text to greeting

//  return <HeadLine value = {greeting}/>; //assigning expression to value
// }

//  function HeadLine (props) { 
//  return <h1>{props.value}</h1>;
// }

// export default App; 

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

// import React from 'react';

// class Greeting extends React.Component {
//   constructor(props) {
//    super(props);
//      // Define your state object here
//      this.state = {
//        name: "Jane Doe"
//      }
//    }
//    render(){
//      return <h1>Hello { this.state.name }</h1>;
//    }
// }

// // function Test (props) { 
// //   return <h1>{props.value}</h1>;
// // } 

// export default Greeting; 

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

//ANCHOR Display text entered into textbox with button-click  
// import React from 'react';

// class App extends React.Component {
//   state = {
//     /*  Initial State */
//     input: "",
//     ouputText: ""
//   };

//   /* handleChange() function to set a new state for input */
//   handleChange = (event) => {
//     const value = event.target.value;
//     this.setState({
//       input: value
//     });
//   };

//   /* handleReverse() function to reverse the input and set that as new state for reversedText */
//   handleOutput = () => {
//     //event.preventDefault();
//     const text = this.state.input;
//     this.setState({
//       outputText: text
//     });
//   }; 

//   render() {
//     return (
//       <div>
//           <div>
//           </div>
//           <div>
//             <input
//               type="text"
//               value={this.state.input}
//               onChange={this.handleChange}
//               placeholder="Enter a text"
//             />
//           </div>
//           <div>
//             <button onClick={this.handleOutput}>Click</button>
//           </div>
//         <p>Output: {this.state.outputText}</p>
//       </div>
//     );
//   }
// }

// //const 

// export default App; 






//ANCHOR Static root Login

// import React from 'react';

// import ReactDOM from 'react-dom';


// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
//   }
  
//   function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
//   }

// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//       return <UserGreeting />;
//     }
//     return <GuestGreeting />;
//   }
  
//   ReactDOM.render(
//     // Try changing to isLoggedIn={true}:
//     <Greeting isLoggedIn={false} />,
//     document.getElementById('root')
//   );

//   function LoginButton(props) {
//     return (
//       <button onClick={props.onClick}>
//         Login
//       </button>
//     );
//   }
  
//   function LogoutButton(props) {
//     return (
//       <button onClick={props.onClick}>
//         Logout
//       </button>
//     );
//   }

//   class LoginControl extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleLoginClick = this.handleLoginClick.bind(this);
//       this.handleLogoutClick = this.handleLogoutClick.bind(this);
//       this.state = {isLoggedIn: false};
//     }

  
//     handleLoginClick() {
//       this.setState({isLoggedIn: true});
//     }
  
//     handleLogoutClick() {
//       this.setState({isLoggedIn: false});
//     }
  
//     render() {
//       const isLoggedIn = this.state.isLoggedIn;
//       let button;
  
//       if (isLoggedIn) {
//         button = <LogoutButton onClick={this.handleLogoutClick} />;
//       } else {
//         button = <LoginButton onClick={this.handleLoginClick} />;
//       }
  
//       return (
//         <div>
//           <Greeting isLoggedIn={isLoggedIn} />
//           {button}
//         </div>
//       );
//     }
//   }
  
//   ReactDOM.render(
//     <LoginControl />,
//     document.getElementById("root")
//   );

//   export default LoginControl;

//ANCHOR Dynamic Login on button click 

// import React from 'react';

// import ReactDOM from 'react-dom';


// function UserGreeting(props) {
//     return <h1>Welcome back!  </h1>;
//   }
  
//   function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
//   }

// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//       return <div><UserGreeting /> {this.outputText}</div> ;
//     }
//     return <GuestGreeting />;
//   }
  
//   ReactDOM.render(
//     // Try changing to isLoggedIn={true}:
//     <Greeting isLoggedIn={false} />,
//     document.getElementById('root')
//   );

  

//   function LoginButton(props) {
    
//     return (
//       <button onClick={props.onClick}>
//         Login
//       </button>
//     );
//   }
  
//   function LogoutButton(props) {
//     return (
//       <button onClick={props.onClick}>
//         Logout
//       </button>
//     );
//   }

//   class LoginControl extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleOutput = this.handleOutput.bind(this);
//       this.handleLogoutClick = this.handleLogoutClick.bind(this);
//       this.state = {isLoggedIn: false};
//     }

//     state = {
//           /*  Initial State */
//           input: "",
//           ouputText: ""
//         };

//   /* handleChange() function to set a new state for input */
//     handleChange = event => {
//     const value = event.target.value;
//     this.setState({
//       input: value

//      });
//     };

//    /* handleReverse() function to reverse the input and set that as new state for reversedText */
//    handleOutput = event => {
//     //event.preventDefault();
//     const text = this.state.input;
//     this.setState({
//       outputText: text,
//       isLoggedIn: true
      
//     });
//   }; 

  
//     // handleLoginClick() {
//     //   this.setState({isLoggedIn: true});
//     // }
  
//     handleLogoutClick() {
//       this.setState({isLoggedIn: false});
//     }
  
//     render() {
//       const isLoggedIn = this.state.isLoggedIn;
//       let button;
  
//       if (isLoggedIn) {
//         button = <LogoutButton onClick={this.handleLogoutClick} />;
//       } else {
//         button = <LoginButton onClick={this.handleOutput} />;
//       }
  
//       return (
//         <div>
//           <input
//               type="text"
//               value={this.state.input}
//               onChange={this.handleChange}
//               placeholder="Enter userID"
//             />
//           <Greeting isLoggedIn={isLoggedIn} />
         
//           {button}
//         </div>
//       );
//     }
//   }
  
//   ReactDOM.render(
//     <LoginControl />,
//     document.getElementById("root")
//   );

//   export default LoginControl;

//ANCHOR using class.method to display output

//import React from 'react';

// import React, {Component} from 'react';

// class Person extends Component{
//   constructor() {
//     super();
//     this.name = 'Max';

//   }
//   printMyName() {
//     return <p>{this.name}</p>
//   }

// }
// const person = new Person();

// const App = () => {
//   return person.printMyName(); 
// }

// export default App;


//ANCHOR using arrow function in place of constructors

//import React from 'react';

//  class Person { //in the case of using arrowfunction to return class values, do not use "class extends Component"

//       name = 'Max';
//       age = "16"

//     printMyName = () => {
//         return <div><p>{this.name}</p><p>{this.age}</p></div>
      
//     }
  
//   }

//   class Player extends Person {
//       experience = "5 years";
//       position = "A";

//       printPersonInfo = () => {
//         return <p>{this.experience}</p>;
//       }

//   }

//   const player = new Player();
  
//   const App = () => {
//     return <div><p>{player.printPersonInfo()}</p><p>{player.printMyName()}</p></div>; 
//   }

//   //const person = new Person();
//   // const App = () => {
//   //   return person.printMyName(); 
//   // }


// export default App;

//ANCHOR Spread Operator
// Spread operator is used to split up elements or properities from existing arrays and objects and distribute them into a new array or object.

//Spread operator on array 
// import React from 'react'; 

// const numbers = [1,2,3,4];
// const newNumbers = [...numbers, 5];

// const App = () => {
//   return <div>{numbers} {newNumbers}</div>;
//   }

// export default App;

//Spread operator on object 

// const person = {
//   name: "Max"
// }

// const newPerson = {
//   ...person,
//   age: 28
// }

// console.log(newPerson);


//ANCHOR Rest Operator
//Rest operator enables us to input any number of elements into an array for data manipulation(apply methods to each element of the array)

// const App = () => {
// return add(5,6,7,4,5)
// }

// function add(...args) {
//   let result = 0;

//   for (let arg of args) result += arg;

//   return result
// }


// export default App;

//ANCHOR sample code

// import React from 'react';

//  class Person extends React.Component { //in the case of using arrowfunction to return class values, do not use "class extends Component"

//       name = 'Max';
//       age = "16"

//     // printMyName = () => {
//     //     return <div><p>{this.name}</p><p>{this.age}</p></div>
      
//     // }
//     render() {
//         return (
//             <p>{this.name}</p>
//         )
    
        
//     }
  
//   }

//   export default Person;


//ANCHOR reading json file 

//import React from 'react';

//const App = () => {
  //var data = require('C:/Users/namrata.tadiboina/clt6/example1/src/employee2.json');
  //var obj = data[i];
 
//   for (var i = 0; i < data.length; i++)
// {
// 	var obj = data[i];
//  // console.log("Name: " + obj.first_name + ", " + obj.last_name);
//  return(<p>"Name: " + {obj.first_name} + ", " + {obj.last_name}</p>)
 
// }
//}
//var data = require('C:/Users/namrata.tadiboina/clt6/example1/src/employee2.json');

// const dataList = data.map((item, key) =>
//     <li key={item.first_name}>{item.last_name}</li>
//     );



// class App extends React.Component {
  
//   render() {
//     return(
//     {dataList}
//     )
// }
// }

// export default App;

//ANCHOR Json test parse 
//import React from 'react';


// const myjsonstring = 
//   [{
//     "id": 1,
//     "gender": "Female",
//     "first_name": "Helen",
//     "last_name": "Nguyen",
//     "email": "hnguyen0@bloomberg.com",
//     "ip_address": "227.211.25.18"
//   }, {
//     "id": 2,
//     "gender": "Male",
//     "first_name": "Carlos",
//     "last_name": "Fowler",
//     "email": "cfowler1@gnu.org",
//     "ip_address": "214.248.201.11"
//   }]




 // return <p>{myObject.fruit}</p>
 //console.log(myObject.id[0], myObject.id[1]);


//export default App;




//import React, {Component} from 'react';

// const App = () => {
//    fetch('C:/Users/namrata.tadiboina/clt6/example1/src/employee2.json')
//   .then((res) => res.json())
//   .then((data) => {
//     console.log('data:', data);
//   })
  
// return(<App/>)

//   }

//   export default App;

  //import React, { Component } from 'react';
  // import React from 'react';

  // class App extends React.Component {
  //   constructor(props) {
  //     super(props);
  
  //     this.state = {
  //       data: null,
  //     };
  //   }

  //   componentDidMount() {
  //     fetch('C:/Users/namrata.tadiboina/clt6/example1/src/employee2.json')
  //       //.then(response => response.json())
  //       .then((res) => res.json())
  //       .then(data => this.setState({ data }))
  //       .then((data) => {
  //              console.log('data:', data);
  //            });
  //       //.catch(err => alert(err));
  //   }

  //  render() {
  //    return(
  //      <p>{this.state.data}</p>
  //    )
  //  }
  // }
  
  // export default App;

//import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     const greeting = 'Welcome to React';

//     return (
//       <div>
//         <Greeting greeting={greeting} />
//       </div>
//     );
//   }
// }

// const App = () => {
//   return <div><Greeting greeting = {greeting}/></div>
// }

// const greeting = "Welcome to React";

// class Greeting extends Component {
//   render() {
//     return <h1>{this.props.greeting}</h1>;
//   }
// }

// export default App;

//ANCHOR testing props
// import React from 'react';

// const HeadLine = (props) => {
//   return <h1>{props.value} {props.name}</h1>
// }

// const App = () => {
//   return <HeadLine value="test" name="myname"/>;
// }

// export default App;

//ANCHOR testing state

// import React from 'react';

// class Headline extends React.Component{
//   state = {
//     start : "Initial Headline"
//    // final = ""
//   }

//   switchTextHandler = () => {
//     this.setState({
//       start : "Headline after button click"
//     })
//   }
  

//   render(){
//     return (
//       <div><h1>{this.state.start}</h1>
//       <button onClick={this.switchTextHandler}>Next</button></div>
//     )
//   }

// }

// export default Headline;


//ANCHOR Axios test1
// import React from 'react';
// import axios from 'axios';

// class App extends React.Component {

//   state = {
//     showdata : null,
//   }

//   fetchData = () => 
// {
//   axios.get('./employee2.json').then(res => {
//   console.log(res.data)

//   this.setState = {
//     showdata : res.data
//   }
//   })
// }

//    render(){
//      return (
//       <div><p>{this.showdata}</p>
//        <button onClick={this.fetchData}>Show Data</button></div>
//        //<p>{this.state.data[0].first_name}
//      )
//    }
// }

// // function App() {

// //  return <p>{fetchData()}</p>
// // }

// export default App;

//ANCHOR Fetch Sample 2
// import React from 'react';

// class App extends React.Component {
//   state = {
//     isLoading: true,
//     users: [],
//     error: null
//   };

//   fetchUsers() {
//     fetch('./employee2.json')
//       .then(response => response.json())
//       .then(data =>
//         this.setState({
//           users: data,
//           isLoading: false,
//         })
//       )
//       //.catch(error => this.setState({ error, isLoading: false }));
//   }
//   componentDidMount() {
//     this.fetchUsers();
//   }
//   render() {
//     const { isLoading, users, error } = this.state;
//     return (
//       <React.Fragment>
//         <h1>Random User</h1>
//         {error ? <p>{error.message}</p> : null}
//         {!isLoading ? (
//           users.map(user => {
//             const { id, first_name, last_name, email } = user;
//             return (
//               <div key={id}>
//                 <p>First Name: {first_name}</p>
//                 <p>Last Name: {last_name}</p>
//                 <p>Email: {email}</p>
//                 <hr />
//               </div>
//             );
//           })
//         ) : (
//           <h3>Loading...</h3>
//         )}
//       </React.Fragment>
//     );
//   }
// }


// //ReactDOM.render(<App />, document.getElementById("root"));

// export default App;


//Fetch Test 1
// import React from 'react';

// class App extends React.Component {
//   state = {
//    users: [],
//   };

//   fetchUsers = () => {
//     fetch('./employee2.json')
//       .then(response => response.json())
//       .then(data =>
//         this.setState({
//          users: data,
//         })
//       )
//   }

//   componentDidUpdate() { //calls method after the render method
//     this.fetchUsers();
//   }

//   render() {

//    const {users} = this.state;
  
//     return (
//       <React.Fragment>
        
//         <button onClick={this.fetchUsers}>GENERATE</button>

//            {users.map(user => {
//             const { id, first_name, last_name, email } = user;
//             return (
//               <div key={id}>
//                 <p>First Name: {first_name}</p>
//                 <p>Last Name: {last_name}</p>
//                 <p>Email: {email}</p>
//                 <hr />
//               </div>
//             );
//           })}  

//       </React.Fragment>
//     );
//   }
// }

// export default App;


//ANCHOR testing
// import React from 'react';

// class Person extends React.Component {
//   gender = 'male'
//   name = 'sam';

//   printMyName() {
//     return <p>{this.gender} {this.name}</p>
//   }

//   render() {
//     return (
//       <p>{this.printMyName()}</p>
//     )
//   }

// }




// export default Person;

//ANCHOR Add to databse test code 

// /client/App.js
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  // initialize our state
  state = {
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
  };

  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  // never let a process live forever
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  // just a note, here, in the front end, we use the id key of our data object
  // in order to identify which we want to Update or delete.
  // for our back end, we use the object id assigned by MongoDB to modify
  // data base entries

  // our first get method that uses our backend api to
  // fetch data from our data base
  getDataFromDb = () => {
    fetch('http://localhost:3001/api/getData')
      .then((data) => data.json())
      .then((res) => this.setState({ data: res.data }));
  };

  // our put method that uses our backend api
  // to create new query into our data base
  putDataToDB = (message) => {
    let currentIds = this.state.data.map((data) => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post('http://localhost:3001/api/putData', {
      id: idToBeAdded,
      message: message,
    });
  };

  // our delete method that uses our backend api
  // to remove existing database information
  deleteFromDB = (idTodelete) => {
    parseInt(idTodelete);
    let objIdToDelete = null;
    this.state.data.forEach((dat) => {
      if (dat.id == idTodelete) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete('http://localhost:3001/api/deleteData', {
      data: {
        id: objIdToDelete,
      },
    });
  };

  // our update method that uses our backend api
  // to overwrite existing data base information
  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    parseInt(idToUpdate);
    this.state.data.forEach((dat) => {
      if (dat.id == idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post('http://localhost:3001/api/updateData', {
      id: objIdToUpdate,
      update: { message: updateToApply },
    });
  };

  // here is our UI
  // it is easy to understand their functions when you
  // see them render into our screen
  render() {
    const { data } = this.state;
    return (
      <div>
        <ul>
          {data.length <= 0
            ? 'NO DB ENTRIES YET'
            : data.map((dat) => (
                <li style={{ padding: '10px' }} key={data.message}>
                  <span style={{ color: 'gray' }}> id: </span> {dat.id} <br />
                  <span style={{ color: 'gray' }}> data: </span>
                  {dat.message}
                </li>
              ))}
        </ul>
        <div style={{ padding: '10px' }}>
          <input
            type="text"
            onChange={(e) => this.setState({ message: e.target.value })}
            placeholder="add something in the database"
            style={{ width: '200px' }}
          />
          <button onClick={() => this.putDataToDB(this.state.message)}>
            ADD
          </button>
        </div>
        <div style={{ padding: '10px' }}>
          <input
            type="text"
            style={{ width: '200px' }}
            onChange={(e) => this.setState({ idToDelete: e.target.value })}
            placeholder="put id of item to delete here"
          />
          <button onClick={() => this.deleteFromDB(this.state.idToDelete)}>
            DELETE
          </button>
        </div>
        <div style={{ padding: '10px' }}>
          <input
            type="text"
            style={{ width: '200px' }}
            onChange={(e) => this.setState({ idToUpdate: e.target.value })}
            placeholder="id of item to update here"
          />
          <input
            type="text"
            style={{ width: '200px' }}
            onChange={(e) => this.setState({ updateToApply: e.target.value })}
            placeholder="put new value of the item here"
          />
          <button
            onClick={() =>
              this.updateDB(this.state.idToUpdate, this.state.updateToApply)
            }
          >
            UPDATE
          </button>
        </div>
      </div>
    );
  }
}

export default App;







