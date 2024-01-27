import { FaInstagram } from "react-icons/fa";

const FlowerArrangement = () => {
  return (
    <div className="flowerSectionWrap">
      <h2 className="sectionTitle">FlowerArrangement</h2>
      <div className="flowerCenter">
        <div className="flowerLeft">
          <h3>I love to spend my relaxing time with flower arrangement.
            <br />This is how I spend my time outside of work.</h3>
        </div>
        <div className="flowerRight">
          <img src="/images/flower01.png"/>
        </div>
      </div>
      <div className="flowerBottom">
        <div className="igLogo"><FaInstagram /></div>
        <h4>@rosasdechisako</h4>
      </div>
    </div>
  )
}

export default FlowerArrangement
