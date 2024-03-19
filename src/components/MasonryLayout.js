import React from "react";

const MasonryLayout = () => {
  return (
    <div className="section-wrap" id="flowerTop">
      <div className="titleWrap">
        <img className="titleSakura" src="../images/sakuraS.png" alt="sakura" />
        <div id="aboutLink" className="section-title">
          Flower Arrangement
        </div>
      </div>
      <div class="masonry-wrap sectionInner">
        <div class="grid">
          <img src="./images/flower01.jpg" className="masonry-img" alt="flower arrangement by Chisako Goza"/>
        </div>
        <div class="grid">
          <img src="./images/flower02.jpg" className="masonry-img" alt="flower arrangement by Chisako Goza"/>
        </div>
        <div class="grid">
          <img src="./images/flower03.jpg" className="masonry-img" alt="flower arrangement by Chisako Goza" />
        </div>
        <div class="grid">
          <img src="./images/flower04.jpg" className="masonry-img" alt="flower arrangement by Chisako Goza"/>
        </div>
        <div class="grid">
          <img src="./images/flower05.jpg" className="masonry-img"  alt="flower arrangement by Chisako Goza"/>
        </div>
        <div class="grid">
          <img src="./images/flower06.jpg" className="masonry-img" alt="flower arrangement by Chisako Goza"/>
        </div>
        <div class="grid">
          <img src="./images/flower07.jpg" className="masonry-img" alt="flower arrangement by Chisako Goza"/>
        </div>
        <div class="grid">
          <img src="./images/flower08.jpg" className="masonry-img" alt="flower arrangement by Chisako Goza"/>
        </div>
        <div class="grid">
          <img src="./images/flower09.jpg" className="masonry-img" alt="flower arrangement by Chisako Goza"/>
        </div>
        <div class="grid">
          <img src="./images/flower10.jpg" className="masonry-img" alt="flower arrangement by Chisako Goza"/>
        </div>
        <div class="grid">
          <img src="./images/flower11.jpg" className="masonry-img" alt="flower arrangement by Chisako Goza"/>
        </div>
      </div>
    </div>
  );
};

export default MasonryLayout;
