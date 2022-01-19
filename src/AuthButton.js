import React, { Component } from 'react';

//  export default class AuthButton extends Component
//  {
//    render()
//    {
//      return ();
//    }
//  }

const AuthButton = props => 
{ 
  let {isLoggedIn} = true;
   if(isLoggedIn)
   return <button> Login </button>
   else 
   return <button> Logout </button>

};

export default AuthButton;