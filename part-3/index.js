function Index() {
    return (
        <div>
            <Person name="Jake" age={23} hobbies={["Kites", "Biking", "Baking"]} />
            <Person name="Russell" age={17} hobbies={["Listing Prime Numbers", "Juggling"]} />
            <Person name="Bartholemew" age={5} hobbies={['banana']} />
        </div>
    )
}

ReactDOM.render(<Index/>, document.getElementById("root"));