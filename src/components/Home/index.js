// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    isLoading: true,
    iplTeams: [],
  }

  componentDidMount() {
    this.getIplTeams()
  }

  getIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(item => ({
      name: item.name,
      id: item.id,
      teamImageUrl: item.team_image_url,
    }))

    this.setState({
      isLoading: false,
      iplTeams: updatedData,
    })
  }

  render() {
    const {isLoading, iplTeams} = this.state

    return (
      <div className="home-container">
        <div className="home-card-container">
          <div className="ipl-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              className="ipl-logo"
              alt="ipl logo"
            />
            <h1 className="title">IPL Dashboard</h1>
          </div>
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <ul className="team-list">
              {iplTeams.map(each => (
                <TeamCard key={each.id} teams={each} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
