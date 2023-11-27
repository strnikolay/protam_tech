import "./screen2.css"
//import button from "./8nT.png"
import circle from "./img/circle.png"
import vector from "./img/Vector144.svg"
/*import MRZ from "./mask-group-MRZ.png"
import Ndd from "./-Ndd.png"
import af9 from "./-9aF.png"*/

function MainSecondScreen () {

return(
<div class="screen2">
    
    <div class="auto-group-dbdq-kxP">
      {/*<img class="right-circle" src={circle}/>*/}
           
      <div class="screen2-content">

        <div class="screen2-title">
            <p class="screen2-title-text">
            <span class="black">каталог</span>
            </p>
            <img class="vector-144-Zpb" src={vector}/>
        </div>
       

        <div class="catalog-wraper">

          <div class="central-circle-L">
            <div class="ellipse-660-2kf"></div>
          </div>

          <div class="second-screen-catalog">

            <div class="block">
  
              <div class="catalog-item">
                <p class="cat-num">01</p>
                <div class="cat img01"></div>
                <div class="type-text">
                  Дизельные погрузчики
                </div>
              </div>

              <div class="catalog-item">
                <p class="cat-num">02</p>
                <div class="cat img02"></div>
                <div class="type-text">
                  Электропогрузчики
                </div>
              </div>

              <div class="catalog-item">
                <p class="cat-num">03</p>
                <div class="cat img03"></div>
                <div class="type-text">Штабелеры</div>
              </div>

            </div>

            <div class="block">
  
              <div class="catalog-item">
                <p class="cat-num">04</p>
                <div class="cat img04"></div>
                <div class="type-text">
                  Перевозчики паллет
                </div>
              </div>

              <div class="catalog-item">
                <p class="cat-num">05</p>
                <div class="cat img05"></div>
                <div class="type-text">
                  Газобензиновые погрузчики
                </div>
              </div>

              <div class="catalog-item">
                <p class="cat-num">06</p>
                <div class="cat img06"></div>
                <div class="type-text">Электротягачи</div>
              </div>

            </div> 
  
          </div>
        </div>

        <div class="item--GST">
          <input type="button" class="item--RCs" value="перейти в каталог"></input>
        </div>
      </div>

{/*<img class="left-circle" src={circle}/>*/}  

</div>
</div>

)}

export default MainSecondScreen;




