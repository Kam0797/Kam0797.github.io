import './Pros.css'
import { useState} from 'react'

export default function Pro1() {
  // const [featureBtn,setFeatureBtn] = useState("Features");
  function handleFeatureBtn() {
      document.querySelector('.overlay-wrapper').style.display="flex";
      document.querySelector('.overlay-features').style.display="flex";
  }
  function handleBackBtn() {
      document.querySelector('.overlay-wrapper').style.display="none";
      document.querySelector('.overlay-features').style.display="none";
      document.querySelector('.overlay-iframe').style.display="none";
}
  function handleIframeBtn() {
    document.querySelector('.overlay-wrapper').style.display="flex";
    document.querySelector('.overlay-iframe').style.display="flex";
  }

  return (
  <>
    <div class='pros-wrapper'>
      <div class='pro-header'>Pomodoro Timer</div>
      <div class='prev-wrapper'>
        <a class='prev' href="https://codepen.io/Kam0797/full/YzMbOBo"><img src="/assets/pom.png" height='100%' width='100%' ></img></a>
      </div>
      <div class='pro-description'>A simple pomodoro timer</div>
      <div class='buttons'>
        <button class='features-btn btn' onClick={()=>handleFeatureBtn()}>Features</button>
        <button class='codepen-btn btn' onClick={()=>handleIframeBtn()}>Open in codepen.io</button>
      </div>
    </div>

    <div class='overlay-wrapper'>
      <div class='overlay-features' onClick={()=>handleBackBtn()}> 
        <div class='features-label'>Features</div>
        <div class='features-content'>
          <ul>
            <li>Work-break cycles</li>
            <li>Custom durations for work and break sessions</li>
            <li>Used HTML/CSS/Javascript and Bootstrap</li>
            <li>Metallic color theme</li>
          </ul>
        </div>
        <button class='back-btn' onClick={()=>handleBackBtn()}>Back</button>
      </div>
      <div class='overlay-iframe' onClick=''>
        <iframe src="https://codepen.io/Kam0797/full/YzMbOBo" width='100%' height="100%" frameBorder="0" allowFullScreen />
        <button class='back-btn' onClick={()=>handleBackBtn()}>Back</button>
      </div>
      
    </div>
  </>
  )
}
