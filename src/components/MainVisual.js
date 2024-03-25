const MainVisual =()=> {
  return (

    <div className="mainVisual-wrap" id="top">
      <h1 className='mv-h1'>Hello, I am Chisako Goza </h1>

      <img className="mvSakuraS1" src="/images/sakuraS.png" alt="sakura"/>
      <img className="mvSakuraS2" src="/images/sakuraS.png" alt="sakura"/>
      
      <div className="mvInner">

      <div className="mv-top">
          I am a front end  developer from Kyoto, Japan,<br/>
          currently based in New York, USA.
        </div>


        <div className='mv-center'>
          <div className="me-wrap">
          <img className="mv-me" src="/images/mainVisual.png" alt="Chisako Goza smiles in NY"/>
          </div>
        </div>

        
      </div>

      <img className="mvSakuraM" src="/images/sakuraM.png"  alt="sakura"/>

    </div>
  );
};

export default MainVisual;
