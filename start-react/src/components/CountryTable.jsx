import React,{useState,useEffect} from 'react';

function CountryTable({title, onSelectCountry}) {
    const [countries, setCountries] = useState([]);
const[visability, setVisability] = useState(5);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region')
        .then(resp=>resp.json())
        .then(data=>setCountries(data.slice(0,visability)))
    },[visability])
    function loadMore(){
        setVisability(visability=>visability+5);
    }
    return (
        <div>
         <h3 className='text-center'>
         {/* {props.title} */}
         {title}
         </h3>
            <div className='text-center'>
          <button className='btn btn-success' onClick={loadMore}>
         Load more
              </button>
            </div>

        <table className="table table-striped">
   <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Oficial name</th>
      <th scope="col">Region</th>
      <th scope="col">Population</th>
      <th scope="col">Flag</th>
      <th scope="col">Doing</th>
    </tr>
  </thead>
  <tbody>
    
    {countries.map((country,index)=>{
        return <tr key={index}>
            <td>
                {country.name.common}
                </td>
                <td>
                {country.name.official}
                </td>
                <td>
                {country.region}
                </td>
                <td>
                {country.population}
                </td>
                <td>
              <img style={{maxWidth:'50px'}} src={country.flags.png} alt={country.flags.alt} />
                </td>
                
                <td>
                <button className='btn btn-primary' onClick={()=>{onSelectCountry(country)}}>
         Add to the list
              </button>
                </td>
    </tr>
    })}
  </tbody>
</table>
<div className='text-center'>
<button className='btn btn-success' onClick={loadMore}>
         Load more
              </button>
</div>
        </div>
    );
}

export default CountryTable;