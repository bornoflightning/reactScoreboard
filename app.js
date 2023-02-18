function Header(props) {
    return (
        <header>
        <h1>{ props.title } </h1>
        <p className= "stats">PLAYERS: { props.totalPlayers }</p>
        </header>
    );
}

function Player() {
    return (
        <div className= "player">
            <div className= "player-name"> Victor</div>
           
            <Counter />
        </div>
    )
}

function Counter() {

    return (
    <div className= "counter">
        <button className= "counter-action decrement">-</button>
        <span className= "counter-score">35</span>
        <button className= "counter-action increment">+</button>
    </div>
    )
}


function App() {
    return(
        <div className= "scoreboard">
            <Header title="Scoreboard" totalPlayers= {1}/>

            {/* Player List */}
            <Player />
        </div>
    )
}

ReactDOM.render(
    // <Header />,
    <App />,
    document.getElementById("root")


);