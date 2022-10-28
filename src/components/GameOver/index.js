import './index.css'

const GameOver = props => {
  const {score, playAgain} = props

  const onPlayAgainBtnClicked = () => {
    playAgain()
  }
  return (
    <div className="gameOver-bg-container">
      <div className="gameOver-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy-img"
        />
        <p className="yourScore-text">YOUR SCORE</p>
        <p className="yourScore-text score">{score}</p>
        <button
          type="button"
          className="playAgain-button"
          onClick={onPlayAgainBtnClicked}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          <p className="playAgain-text">PLAY AGAIN</p>
        </button>
      </div>
    </div>
  )
}

export default GameOver
