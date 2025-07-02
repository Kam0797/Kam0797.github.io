import './Pros.css'
import './Pro3.css'
import { useState} from 'react'

export default function Pro3() {
  // const [featureBtn,setFeatureBtn] = useState("Features");
  function handleFeatureBtn() {
      document.querySelector('.p3').style.display="flex";
      document.querySelector('.p3f').style.display="flex";
  }
  function handleBackBtn() {
      document.querySelector('.p3').style.display="none";
      document.querySelector('.p3f').style.display="none";
      document.querySelector('.p3i').style.display="none";
}
  function handleIframeBtn() {
    document.querySelector('.p3').style.display="flex";
    document.querySelector('.p3i').style.display="flex";
  }

  return (
  <>
    <div class='pros-wrapper'>
      <div class='pro-header'>Random Quote Machine</div>
      <div class='prev-wrapper'>
        <a class='prev prev-p3' href="https://codepen.io/Kam0797/full/zYXLRbX"><img src="/assets/ranq.png" height='100%' width='100%' ></img></a>
      </div>
      <div class='pro-description'>Read random quotes</div>
      <div class='buttons'>
        <button class='features-btn btn' onClick={()=>handleFeatureBtn()}>Features</button>
        <button class='codepen-btn btn' onClick={()=>handleIframeBtn()}>Open in codepen.io</button>
      </div>
    </div>

    <div class='overlay-wrapper p3'>
      <div class='overlay-features p3f' onClick={()=>handleBackBtn()}> 
        <div class='features-label'>Features</div>
        <div class='features-content'>
          <ul>
            <li>Fetches Data from FCC API</li>
            <li>Uses Async/await for proper response handling</li>
            <li>Used HTML/CSS/Javascript and Bootstrap</li>
            <li>A cool gradient theme</li>
          </ul>
        </div>
        <button class='back-btn' onClick={()=>handleBackBtn()}>Back</button>
      </div>
      <div class='overlay-iframe p3i' onClick=''>
        <iframe src="https://codepen.io/Kam0797/full/zYXLRbX" width='100%' height="100%" frameBorder="0" allowFullScreen />
        <button class='back-btn' onClick={()=>handleBackBtn()}>Back</button>
      </div>
      
    </div>
  </>
  )
}
