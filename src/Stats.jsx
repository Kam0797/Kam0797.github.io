import './Stats.css'

export default function Stats() {
  return(
    <>
    <div class="stats-wrapper">
      <div class='stats-header'>
        A Glimpse:
      </div>
      <div class='stats-description'>
        Here are some places where you can see my work...
      </div>
    <div style={{ overflowX: 'auto', width: '100%'}}>
      <div class='stats-holder'>
        <div class='card-holder'> <a href='https://www.hackerrank.com/profile/rkgvkamal2003'><img class="stats-card" src="/assets/hk5s.png" alt="hk5s" /></a><div class='card-caption'>Hackerrank</div></div>
        <div class='card-holder'> <a href='https://github.com/Kam0797/Passenter'><img class="stats-card" src="/assets/gh.png" alt="passenter-github"/></a><div class='card-caption'>Passenter</div></div>
        <div class='card-holder'> <a href='https://leetcode.com/u/rkgvkamal2003/'><img class="stats-card"  src="/assets/lc1.png" alt="leetcode stats" /></a><div class='card-caption'>Leetcode</div></div>

      </div>
    </div>
        <div class='show-the-code'>Asking: Well, Show me the code...? <br/> Scroll below</div> 
    </div>

  </>
  );
}
