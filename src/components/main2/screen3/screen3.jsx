import "./screen3.css"
import icon1 from "./img/auto-group-xk3z.png"
import icon3 from "./img/-CFH.png"
import icon4 from "./img/-J9D.png"
import vector from "./img/Vector144.svg"


/*import circle from "./img/circle.png"
import ellipse678 from "./img/ellipse-678.png"
import ellipse679 from "./img/ellipse-679.png"
import PRZ from "./img/-PRZ.png"

import icon2_2 from "./img/2.png"*/



function MainThirdScreen () {

return(

<div class="screen3">
  {/*<div class="screen3-wraper">*/}
    {/*<div class="screen3-wraper2">*/}

      <div class="screen3-title">
        <p class="screen3-title-text">
          <span class="black">преимущества</span><br/>
          <span class="black"> работы с нами </span>
          {/*<span class="orange">J</span>*/}
        </p>
        <img class="vector-144-Zpb" src={vector}/>
      </div>

      <div class="screen3-content">

        <div class="block-row">
          <div class="screen3-block">
            <img class="block-icon" src={icon1}/>
            <p class="screen3-block-title">Надежность</p>
            <p class="screen3-block-text">
              имеем налаженые логистические цепочки, надежных партнеров
              оплата товараза рубежем
            </p>
          </div>
          <div class="screen3-block">
            {/*<img class="item-2-yeo" src={icon2_1}/>*/}
            <img class="block-icon" src={icon4}/>
            <p class="screen3-block-title">понятно, прозрачно, удобно</p>
            <p class="screen3-block-text">
              наши клиенты знают где находится груз, как упакован, кто везет
              полное таможенное оформление 
            </p>
          </div>
        {/*</div>

        <div class="block-row">*/}
          <div class="screen3-block">
            <img class="block-icon" src={icon3}/>
            <div class="item--kDd">
              <p class="screen3-block-title">Качество доставки</p>
              <p class="screen3-block-text">наши клиенты знают где находится груз, как упакован, кто везет</p>
            </div>
          </div>
          <div class="screen3-block">
            <img class="block-icon" src={icon3}/>
            <p class="screen3-block-title">полное таможенное оформление</p>
            <p class="screen3-block-text">знаем таможеные нюансы каждой страны
            имеем налаженые логистические цепочки, надежных партнеров
            оплата товарам за рубежем </p>
          </div>


          <div class="screen3-block">
            <img class="block-icon" src={icon4}/>
            <p class="screen3-block-title">Гарантия Качаства</p>
            <p class="screen3-block-text">имеем налаженые логистические цепочки, надежных партнеров
              оплата товараза рубежем </p>
          </div>


          <div class="screen3-block">
            <img class="block-icon" src={icon1}/>
            <p class="screen3-block-title">Оптимальные цены и сроки</p>
            <p class="screen3-block-text"> знаем таможеные нюансы каждой страны
            имеем налаженые логистические цепочки, надежных партнеров
            оплата товарам за рубежем</p>
          </div>
        </div>

        

      </div>

      <div class="background">
        {/*<img class="back-circle" src={circle}/>
        <img class="ellipse-678-iLF" src={ellipse678}/>
        <div class="back-img"></div>
        <img class="ellipse-679-Uij" src={ellipse679}/>
        <img class="item-3-p1u" src={PRZ}/>*/}
      </div>



      

    {/*</div>
  </div>*/}
</div>



)}

export default MainThirdScreen;    