import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  console.log(eachMatch)
  const formattedMatchCard = {
    competingTeamLogo: eachMatch.competing_team_logo,
    competingTeam: eachMatch.competing_team,
    result: eachMatch.result,
    matchStatus: eachMatch.match_status,
    date: eachMatch.date,
    venue: eachMatch.venue,
  }

  const {
    competingTeamLogo,
    competingTeam,
    result,
    matchStatus,
  } = formattedMatchCard

  return (
    <li>
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competingTeamImg"
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      {matchStatus === 'Lost' ? (
        <p className="lost">{matchStatus}</p>
      ) : (
        <p className="won">{matchStatus}</p>
      )}
    </li>
  )
}

export default MatchCard
