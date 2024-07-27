import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    teamCardsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamsCardList()
  }

  getTeamsCardList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const dataIpl = await response.json()
    const formattedIplTeamList = dataIpl.teams.map(eachIpl => ({
      name: eachIpl.name,
      id: eachIpl.id,
      teamImageUrl: eachIpl.team_image_url,
    }))
    this.setState({teamCardsList: formattedIplTeamList, isLoading: false})
  }

  render() {
    const {teamCardsList, isLoading} = this.state
    return (
      <div className="mainContainer">
        <div className="heading">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1>IPL DASHBOARD</h1>
        </div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="teamCardList">
            {teamCardsList.map(eachCard => (
              <TeamCard eachCard={eachCard} key={eachCard.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
