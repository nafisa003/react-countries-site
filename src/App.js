
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries,setCountries]=useState([]);
  const [cart,setCart]=useState([]);
  useEffect(()=>{
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res=>res.json())
      .then(data=>{
        setCountries(data);
        // console.log(data);
      // let names=  data.map(c=>c.name);
      // console.log(names)
      })
      .catch(err=>console.log(err))
  },[])
  // console.log(countries)
  const handleAddCountry=(country)=>{
    console.log(country.name);
    const newCart=[...cart,country];
    setCart(newCart)
    
}
  return (
    <div className="App">
      <h1>Country Loaded: {countries.length}</h1>
       <h2>Country added: {cart.length}</h2>
       <Cart cart={cart}></Cart>
       
          {
            countries.map(el=><Country country={el} handleAddCountry={handleAddCountry} key={el.numericCode}></Country>)
          }
         
       
      
      
    </div>
  );
}

export default App;
