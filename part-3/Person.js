function Person({name, age, hobbies}) {
    return (
        <div>
            <p>Learn some information about this person</p>
            <h1>{ name.length < 8 ? name : name.slice(0,6) }</h1>
            <p><i>{ age } years old</i></p>
            <h3>{age > 18 ? "please go vote!" : "you must be 18"}</h3>
            <ul>
                { hobbies.map(hobby => <li>{hobby}</li>) }
            </ul>

        </div>

    )
}