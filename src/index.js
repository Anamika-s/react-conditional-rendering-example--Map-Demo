import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Example from './Example';
import App1 from './App1';
function Message(props)
{
  if (props.isLoggedIn)
    return <h1>Welcome User</h1>;
  else
    return <h1>Please Login</h1>;
}


function Login(props)
{
return(
    <button onClick = {props.clickFunc}>
      Login
    </button>
  );
}


function Logout(props)
{
  return(
    <button onClick = {props.clickFunc}>
      Logout
    </button>
  );
}


class Homepage extends React.Component{

  constructor(props)
  {
    super(props);

    this.state = {isLoggedIn : false};

    this.ifLoginClicked = this.ifLoginClicked.bind(this);
    this.ifLogoutClicked = this.ifLogoutClicked.bind(this);
  }

  ifLoginClicked()
  {
    this.setState({isLoggedIn : true});
  }

  ifLogoutClicked()
  {
    this.setState({isLoggedIn : false});
  }

  render(){

    return(

      <div>

        <Message isLoggedIn = {this.state.isLoggedIn}/>
        
        {
          (this.state.isLoggedIn)?(
          <Logout clickFunc = {this.ifLogoutClicked} />
          ) : (
          <Login clickFunc = {this.ifLoginClicked} />
          )
        }

      </div>
        
      );
  }
}

const arr =[11,12,13,14,5];
ReactDOM.render(
  <React.StrictMode>
   {/* <Homepage /> */}
   <App numbers = {arr}/>
   <Example IsDisplay={false}/>
   <Example IsDisplay={true}/>
   <App1 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
