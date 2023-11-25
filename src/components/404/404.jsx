import { useRouteError } from "react-router-dom";
import "./404.css"


//https://habr.com/ru/articles/264037/



import UzB from "./-UzB.png"
import ellipse703 from "./ellipse-703.png"
import HHh from "./-HHh.png"
import zP9 from "./-zP9.png"
import MSX from "./-MSX.png"


function ErrorPage () {
    const error = useRouteError();
    console.error(error);

    return(    

        
<div class="item-404">
  {/*<img class="circle" src={BD7} />*/}
  <div className="wrapper-404">
  <div class="item--2MD">
    <div class="item-1-nzb">
    </div>
  </div>
{/*<img class="item--4BR" src={UzB}/>*/}
  <div class="item-1--BG3">
  </div>
  {/*<img class="ellipse-703-UF9" src={ellipse703}/>*/}
  <div class="item--zzB">
    <div class="auto-group-clet-ubM">
      <div class="frame-384-SrB">
        <p class="item--BHy">страница не найдена</p>
        <p class="item--RCK">Похоже на ошибку — страница потерялась. Мы разберёмся с этим недоразумением, а пока вернитесь на главную</p>
      </div>
      <div class="item--JvK">
        <p class="item--q9Z">:</p>
        <p class="item--Xo5">{`\(`}</p>
      </div>
    </div>
    <a href="/" class="item--Sv3">
      <img class="item--yQB" src={HHh}/>
      <div class="item--6Du">
      </div>
      <p class="item--QEb">вернуться на главную</p>
    </a>
  </div>
  <div class="item-404-55q">
    <img class="item-404-1-LnT" src={zP9}/>
    <div class="item-1-FeX">
      <img class="item-2-8yD" src={MSX}/>
      <p class="item--G3q">ошибка</p>
    </div>
  </div>
  <div class="car">
  </div>
  </div>
</div>

)}
    
export default ErrorPage;