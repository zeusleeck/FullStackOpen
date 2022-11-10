import { useState , useEffect} from 'react'
import axios from 'axios';

const api_key = process.env.REACT_APP_API_KEY

const CountryData = ({countrieslist}) => {
    const [weathers, setWeathers] = useState([])
    const flag = countrieslist.map(country => country.flags.png)
    const capital = countrieslist.map(country => country.capital[0])
    
    useEffect(() => {
        const params = new URLSearchParams([['q', capital], ['appid', api_key], ['units', "metric"]]);
        axios.get("http://api.openweathermap.org/data/2.5/weather", {params})
        .then(response => {
          setWeathers(response.data)
        })
      },[])
    
    return (
      <>
        {weathers.main ? (
          <table id = "one_country">
          <thead><tr><td><h1>{countrieslist.map(country => country.name.common)}</h1></td></tr></thead>
          <tbody>
            <tr>
              <td>
                <p>
                  capital {countrieslist.map(country => country.capital[0])} <br/>
                  area {countrieslist.map(country => country.area)}
                </p>
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
            <tr>
              <td>
                <h2>Weather in {capital}</h2>
              </td>
            </tr>
            <tr>
              <td>
                tempurature {weathers.main.temp} Celcius
              </td>
            </tr>
            <tr>
              <td>
                <img alt="weather icon" src={`http://openweathermap.org/img/wn/${weathers?.weather[0].icon}@2x.png`}/>
              </td>
            </tr>
            <tr>
              <td>tempurature {weathers.wind.speed} m/s</td>
            </tr>
          </tbody>
        </table>
        ): null }
      </>
    );
  };

  export default CountryData