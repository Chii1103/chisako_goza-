
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
      </div>
    </>
  );
};




export default FlowerArrangement