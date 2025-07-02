import './App.css'
import './index.css'
import { useState, useEffect} from 'react'


export default function App() {
  
  const [scrollPosition,setScrollPosition] = useState(0);
  useEffect(()=> {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      console.log(`Scroll Position: ${window.scrollY}px`);
    };
    window.addEventListener("scroll",handleScroll);

    return () => {
      window.removeEventListener("scroll",handleScroll);
    };
  },[]);

  return(
    <>
  <div class='bg'></div>
    <div class='container1'>
      <div class='greet'>
      Who's this?
      </div>
      <div class='intro'>
    {/*A passionate self-taught programmer that likes doing cool stuff.<br/>
        Have worked on Python, Javascipt, React, C++, MySQL.<br/>
        Almost done with distro hopping, settled with Archcraft, thanks to Aditya Shakya.<br/>
        Based in some random towns in southern India<br/>*/}
    I'm Kam,<br/>a passionate self-taught developer who enjoys building lightweight, efficient, and practical solutions. Whether it’s optimizing workflows, tweaking Linux environments, or crafting clean and functional code, I focus on solving problems the smart way.<br/>
    I like diving deep into systems, automation, and performance optimization, ensuring that every line of code or configuration change serves a purpose. Whether it’s scripting, debugging, or fine-tuning setups, I aim for speed, simplicity, and reliability.
    <br/>Curious to know more? Keep scrolling...
        
      </div>
    </div>
    </>  
  )
}
