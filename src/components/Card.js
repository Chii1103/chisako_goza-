
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
// const Card = ({ title, body, className }) => {
//   // Use classNames to conditionally apply classes based on the title
//   const cardClasses = classNames('card', className);



// const DataCard = props => {
//   return (
//     <div>

//       <h2>  One of my hobbies is{props.title}</h2>
//       <h3>{props.subTitle}</h3>
//       {props.body.map((n, o) => <span key={o}><div>{n}</div></span>)}

//     </div>
//   )
// }