/* eslint-disable react/no-unknown-property */
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'

class TeamMatches extends Component {
  state = {isLoading: true, teamMatchesDetails: {}, id: ''}

  componentDidMount() {
    this.getTeamMatchesDetails()
  }

  getTeamMatchesDetails = async () => {
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

    this.setState({isLoading: false, teamMatchesDetails: formattedData, id})
  }

  formatMatchDetails = eachItem => ({
    umpires: eachItem.umpires,
    result: eachItem.result,
    manOfTheMatch: eachItem.man_of_the_match,
    id: eachItem.id,
    date: eachItem.date,
    venue: eachItem.venue,
    competingTeam: eachItem.competing_team,
    competingTeamLogo: eachItem.competing_team_logo,
    firstInnings: eachItem.first_innings,
    secondInnings: eachItem.second_innings,
    matchStatus: eachItem.match_status,
  })

  renderTeamMatchesDetails = () => {
    const {teamMatchesDetails} = this.state
    const {
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
    } = teamMatchesDetails

    const formattedRecentMatches = recentMatches.map(eachItem =>
      this.formatMatchDetails(eachItem),
    )

    const formattedLatestMatchDetails = this.formatMatchDetails(
      latestMatchDetails,
    )

    return (
      <div className="team-matches-details-container">
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <div className="latest-match-container">
          <p className="latest-match-text">Latest Matches</p>
          <LatestMatch latestMatchDetails={formattedLatestMatchDetails} />
        </div>
        <ul className="match-card-container">
          {formattedRecentMatches.map(eachMatch => (
            <MatchCard key={eachMatch.id} cardDetails={eachMatch} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading, id} = this.state
    return (
      <div className={`team-matches-page-container ${id}`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          this.renderTeamMatchesDetails()
        )}
      </div>
    )
  }
}

export default TeamMatches
