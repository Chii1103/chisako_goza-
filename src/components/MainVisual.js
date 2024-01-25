

function MainVisual() {
  return (
    <div className="mainVisual-wrap">
      <div className="mv-left">
        <div className="icons-links-wrap">
          <img className='links-img' src="/images/github.png" />
          <img className='links-img' src="/images/linkedin.png" />
          <img className='links-img' src="/images/instagram.png" />
        </div>
      </div>
      <div className='mv-center'>
        <h1 className='mv-h1'>Hello, I am Chisako Goza </h1>
        <h2 className='mv-h2'>Thank you so much for visiting！</h2>
        <img className="mv-me" src="/images/mainVisual.png" />

      </div>
      <div className='mv-right'>
        <p className='mv-p'>I am a front end  developer from Kyoto, Japan,
          <br />currently based in New York , USA.</p>
        <button className='btn-view'>View my works</button>
      </div>


    </div>
  );
};

export default MainVisual;
