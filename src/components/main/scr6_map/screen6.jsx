import "./screen6.css"
import map from "./map.png"

function MainNinthScreen () {

return(
  <div class="screen6">
    <div className="screen6-wrapper">
    <div class="title">
      <p class="title-text">
        <span class="black">Доставка в </span>
        <span class="orange">любой регион</span><br/>
        <span class="black">всеми видами транспорта </span>
      </p>
    </div>

    <img class="screen6-map" src={map} alt=""/>
    </div>
  </div>
)}

export default MainNinthScreen;    