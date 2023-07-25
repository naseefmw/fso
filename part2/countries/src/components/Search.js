
const Search = ({ onChange, searchValue, results, onClick }) => {
    return (
        <div>
            find countries<input onChange={onChange} value={searchValue}></input>
            {results.map(result => (
                <div key={result}>
                    {result}
                    <button onClick={() => onClick(result)}>
                        show
                    </button>
                </div>))}
        </div>
    )
}

export default Search