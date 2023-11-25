import "./screen9.css"
import map from "./map.png"
/*import Wes from "./-Wes.png"
import F4K from "./-F4K.png"
import MCB from "./-MCB.png"
import group37 from "./group-37.png"
import vector from "./Vector144.svg"*/

function MainNinthScreen () {

return(
  <div class="screen9">
    <div className="screen9-wrapper">
    <div class="screen9-title">
      <p class="screen9-title-text">
        <span class="black">Доставка в </span>
        <span class="orange">любой регион</span><br/>
        <span class="black">всеми видами транспорта </span>
      </p>
    </div>

    <img class="screen9-map" src={map} alt=""/>
    </div>
  </div>
)}

export default MainNinthScreen;    