let players = [
    {
        name:"Player 1",
        score: 25,
        id: 1
    },
    {
        name:"Player 2",
        score: 25,
        id: 2
    },
    {
        name:"Player 3",
        score: 25,
        id: 3
    },
    {
        name:"Player 4",
        score: 25,
        id: 4
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

class Counter extends React.Component {
    render(){
        return (
            <div className= "counter">
                <button className= "counter-action decrement">-</button>
                <span className= "counter-score">{ this.props.score }</span>
                <button className= "counter-action increment">+</button>
            </div>
            )
    }
    
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
            <Header title="Scoreboard" totalPlayers= {props.initialPlayers.length}/>

            {/* Player List */}
            {props.initialPlayers.map(
                player => 
                <Player 
                    name= {player.name} 
                    score={player.score}
                    key={ player.id.toString()}
                    />
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