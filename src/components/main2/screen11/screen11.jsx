import "./screen11.css"

import vector from "./Vector144.svg"
import gazprom from "./caterpilar.png"
import raoes from "./hitachi.png"

import tatneft from "./hyundai.png"
import rusgidro from "./jcb.png"
import rostelecom from "./komatsu.png"
import mmk from "./xcmg.png"

import tas from "./-tas.png"

function MainElevenScreen () {

return(


    
  <div class="item-7--brP">

  <div class="screen11-title">
            <p class="screen11-title-text">
                <span class="black">Производители</span>
            </p>
            <img class="vector-144-Zpb" src={vector}/>
  </div>


  <div class="auto-group-kkwh-YHm">
    <div class="item--5Yb">
      <div class="auto-group-iuco-NXh">
        <img class="gazprom-7-iLf" src={gazprom}/>
        <img class="mask-group-qAP" src={raoes}/>
      </div>
      <div class="auto-group-g2pr-AyM">
        <img class="mask-group-6s1" src={tatneft}/>
        <img class="mask-group-Sfy" src={rusgidro}/>
      </div>
      <div class="auto-group-in7h-PLK">
        <img class="mask-group-JiB" src={rostelecom}/>
        <img class="mask-group-T5H" src={mmk}/>
      </div>
    </div>
    <img class="item--n7Z" src={tas}/>
  </div>
</div>




)}

export default MainElevenScreen;    