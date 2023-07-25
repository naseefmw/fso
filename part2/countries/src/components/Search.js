const Search = ({ onChange, searchValue, results }) => {

    return (
        <div>
            find countries<input onChange={onChange} value={searchValue}></input>
            {results.map(result => (<div key={result}>{result}</div>))}
        </div>
    )
}

export default Search