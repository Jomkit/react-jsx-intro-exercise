const Tweet = ({ username, name, date, message }) => (
    <div className="tweet">
        <div>
            <h1>{name}</h1>
            <h4>@{username}</h4>
        </div>
        <p><i>{date}</i></p>
        <p className="message">{message}</p>
    </div>
)