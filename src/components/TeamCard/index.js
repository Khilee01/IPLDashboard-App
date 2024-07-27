// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {eachCard} = props

  const {name, teamImageUrl, id} = eachCard

  return (
    <Link to={`/team-matches/${id}`} className="links">
      <li className="card">
        <img src={teamImageUrl} alt={name} />
        <p>{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
