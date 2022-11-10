import CountryData from "./CountryData"
import { useState , useEffect} from 'react'
import axios from 'axios';

const Countries = (props) =>{
    const {filterCountry, countries, setCountries, setCountriesToShow} = props
    
    useEffect(() => {
      axios.get("https://restcountries.com/v3.1/all")
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
        setCountriesToShow(response.data)
      })
    }, [])
  
    let countrieslist = countries
  
    if (filterCountry !== null && filterCountry !== undefined){
      countrieslist = countries.filter(country => country.name.common.toLowerCase().includes(filterCountry.toLowerCase()))
      if (filterCountry && countrieslist.length > 10){
        return(
         <div>
           <p>Too many matches, specify another filter</p>
         </div>
        )
      }
      else if(countrieslist.length === 1){
        return (
          <CountryData countrieslist={countrieslist} />
        )
      }
      else{
        return(
          <table>
              <tbody> 
                {countrieslist.map((country, i) => 
                  <tr key = {i}>
                    <td>
                        {country.name.common}
                    </td>
                    <td><button type="button" onClick={() => setCountries([country])}>show</button></td>
                  </tr>
                )}
              </tbody>
          </table>
        )
      }
    }  
  }

  export default Countries