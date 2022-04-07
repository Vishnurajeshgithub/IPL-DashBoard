// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    latestMatchDetails: {},
    recentMatchesDetails: [],
    teamBannerUrl: '',
  }

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const latestMatch = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }
    const recentMatches = data.recent_matches.map(eachMatch => ({
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      date: eachMatch.date,
      firstInnings: eachMatch.first_innings,
      manOfTheMatch: eachMatch.man_of_the_match,
      matchStatus: eachMatch.match_status,
      result: eachMatch.result,
      secondInnings: eachMatch.second_innings,
      umpires: eachMatch.umpires,
      venue: eachMatch.venue,
      id: eachMatch.id,
    }))
    this.setState({
      isLoading: false,
      latestMatchDetails: latestMatch,
      recentMatchesDetails: recentMatches,
      teamBannerUrl: data.team_banner_url,
    })
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderRecentMatchDetails = () => {
    const {recentMatchesDetails} = this.state
    return (
      <ul className="recent-matches-container">
        {recentMatchesDetails.map(match => (
          <MatchCard key={match.id} matchDetails={match} />
        ))}
      </ul>
    )
  }

  renderMatchDetails = () => {
    const {teamBannerUrl, latestMatchDetails} = this.state
    return (
      <>
        <img
          src={teamBannerUrl}
          alt="team banner"
          className="team-banner-image"
        />
        <div className="latest-match-container">
          <p className="latest-match">Latest matches</p>
          <div className="latest-match-team-card">
            <LatestMatch
              key={latestMatchDetails.id}
              details={latestMatchDetails}
            />
          </div>
        </div>
        {this.renderRecentMatchDetails()}
      </>
    )
  }

  getBgClass = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    let teamBackgroundColor
    switch (id) {
      case 'RCB':
        teamBackgroundColor = 'rcb'
        break
      case 'KKR':
        teamBackgroundColor = 'kkr'
        break
      case 'CSK':
        teamBackgroundColor = 'csk'
        break
      case 'SH':
        teamBackgroundColor = 'sh'
        break
      case 'RR':
        teamBackgroundColor = 'rr'
        break
      case 'DC':
        teamBackgroundColor = 'dc'
        break
      case 'KXP':
        teamBackgroundColor = 'kxp'
        break
      case 'MI':
        teamBackgroundColor = 'mi'
        break

      default:
        break
    }
    return teamBackgroundColor
  }

  render() {
    const backgroundClass = this.getBgClass()
    console.log(backgroundClass)
    const {isLoading} = this.state
    return (
      <div className={`bg-container ${backgroundClass}`}>
        {isLoading ? this.renderLoader() : this.renderMatchDetails()}
      </div>
    )
  }
}

export default TeamMatches
