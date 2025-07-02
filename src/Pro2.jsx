import './Pros.css'
import './Pro2.css'
import { useState} from 'react'

export default function Pro2() {
  // const [featureBtn,setFeatureBtn] = useState("Features");
  function handleFeatureBtn() {
      document.querySelector('.p2').style.display="flex";
      document.querySelector('.p2f').style.display="flex";
  }
  function handleBackBtn() {
      document.querySelector('.p2').style.display="none";
      document.querySelector('.p2f').style.display="none";
      document.querySelector('.p2i').style.display="none";
}
  function handleIframeBtn() {
    document.querySelector('.p2').style.display="flex";
    document.querySelector('.p2i').style.display="flex";
  }

  return (
  <>
    <div class='pros-wrapper p2-bg'>
      <div class='pro-header'>Calc-er</div>
      <div class='prev-wrapper'>
        <a class='prev prev-p2' href="https://codepen.io/Kam0797/full/qBwvxxq"><img src="/assets/calc.png" height='100%' width='100%' ></img></a>
      </div>
      <div class='pro-description'>A JS calculator with a cool UI</div>
      <div class='buttons'>
        <button class='features-btn btn' onClick={()=>handleFeatureBtn()}>Features</button>
        <button class='codepen-btn btn' onClick={()=>handleIframeBtn()}>Open in codepen.io</button>
      </div>
    </div>

    <div class='overlay-wrapper p2'>
      <div class='overlay-features p2f' onClick={()=>handleBackBtn()}> 
        <div class='features-label'>Features</div>
        <div class='features-content'>
          <ul>
            <li>Works on both on-screen and keyboard input cycles</li>
            <li>Used Bootstrap grid system</li>
            <li>Used HTML/CSS/Javascript and Bootstrap</li>
            <li>Green-based color theme</li>
          </ul>
        </div>
        <button class='back-btn' onClick={()=>handleBackBtn()}>Back</button>
      </div>
      <div class='overlay-iframe p2i' onClick=''>
        <iframe src="https://codepen.io/Kam0797/full/qBwvxxq" width='100%' height="100%" frameBorder="0" allowFullScreen />
        <button class='back-btn' onClick={()=>handleBackBtn()}>Back</button>
      </div>
      
    </div>
  </>
  )
}
