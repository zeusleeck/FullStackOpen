
import { useState , useEffect} from 'react'
import Countries from './component/Countries';
import CountryData from'./component/CountryData';


const App = () => {

  const [filterCountry, setFilterCountry] = useState('')
  const [countries, setCountries] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])

  const filtercountries = (e) => {
    e.preventDefault()
    setCountries(countriesToShow)
    setFilterCountry(e.target.value)
  } 
  return (
    <div>
      <p>find countries <input value={filterCountry} onChange={filtercountries} onClick = {filtercountries}/></p>
      <Countries filterCountry = {filterCountry} countries = {countries} setCountries={setCountries} setCountriesToShow={setCountriesToShow}/>
    </div>
  );
}

export default App;
