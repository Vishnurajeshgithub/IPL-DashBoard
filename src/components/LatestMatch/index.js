// Write your code here
import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = details
  return (
    <div className="latest-match-card">
      <div className="match-header">
        <p className="competing-team">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="competing-team-logo"
      />
      <div className="match-other-details">
        <h1 className="question">First Innings</h1>
        <p className="answer">{firstInnings}</p>
        <h1 className="question">Second Innings</h1>
        <p className="answer">{secondInnings}</p>
        <h1 className="question">Man Of The Match</h1>
        <p className="answer">{manOfTheMatch}</p>
        <h1 className="question">Umpires</h1>
        <p className="answer">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
