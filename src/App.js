import { useState } from "react";
import {data} from'./data';

import './App.css';

function App() {

  const[places, setPlaces]  = useState (data);
  const removePlace = (id) => {
     let newPlaces  = places.filter(place => place.id !== id);
     setPlaces(newPlaces)
  }

  return (
   <div>
      <div className="container">
        <h1>{places.length} cамых красивых замков Чехии </h1>   
    </div>
    <div className="container">
        <h3> Проведи отдых с пользой! Выбери свой замок! </h3>
      </div> 
    {places.map((element =>{
       const {id, description, icon} = element;
  return(<div key={id}>
       <div className="container">
            <h2>{id} - {description}</h2>
        </div>
        <div className="container">
          <img src={icon} width="600px" height="500px"alt="zamek"/> 
        </div>
        <div className="container">
          <button onClick={()=> removePlace(id)}className="btn">Удалить</button>
        </div>
    </div>)
     }))}
      
        <div className="container">
          <button onClick={()=> setPlaces([])}>Удалить все</button>
        </div>

  </div>
  )
}

export default App;
