import { useEffect, useState } from 'react'
import Country from './components/Country'
import Search from './components/Search'
import countryService from './services/countries'
import './index.css'

const App = () => {
  const [countries, setCountries] = useState([])
  const [newCountry, setNewCountry] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [countryData, setCountryData] = useState({})

  useEffect(() => {
    countryService.getAll().then(initialCountries => {
      const listOfCountries = initialCountries.map(country => country.name.common)
      setCountries(listOfCountries)
    })
  }, [])

  const handleSearch = (event) => {
    setNewCountry(event.target.value)
    const filteredCountries = countries.filter(country => country.toLowerCase().includes(event.target.value))
    if (filteredCountries.length > 10) {
      setCountryData({})
      if (event.target.value === '')
        setSearchResults([])
      else
        setSearchResults(["Too many matches, specify another filter"])
    }
    else if (filteredCountries.length === 1) {
      setSearchResults([])
      const country = filteredCountries[0].toLowerCase()
      countryService.getCountry(country).then(country => setCountryData(country))
    }
    else {
      setSearchResults(filteredCountries)
      setCountryData({})
    }
  }

  return (
    <div>
      <Search onChange={handleSearch} searchValue={newCountry} results={searchResults} />
      <Country country={countryData} />
    </div>
  )
}

export default App
