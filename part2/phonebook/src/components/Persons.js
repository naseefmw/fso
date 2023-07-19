const Person = ({ name, number, onClick, id }) => (
    <div>
        {name} {number} <button onClick={() => onClick(id)}>delete</button>
    </div>
)

const Persons = ({ personList, onClick }) => (
    <div>
        {personList.map(person => (
            <Person key={person.id} name={person.name} number={person.number} onClick={onClick} id={person.id} />
        ))}
    </div>
)

export default Persons