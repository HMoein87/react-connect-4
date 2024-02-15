import GameBoard from "./GameBoard";

// the main component which consists of game board and all child components
const App = () => {
    return (
        <div className="app-container">
            <GameBoard />
        </div>
    )
}

export default App;