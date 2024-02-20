import { FaInstagram } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { GoComment } from "react-icons/go";
import { PiPaperPlaneTiltLight } from "react-icons/pi";
import { CiBookmark } from "react-icons/ci";



const flowerArray = [
  {
    iconImg: '/images/iconMe.jpg',
    iconName: 'Chisako',
    flowerImg: '/images/flower01.jpg',
    heartImg: null,
    commentImg: null,
    shareImg: null,
    saveImg: null,
  },
  {
    iconImg: '/images/iconMe.jpg',
    iconName: 'Chisako',
    flowerImg: '/images/flower02.jpg',
    heartImg: null,
    commentImg: null,
    shareImg: null,
    saveImg: null,
  },
  {
    iconImg: '/images/iconMe.jpg',
    iconName: 'Chisako',
    flowerImg: '/images/flower03.jpg',
    heartImg: null,
    commentImg: null,
    shareImg: null,
    saveImg: null,
  },
  {
    iconImg: '/images/iconMe.jpg',
    iconName: 'Chisako',
    flowerImg: '/images/flower04.jpg',
    heartImg: null,
    commentImg: null,
    shareImg: null,
    saveImg: null,
  },
  {
    iconImg: '/images/iconMe.jpg',
    iconName: 'Chisako',
    flowerImg: '/images/flower05.jpg',
    heartImg: null,
    commentImg: null,
    shareImg: null,
    saveImg: null,
  },
  {
    iconImg: '/images/iconMe.jpg',
    iconName: 'Chisako',
    flowerImg: '/images/flower06.jpg',
    heartImg: null,
    commentImg: null,
    shareImg: null,
    saveImg: null,
  },
  {
    iconImg: '/images/iconMe.jpg',
    iconName: 'Chisako',
    flowerImg: '/images/flower07.jpg',
    heartImg: null,
    commentImg: null,
    shareImg: null,
    saveImg: null,
  },
  {
    iconImg: '/images/iconMe.jpg',
    iconName: 'Chisako',
    flowerImg: '/images/flower08.jpg',
    heartImg: null,
    commentImg: null,
    shareImg: null,
    saveImg: null,
  },
  {
    iconImg: '/images/iconMe.jpg',
    iconName: 'Chisako',
    flowerImg: '/images/flower09.jpg',
    heartImg: null,
    commentImg: null,
    shareImg: null,
    saveImg: null,
  },
]

const FlowerCard = ({ iconImg, iconName, flowerImg, heartImg, commentImg, shareImg, saveImg }) => (
  <div className="flowerContainer-wrap  ">
    <div className="iconWrap">
      <img className="iconImg" src={iconImg} />
      <h3 className="iconName">{iconName}</h3>
    </div>
    <img className="flowerImg" src={flowerImg} />
    <div className="flowerButtons">
      <div className="flowerLeftButtons">
        <div className="heartImg"><CiHeart /></div>
        <div className="commentImg"><PiPaperPlaneTiltLight /></div>
        <div className="shareImg"><GoComment /></div>
      </div>
      <div className="saveImg"><CiBookmark /></div>
    </div >
  </div>
)


const FlowerArrangement = () => {
  return <>
    <div className='section-wrap' id="flowerTop">
      <div className="titleWrap">
        <img className="titleSakura" src="../images/sakuraS.png" />
        <h2 className="section-title">FlowerArrangement</h2>
      </div>
      <div className="flowerContainer">
        {flowerArray.map((flower, idx) => <FlowerCard key={idx} {...flower} />)}
      </div>
     <a href="https://www.instagram.com/rosasdechisako/"><div className="flower-instagram"><FaInstagram /><span>@rosasdechisako</span></div> </a> 
    </div>
  </>
}

export default FlowerArrangement


// <div className="flowerSectionWrap">
//   <div className="titleWrap">
//     <img className="titleSakura" src="../images/sakuraS.png" />
//     {/* インスタのような画像にするには、リアクト？それともflex-wrap？？？恐らく後者 */}
//     <h2 className="section-title">Flower Arrangement</h2>

//   </div>



//   <div className="flowerPics">

{/* <img id='flowerPic02' className="flowerPic" src="/images/flower02.jpg" />
        <img id='flowerPic03' className="flowerPic" src="/images/flower03.jpg" />
        <img id='flowerPic04' className="flowerPic" src="/images/flower04.jpg" />
        <img id='flowerPic05' className="flowerPic" src="/images/flower05.jpg" />
        <img id='flowerPic06' className="flowerPic" src="/images/flower06.jpg" />
        <img id='flowerPic07' className="flowerPic" src="/images/flower07.jpg" />
        <img id='flowerPic08' className="flowerPic" src="/images/flower08.jpg" />
        <img id='flowerPic09' className="flowerPic" src="/images/flower09.jpg" /> */}
//     <div className="frame">
//       <div className="picHead">
//         <div className="picIcon"><img src="/images/iconMe.jpg" alt="icon" /></div>
//         <div>Chisako</div>
//       </div>
//       <img id='flowerPic01' className="flowerPic" src="/images/flower01.jpg" />
//     </div>
//   </div>
//   <h3 className="flowerComment">I love to spend my relaxing time with flower arrangement.
//     This is how I spend my time outside of work.</h3>
//   <div className="flowerBottom">
//     <a href="https://www.instagram.com/rosasdechisako/" target="_blank" rel="noopener noreferrer">
//       <div className="igLogo"><FaInstagram /></div>
//       <h4>@rosasdechisako</h4>
//     </a>
//   </div>
// </div>
