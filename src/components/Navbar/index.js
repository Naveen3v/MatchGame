import './index.css'

const Navbar = props => {
  const {count} = props
  return (
    <div className="navcont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="navlogo"
      />
      <div className="navtext">
        <div className="navscore">
          <p className="navpara">Score: </p>
          <p className="score">{count}</p>
        </div>
        <div className="navtimer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="navtimerlogo"
          />

          <p className="score">60 sec</p>
        </div>
      </div>
    </div>
  )
}
export default Navbar
