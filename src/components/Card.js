
import Square from "./Square"

const Card = props => {
  return (
    <div className="section-wrap" >
      <h3 className="section-title">{props.title}</h3>
      <div className="section-body" >
        {props.body.map((n, o) => <span key={o}><div>{n}, </div></span>)}
      </div>
      <div><Square /> </div>
  
    </div>
  )
}

export default Card
