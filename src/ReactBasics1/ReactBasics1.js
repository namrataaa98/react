//ANCHOR using class.method to display output

//import React from 'react';

//import React, {Component} from 'react';

// class Person extends React.Component{
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

import React from 'react';

 class Person { //in the case of using arrowfunction to return class values, do not use "class extends Component"

      name = 'Max';
      age = "16"

    // printMyName = () => {
    //     return <div><p>{this.name}</p><p>{this.age}</p></div>
      
    // }
    render() {
        return (
            <p>{this.name}</p>
        )
    
        
    }
  
  }

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

//ANCHOR Person function

// import React from 'react';
// const person = ( props ) => {
//     return(
//         <div>
//             <p> I'm {props.name} and I'm {props.age} years old</p>
//             <p>{props.children}</p>

//         </div>
//     )
// };

// export default person;