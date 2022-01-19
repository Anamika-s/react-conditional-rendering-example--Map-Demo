import React , {Component} from 'react';
export default class App1 extends Component
{ 
    state = {
        users:[
            {id:1, name:"Ajay", marks:90},
            {id:2, name:"Vijay", marks:97},
            {id:3, name:"Deepak", marks:87},
            {id:4, name:"Sagar", marks:86},

        ],
        isLoggedIn:false
    }
    render()
    {  
      const users = this.state.users.map(user=>{
      // return <h1> ID:  </h1>
       console.log(user)
      
        return (
            <div>
            <h1>
             ID: {user.id}  Name : {user.name} Marks {user.marks}
              </h1>
            </div>
              );
            });
        return <div> {users} </div>
        
           
       
         
    }
}
