import { useState } from "react";
// import { FaInstagram } from "react-icons/fa";
// import { CiHeart } from "react-icons/ci";
// import { GoComment } from "react-icons/go";
// import { PiPaperPlaneTiltLight } from "react-icons/pi";
// import { CiBookmark } from "react-icons/ci";


const flowerArray = [
  {
    flowerImg: "/images/flower01.jpg",
  },
  {
    flowerImg: "/images/flower02.jpg",
  },
  {
    flowerImg: "/images/flower03.jpg",
  },
  {
    flowerImg: "/images/flower04.jpg",
  },
  {
    flowerImg: "/images/flower05.jpg",
  },
  {
    flowerImg: "/images/flower06.jpg",
  },
  {
    flowerImg: "/images/flower07.jpg",
  },
  {
    flowerImg: "/images/flower08.jpg",
  },
  
];


const FlowerCard = ({ flowerImg }) => (
  <div className="flowerContainer-wrap">
    <img className="flowerImg" src={flowerImg} />
  </div>
);

const FlowerArrangement = () => {
  return (
    <>
      <div className="section-wrap " id="flowerTop">
        <div className="titleWrap">
          <img className="titleSakura" src="../images/sakuraS.png" />
          <h2 className="section-title">Flower Arrangement Gallery</h2>
        </div>

        <div className="flowerContainer sectionInner">
          {flowerArray.map((flower, idx) => (
            <FlowerCard key={idx} {...flower} />
          ))}
        </div>
        
        {/* <a href="https://www.instagram.com/rosasdechisako/"><div className="flower-instagram"><FaInstagram /><span>@rosasdechisako</span></div> </a> */}
      </div>
    </>
  );
};




export default FlowerArrangement;
// const oldflowerArray = [
//   {
//     iconImg: "/images/iconMe.jpg",
//     iconName: "Chisako",
//     flowerImg: "/images/flower01.jpg",
//     heartImg: null,
//     commentImg: null,
//     shareImg: null,
//     saveImg: null,
//   },
//   {
//     iconImg: "/images/iconMe.jpg",
//     iconName: "Chisako",
//     flowerImg: "/images/flower02.jpg",
//     heartImg: null,
//     commentImg: null,
//     shareImg: null,
//     saveImg: null,
//   },
//   {
//     iconImg: "/images/iconMe.jpg",
//     iconName: "Chisako",
//     flowerImg: "/images/flower03.jpg",
//     heartImg: null,
//     commentImg: null,
//     shareImg: null,
//     saveImg: null,
//   },
//   {
//     iconImg: "/images/iconMe.jpg",
//     iconName: "Chisako",
//     flowerImg: "/images/flower04.jpg",
//     heartImg: null,
//     commentImg: null,
//     shareImg: null,
//     saveImg: null,
//   },
//   {
//     iconImg: "/images/iconMe.jpg",
//     iconName: "Chisako",
//     flowerImg: "/images/flower05.jpg",
//     heartImg: null,
//     commentImg: null,
//     shareImg: null,
//     saveImg: null,
//   },
//   {
//     iconImg: "/images/iconMe.jpg",
//     iconName: "Chisako",
//     flowerImg: "/images/flower06.jpg",
//     heartImg: null,
//     commentImg: null,
//     shareImg: null,
//     saveImg: null,
//   },
//   {
//     iconImg: "/images/iconMe.jpg",
//     iconName: "Chisako",
//     flowerImg: "/images/flower07.jpg",
//     heartImg: null,
//     commentImg: null,
//     shareImg: null,
//     saveImg: null,
//   },
//   {
//     iconImg: "/images/iconMe.jpg",
//     iconName: "Chisako",
//     flowerImg: "/images/flower08.jpg",
//     heartImg: null,
//     commentImg: null,
//     shareImg: null,
//     saveImg: null,
//   },
//   {
//     iconImg: "/images/iconMe.jpg",
//     iconName: "Chisako",
//     flowerImg: "/images/flower09.jpg",
//     heartImg: null,
//     commentImg: null,
//     shareImg: null,
//     saveImg: null,
//   },
// ];
// const oldFlowerCard = ({ flowerImg }) => (
//   <div className="flowerContainer-wrap  ">
//     <div className="iconWrap">
//       <img className="iconImg" src={iconImg} />
//       <h3 className="iconName">{iconName}</h3>
//     </div>
//     <img className="flowerImg" src={flowerImg} />
//     <div className="flowerButtons">
//       <div className="flowerLeftButtons">
//         <button className="like-button" onClick={toggleLike}>
//           {liked ? <img src="../img/liked.png" alt="liked" /> : <CiHeart />}
//         </button>

//         <div className="commentImg">
//           <PiPaperPlaneTiltLight />
//         </div>
//         <div className="shareImg">
//           <GoComment />
//         </div>
//       </div>
//       <div className="saveImg">
//         <CiBookmark />
//       </div>
//     </div>
//   </div>
// );
// const oldflowerArray = [
//   {
//     iconImg: "/images/iconMe.jpg",
//     iconName: "Chisako",
//     flowerImg: "/images/flower01.jpg",
//     heartImg: null,
//     commentImg: null,
//     shareImg: null,
//     saveImg: null,
//   },
//   {
//     iconImg: "/images/iconMe.jpg",
//     iconName: "Chisako",
//     flowerImg: "/images/flower02.jpg",
//     heartImg: null,
//     commentImg: null,
//     shareImg: null,
//     saveImg: null,
//   },
//   {
//     iconImg: "/images/iconMe.jpg",
//     iconName: "Chisako",
//     flowerImg: "/images/flower03.jpg",
//     heartImg: null,
//     commentImg: null,
//     shareImg: null,
//     saveImg: null,
//   },
//   {
//     iconImg: "/images/iconMe.jpg",
//     iconName: "Chisako",
//     flowerImg: "/images/flower04.jpg",
//     heartImg: null,
//     commentImg: null,
//     shareImg: null,
//     saveImg: null,
//   },
//   {
//     iconImg: "/images/iconMe.jpg",
//     iconName: "Chisako",
//     flowerImg: "/images/flower05.jpg",
//     heartImg: null,
//     commentImg: null,
//     shareImg: null,
//     saveImg: null,
//   },
//   {
//     iconImg: "/images/iconMe.jpg",
//     iconName: "Chisako",
//     flowerImg: "/images/flower06.jpg",
//     heartImg: null,
//     commentImg: null,
//     shareImg: null,
//     saveImg: null,
//   },
//   {
//     iconImg: "/images/iconMe.jpg",
//     iconName: "Chisako",
//     flowerImg: "/images/flower07.jpg",
//     heartImg: null,
//     commentImg: null,
//     shareImg: null,
//     saveImg: null,
//   },
//   {
//     iconImg: "/images/iconMe.jpg",
//     iconName: "Chisako",
//     flowerImg: "/images/flower08.jpg",
//     heartImg: null,
//     commentImg: null,
//     shareImg: null,
//     saveImg: null,
//   },
//   {
//     iconImg: "/images/iconMe.jpg",
//     iconName: "Chisako",
//     flowerImg: "/images/flower09.jpg",
//     heartImg: null,
//     commentImg: null,
//     shareImg: null,
//     saveImg: null,
//   },
// ];