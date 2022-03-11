
import './App.css';
import {useAuth0} from "@auth0/auth0-react";
import { useState, useEffect } from 'react';

function App() {
  const [newdata, setNewData] = useState(null);

  const {loginWithRedirect,
    logout,
    user,
    isAuthenticated
  } = useAuth0();

  // console.log(user);

  useEffect(() => {
    if( newdata == null ){
      setNewData(user);
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Auth0 Demo
        </h1>
      <ul>
        <li ><button onClick={loginWithRedirect}>Login</button></li>
        <li ><button onClick={logout}>LogOut</button></li>
      </ul>
      <h4>User is {isAuthenticated ? "Logged in" : " not Logged in"}</h4>
      {isAuthenticated && (
        <div>
          
          <table >
          <caption>user Details</caption>
            <tr>
              <th>nickname</th>
              <td>{newdata?.nickname}</td>
            </tr>
            <tr>
              <th>name</th>
              <td>{newdata?.name}</td>
            </tr>
          </table>
          
        </div>
      )}
      </header>
    </div>
  );
}

export default App;
