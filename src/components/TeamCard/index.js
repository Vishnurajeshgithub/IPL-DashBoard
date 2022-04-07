// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teams} = props
  const {name, id, teamImageUrl} = teams
  return (
    <Link to={`/team-matches/${id}`}>
      <button type="button" className="btn">
        <li className="cards-items">
          <img src={teamImageUrl} className="team-img" alt={`${name}`} />
          <p className="team-name">{name}</p>
        </li>
      </button>
    </Link>
  )
}
export default TeamCard
