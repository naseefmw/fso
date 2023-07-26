import Weather from './Weather'

const Country = ({ country }) => {
    if (Object.keys(country).length === 0)
        return null
    const imgStyle = {
        height: 90,
        width: 'auto'
    }
    return (
        <div>
            <h2>{country.name.common}</h2>
            <div>capital {country.capital}</div>
            <div>area {country.area}</div>
            <h4>languages:</h4>
            <ul>
                {Object.entries(country.languages).map(lang => <li key={lang[0]}>{lang[1]}</li>)}
            </ul>
            <img style={imgStyle} src={country.flags.png} alt={country.flags.alt} />
            <Weather city={country.capital} />
        </div>
    )
}


export default Country