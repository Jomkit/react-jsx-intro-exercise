function Index() {
    return (
        <div>
            <Tweet username="ManOfTesting" name="John Test" date="5/25/2024" message="This is a test" />
            <Tweet username="Margerine" name="Margaret" date="5/23/2024" message="I like butter more than margarine actually" />
            <Tweet username="PirateRoberts" name="Bob" date="5/14/2024" message="Making pizza with cauliflower dough is incredibly lifeless" />
        </div>
    )
}

ReactDOM.render(<Index/>, document.getElementById('root'));