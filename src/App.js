// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Countries/Country';
import Cart from './Cart/Cart';

function App() {
  const [countries,setCountires]=useState([]);
  const [myCountry,setMyCountry]=useState([]);
  
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all').then(res=>res.json()).then(data=>setCountires(data))    
  },[])
  const addCountryHandler = (country) =>{
    setMyCountry([...myCountry, country]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Countries: {countries.length}</h1>
        <Cart cart={myCountry}></Cart>


      </header>
      <div>
        {countries.map(country => <Country country={country} addCountryHandler={addCountryHandler}></Country>)}
      </div>
    </div>
  );


}

export default App;
