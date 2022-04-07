// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = matchDetails
  const statusClassName = matchStatus === 'Won' ? 'won status' : 'lost status'
  return (
    <li className="recent-match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="image"
      />
      <p className="heading">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={statusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
