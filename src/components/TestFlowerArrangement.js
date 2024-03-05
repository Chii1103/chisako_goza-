const mockItems = [
  {
    id: 1,
    content: "/images/flower01.jpg",
    height: 200,
  },
  {
    id: 2,
    content: "/images/flower02.jpg",
    height: 150,
  },
  {
    id: 3,
    content: "/images/flower03.jpg",
    height: 300,
  },
  {
    id: 4,
    content: "/images/flower04.jpg",
    height: 250,
  },
  {
    id: 5,
    content: "/images/flower05.jpg",
    height: 180,
  },
  {
    id: 6,
    content: "/images/flower06.jpg",
    height: 220,
  },
  {
    id: 7,
    content: "/images/flower07.jpg",
    height: 140,
  },
  {
    id: 8,
    content: "/images/flower08.jpg",
    height: 280,
  },
  {
    id: 1,
    content: "/images/flower01.jpg",
    height: 200,
  },
  {
    id: 2,
    content: "/images/flower02.jpg",
    height: 150,
  },
  {
    id: 3,
    content: "/images/flower03.jpg",
    height: 300,
  },
  {
    id: 4,
    content: "/images/flower04.jpg",
    height: 250,
  },
  {
    id: 5,
    content: "/images/flower05.jpg",
    height: 180,
  },
  {
    id: 6,
    content: "/images/flower06.jpg",
    height: 220,
  },
  {
    id: 7,
    content: "/images/flower07.jpg",
    height: 140,
  },
  {
    id: 8,
    content: "/images/flower08.jpg",
    height: 280,
  },
  {
    id: 1,
    content: "/images/flower01.jpg",
    height: 200,
  },
  {
    id: 2,
    content: "/images/flower02.jpg",
    height: 150,
  },
  {
    id: 3,
    content: "/images/flower03.jpg",
    height: 300,
  },
  {
    id: 4,
    content: "/images/flower04.jpg",
    height: 250,
  },
  {
    id: 5,
    content: "/images/flower05.jpg",
    height: 180,
  },
  {
    id: 6,
    content: "/images/flower06.jpg",
    height: 220,
  },
  {
    id: 7,
    content: "/images/flower07.jpg",
    height: 140,
  },
  {
    id: 8,
    content: "/images/flower08.jpg",
    height: 280,
  },
];

// const FlowerCard = ({ flowerImg }) => (
//   <div className="flowerContainer-wrap">
//     <img className="flowerImg" src={flowerImg} />
//   </div>
// );

const TestFlowerArrangement = () => {
  return (
    // <div className="section-wrap " id="flowerTop">
    //   <div className="titleWrap">
    //     <img className="titleSakura" src="../images/sakuraS.png" />
    //     <h2 className="section-title">Flower Arrangement Gallery</h2>
    //   </div>
    <div>
      <MasonryLayout items={mockItems} />
    </div>
  );
};

const MasonryLayout = ({ items }) => {
  return (
    <div className="masonry-wrap">
      <div className="masonry-layout "> 
      {/* //sectionInner */}
        {items.map((item) => (
          <img
            src={item.content}
            key={item.id}
            className="masonry-item"
            style={{ height: `${item.height}px` }}
          />
        ))}
      </div>
    </div>
  );
};

export default TestFlowerArrangement;
