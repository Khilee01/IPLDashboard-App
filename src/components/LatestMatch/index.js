import './index.css'

import {Component} from 'react'

class LatestMatch extends Component {
  state = {latestMatchDetails: []}

  componentDidMount() {
    const {latestMatchDetails} = this.props
    const formatttedLatestMatchDetails = {
      id: latestMatchDetails.id,
      competingTeam: latestMatchDetails.competing_team,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      result: latestMatchDetails.result,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      umpires: latestMatchDetails.umpires,
    }
    this.setState({latestMatchDetails: formatttedLatestMatchDetails})
  }

  render() {
    const {latestMatchDetails} = this.state
    const {
      id,
      competingTeam,
      date,
      venue,
      result,
      competingTeamLogo,
      firstInnings,
      secondInnings,
      manOfTheMatch,
      umpires,
    } = latestMatchDetails
    return (
      <div className="latestMatchCard">
        <div className="componentforinnerCassandImg">
          <div className="innerClass1">
            <p className="latest-match-team-name">{competingTeam}</p>
            <p className="latest-match-date">{date}</p>
            <p className="match-details">{venue}</p>
            <p className="match-details">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competingTeamImg"
          />
        </div>
        <hr className="separator" />
        <div className="innerClass2">
          <p className="latest-match-details-label">First Innings</p>
          <p className="latest-match-details-value">{firstInnings}</p>
          <p className="latest-match-details-label">Second Innings</p>
          <p className="latest-match-details-value">{secondInnings}</p>
          <p className="latest-match-details-label">Man Of The Match</p>
          <p className="latest-match-details-value">{manOfTheMatch}</p>
          <p className="latest-match-details-label">Umpires</p>
          <p className="latest-match-details-value">{umpires}</p>
        </div>
      </div>
    )
  }
}
export default LatestMatch
