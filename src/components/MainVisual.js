// const mvH1 = document.querySelector ('.mv-h1');

// const keyframes = {
//   opacity:[0,1],
//   translate:['0 50px',0],
// };

// const options = {
//   duration: 3000,
//   easing:'ease',
// };

// mvH1.animate(keyframes,options);

const MainVisual =()=> {
  return (

    <div className="mainVisual-wrap" id="top">
      <h1 className='mv-h1'>Hello, I am Chisako Goza </h1>

      <img className="mvSakuraS1" src="/images/sakuraS.png" />
      <img className="mvSakuraS2" src="/images/sakuraS.png" />
      
      <div className="mvInner">

      <div className="mv-top">
          I am a front end  developer from Kyoto, Japan,
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
