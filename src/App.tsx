import React, {useEffect, useState } from 'react';
import "./App.css"
// import file from "./Users.json"
import UserCard from './components/UserCard';
import Header from './components/Header'; 
import SortComponent from './components/SortComponent';
import {ListUser} from "./models/Users"

const App: React.FC = () => {
  const [user, setUser] = useState<ListUser[]>([] as ListUser[]);

  const getData = () =>{
    fetch('Users.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }).then(function(response){
      // console.log(response)
      return response.json();
    })
    .then(function(myJson) {
      // console.log(myJson);
      setUser(myJson)
      
    });
  }

  useEffect(() =>{
      getData();
  },[])

  return (
    <div className="card__box">
      <h1>Codding Challenge Test</h1>
     <div style={{display:"flex", justifyContent:'center'}}>
        <SortComponent allData={user} setFunction={setUser} />
     </div>
        <Header />
        <UserCard allData={user}  />
    </div>
  );
}

export default App;
