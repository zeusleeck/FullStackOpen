import axios from 'axios';
import { useState , useEffect} from 'react'

const DisplayOne = ({countrieslist}) => {
  //console.log( "test: " + countrieslist.name.official) 
  const flag = countrieslist.map(country => country.flags.png)
  return(
    <table id = "one_country">
      <thead><tr><td><h1>{countrieslist.map(country => country.name.common)}</h1></td></tr></thead>
      <tbody>
        <tr>
          <td>
            <p>capital {countrieslist.map(country => country.capital[0])} <br/>
            area {countrieslist.map(country => country.area)}</p>
          </td> 
          </tr>
        <tr>
          <td>
           <h2>languages:</h2>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              {countrieslist.map(country => { 
                  return(
                      Object.keys(country.languages).map((languagekey) => {
                        return(
                          <li key = {languagekey}>{country.languages[languagekey]}</li>
                        )}
                      )
                    )
                  }
                )
              }
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <img src={flag} alt = "flags"/>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

const FilterCountries = (props) =>{
  const {filterCountry, countries} = props
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
          <DisplayOne countrieslist={countrieslist} />
      )
    }
  }
  return(
    <table>
        <tbody> 
          {countrieslist.map((country) => 
            <tr key = {country.name.common}>
              <td>
                  {country.name.common}
              </td>
            </tr>
          )}
        </tbody>
    </table>
  )
}

const App = () => {
  const [filterCountry, setFilterCountry] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    console.log("Testing")
    axios.get("https://restcountries.com/v3.1/all")
    .then(response => {
      console.log('promise fulfilled')
      setCountries(response.data)
    })
  }, [])

  const filtercountries = (e) => {
    e.preventDefault()
    setFilterCountry(e.target.value)

  } 

  return (
    <div>
      <p>find countries <input value={filterCountry} onChange={filtercountries}/></p>
      <FilterCountries filterCountry = {filterCountry} countries = {countries}/>
    </div>
  );
}

export default App;
