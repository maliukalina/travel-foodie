import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './loadingAnimation.scss'

function LoadingAnimation() {
  return(
<div id="box">
<div id="flight_loader">
  <div class="wrapper"><span>SEARCHING FOR DESTINATION</span>
    <div class="locstart"></div>
    <div class="flightpath">
      <div class="airplane"></div>
    </div>
    <div class="locend"></div>
  </div>
</div>
</div>
  )}

  export default LoadingAnimation