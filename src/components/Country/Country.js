import React from 'react';

const Country = (props) => {
    const {name,population,flag,region}=props.country;
    const countryStyle={border:'1px solid salmon',margin:'10px',padding:'10px'};
    
    return (
        <div style={countryStyle}>
            <h4>This is {name}</h4>
            <img style={{height:'100px',width:'200px'}} src={flag} alt="" />
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <button onClick={()=>props.handleAddCountry(props.country)}>Add country</button>
            
        </div>
    );
};

export default Country;