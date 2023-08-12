import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="match-details-container">
      <div className="location-result-details">
        <p className="competing-team-name">{competingTeam}</p>
        <p className="competing-date">{date}</p>
        <p className="competing-venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <img
        className="competing-team-logo"
        src={competingTeamLogo}
        alt={competingTeam}
      />
      <div className="match-innings-details">
        <h1 className="heads">First Innings</h1>
        <p className="info">{firstInnings}</p>
        <h1 className="heads">Second Innings</h1>
        <p className="info">{secondInnings}</p>
        <h1 className="heads">Man Of The Match</h1>
        <p className="info">{manOfTheMatch}</p>
        <h1 className="heads">Umpires</h1>
        <p className="info">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
