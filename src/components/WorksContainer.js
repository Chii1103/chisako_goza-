
const WorksContainer = props => {
  return (
    <div className="workContainer-wrap">
      <img className="work-img">{props.workImg}</img>
      <h3 className="work-title">{props.workTitle}</h3>
      <div className="work-explanation">{props.workExplanation}</div>
      <div className="btn-wrap">
        <button className="btn-github">{props.gitHub}</button>
        <button className="btn-demo">{props.demo}</button>
      </div>

    </div>
  )
}

export default WorksContainer
