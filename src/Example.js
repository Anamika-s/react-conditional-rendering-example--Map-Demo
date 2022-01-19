 import React from 'react';

//  function Example()
//  {
//    const counter = 2;
//     return(
//  <div>
//    {
//      (counter==5) && 
//      <h1> Hello </h1>
//    }
//  </div>
//     );
     
    
//  }

function Example(props)
{
  if(!props.IsDisplay)
   return null;
   else 
   return <h1> Component is rendered </h1>
}

 export default Example;