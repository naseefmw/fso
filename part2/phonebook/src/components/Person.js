const Person = ({ name, number }) => (
    <div>
        {name} {number}
    </div>
)

const Persons = ({ personList }) => (
    <div>
        {personList.map(person => (
            <Person key={person.id} name={person.name} number={person.number} />
        ))}
    </div>
)

export default Persons