import './index.css'

const MatchCard = props => {
  const {cardDetails} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = cardDetails
  return (
    <li className="card-container">
      <img
        className="card-competing-logo"
        src={competingTeamLogo}
        alt={competingTeam}
      />
      <p className="card-competing-team">{competingTeam}</p>
      <p className="card-match-result">{result}</p>
      <p className={`card-status ${matchStatus}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
