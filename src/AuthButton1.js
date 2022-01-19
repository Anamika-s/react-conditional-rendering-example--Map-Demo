import react from 'react';

const AuthButton1 = props => 
{
  let {isLoggedIn} = props;
   switch(isLoggedIn)
   {
     case true :
       {
        return <button> Login </button>;
        break;
       }
        case false :
          {
            return <button> Logout </button>;
            break;
          }
          default :
          return null;

   }
};

export default AuthButton1;
