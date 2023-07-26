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
  const [message, setMessage] = useState('')

  useEffect(() => {
    countryService.getAll().then(initialCountries => {
      const listOfCountries = initialCountries.map(country => country.name.common)
      setCountries(listOfCountries)
    })
  }, [])

  const handleSearch = (event) => {
    setNewCountry(event.target.value)
    const filteredCountries = countries.filter(country => country.toLowerCase().includes(event.target.value.toLowerCase()))
    if (filteredCountries.length > 10) {
      setCountryData({})
      setSearchResults([])
      if (event.target.value !== '')
        setMessage("Too many matches, specify another filter")
      else
        setMessage('')
    }
    else if (filteredCountries.length === 1) {
      setMessage('')
      setSearchResults([])
      const country = filteredCountries[0].toLowerCase()
      countryService.getCountry(country).then(country => setCountryData(country))
    }
    else {
      setMessage('')
      setSearchResults(filteredCountries)
      setCountryData({})
    }
  }

  const handleButton = (country) => {
    console.log('clicked', country)
    countryService.getCountry(country).then(country => setCountryData(country))
  }

  return (
    <div>
      <Search onChange={handleSearch} searchValue={newCountry} results={searchResults} onClick={handleButton} />
      {message}
      <Country country={countryData} />
    </div>
  )
}

export default App
