import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard/index'

class Home extends Component {
  state = {teamCardList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsDetails()
  }

  getTeamsDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const formattedData = data.teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({teamCardList: formattedData, isLoading: false})
  }

  renderHomePage = () => {
    const {teamCardList} = this.state

    return (
      <div className="dashboard-container">
        <div className="dashboard-logo-container">
          <img
            className="dashboard-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="dashboard-title">IPL Dashboard</h1>
        </div>
        <ul className="teams-card-container">
          {teamCardList.map(eachCard => (
            <TeamCard key={eachCard.id} cardDetails={eachCard} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="home-container">
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          this.renderHomePage()
        )}
      </div>
    )
  }
}

export default Home
