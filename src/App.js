import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import AuthButton from './AuthButton';
import AuthButton1 from './AuthButton1';
import { queryByAttribute } from '@testing-library/react';

//  class App extends Component
//  {
//    constructor(props)
//    {
//      super(props);
//      this.state =
//      {
//        isLoggedIn:true
//      }
//    }
//    render()
//    {
//       let {isLoggedIn} = this.state;
//       const renderAuthButton = () =>
//       {
//           if(isLoggedIn)
//           return <button> Login </button>
//           else 
//           return <button> Logout </button>
//       };
//      return (
//        <div className='App'>
//          <h1> This is demo for conditional rendering </h1>
//          {/* <button> Login </button>
//          <button> Logout</button> */}
//          {renderAuthButton()}
//        </div>
//      );
//    }
//  }

// class App extends Component
// {
//   constructor(props)
//   {
//     super(props);
//     this.state =
//     {
//       isLoggedIn:true
//     }
//   }
//   render()
//   {
//     return (
//       <div className='App'>
//         <h1> This is demo for conditional rendering </h1>
//         {/* <button> Login </button>
//         <button> Logout</button> */}
//         {/* {renderAuthButton()} */}
//         <AuthButton isLoggedIn={this.state.isLoggedIn}/>
//         <AuthButton1 isLoggedIn={this.state.isLoggedIn}/>
//       </div>
//     );
//   }
// }

// class App extends Component
// {
//   constructor(props)
//   {
//     super(props);
//     this.state =
//     {
//       isLoggedIn:false
//     }
//   }
//   render()
//   {
//      let {isLoggedIn} = this.state;
//      let AuthVariable ;
//      if(isLoggedIn)
//      AuthVariable = <button> Login </button>;
//      else 
//      AuthVariable = <button> Logout </button>;
//     return (
//       <div className='App'>
//         <h1> This is demo for conditional rendering </h1>
//         {/* <button> Login </button>
//         <button> Logout</button> */}
//         {/* {renderAuthButton()} */}
//         {/* <AuthButton isLoggedIn={this.state.isLoggedIn}/>
//         <AuthButton1 isLoggedIn={this.state.isLoggedIn}/> */}
//         {AuthVariable}
//       </div>
//     );
//   }
// }


// class App extends Component
// {
//   constructor(props)
//   {
//     super(props);
//     this.state =
//     {
//       isLoggedIn:false
//     }
//   }
//   render()
//   {
//      let {isLoggedIn} = this.state;
//      return (
//       <div className='App'>
//         <h1> This is demo for conditional rendering </h1>
//         {/* <button> Login </button>
//         <button> Logout</button> */}
//         {/* {renderAuthButton()} */}
//         {/* <AuthButton isLoggedIn={this.state.isLoggedIn}/>
//         <AuthButton1 isLoggedIn={this.state.isLoggedIn}/> */}
//         {/* {AuthVariable} */}
//         {/* {isLoggedIn ? <button> LogOut </button> : <button> Login </button>} */}
//         {isLoggedIn && <button> Logout </button>}
//       </div>
//     );
//   }
// }

// function App()
// {
//   const arr =[10,20,30,40];
//   return(
//    <ul>
//      <li> {arr[0]} </li>
//      <li> {arr[1]} </li>
//      <li> {arr[2]} </li>
//      <li> {arr[3]} </li>
//    </ul>

//   );
// }

function App(props)
{
  //const arr =[10,20,30,40];
  const arr = props.numbers;
  return (
    <ul> 
      {arr.map(num => (
      <li> {num * 100 }</li>
    ))}
  </ul>
  );
  // const newArr = arr.map((num) =>
  // {
  //    return <li> {num * 10 } </li>
  // })
  // return (
  //   <ul> {newArr}
  //   </ul>
  // )

}

export default App;
