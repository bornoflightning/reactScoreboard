let players = [
    {
        name:"Player 1",
        score: 25
    },
    {
        name:"Player 2",
        score: 25
    },
    {
        name:"Player 3",
        score: 25
    },
    {
        name:"Player 4",
        score: 25
    }

]


function Header(props) {
    return (
        <header>
        <h1>{ props.title } </h1>
        <p className= "stats">PLAYERS: { props.totalPlayers }</p>
        </header>
    );
}

function Player(prop) {
    return (
        <div className= "player">
            <div className= "player-name"> { prop.name }</div>
           
            <Counter score={ prop.score }/>
        </div>
    )
}

function Counter(props) {

    return (
    <div className= "counter">
        <button className= "counter-action decrement">-</button>
        <span className= "counter-score">{ props.score }</span>
        <button className= "counter-action increment">+</button>
    </div>
    )
}

function Footer(props) {
    return (
        <footer className="footer">

        </footer>
    );
}

function App(props) {
    return(
        <div className= "scoreboard">
            <Header title="Scoreboard" totalPlayers= {1}/>

            {/* Player List */}
            {props.initialPlayers.map(
                player => 
                <Player 
                    name= {player.name} 
                    score={player.score}/>
            )}
            

            <Footer />
        </div>
    )
}

ReactDOM.render(
    // <Header />,
    <App initialPlayers={ players }/>,
    document.getElementById("root")


);