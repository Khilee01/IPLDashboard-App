import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {TeamMatchesObj: {}, isLoading: true}

  componentDidMount() {
    this.getTeamMatchesObj()
  }

  getTeamMatchesObj = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({isLoading: false, TeamMatchesObj: formattedData})
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {isLoading, TeamMatchesObj} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = TeamMatchesObj

    return (
      <div id={id} className="containerForTeamMactches">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div className="teamMatches">
            <img src={teamBannerUrl} alt="team banner" className="bannerImg" />
            <h1 className="hglatestMatch">Latest Matches</h1>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul>
              {recentMatches.map(eachMatch => (
                <MatchCard eachMatch={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
