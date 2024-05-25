function Index() {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Jomkit"/>
        </div>
    )
}

ReactDOM.render(<Index />, document.getElementById("root"));