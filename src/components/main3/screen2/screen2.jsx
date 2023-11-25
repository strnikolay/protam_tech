import "./screen2.css"
import vector from "./img/Vector144.svg"
//import { Viewer } from '@react-pdf-viewer/core';
//import '@react-pdf-viewer/core/lib/styles/index.css';
import Pdf01 from "./tech/D65E.pdf"
import Pdf02 from "./tech/GD705.pdf"
import Pdf03 from "./tech/HD605.pdf"
import Pdf04 from "./tech/PC500.pdf"
import Pdf05 from "./tech/WA470.pdf"
import Pdf06 from "./tech/WB93R.pdf"

function MainSecondScreen () {

return(
<div class="screen2">
    
    {/*<div class="auto-group-dbdq-kxP">*/}
           
      <div class="screen2-content">

        <div class="screen2-title">
            <p class="screen2-title-text">
            <span class="black">каталог</span>
            </p>
            <img class="vector-144-Zpb" src={vector}/>
        </div>
       

        {/*<div class="catalog-wraper">*/}
          <div class="second-screen-catalog">

            <div class="block">
  
              <div class="catalog-item">
                <a href={Pdf01} target="_blank">
                  <div class="cat img01"></div>
                </a>
                <div class="type-text">
                  <a href={Pdf01} target="_blank">
                    Гусенечные бульдозеры
                  </a>
                </div>
              </div>

              <div class="catalog-item">
                <a href={Pdf02} target="_blank">
                  <div class="cat img02"></div>
                </a>
                <div class="type-text">
                  <a href={Pdf01} target="_blank">
                    Грейдеры
                  </a>
                </div>
              </div>

              <div class="catalog-item">
                <a href={Pdf03} target="_blank">
                  <div class="cat img03"></div>
                </a>
                <div class="type-text">
                  <a href={Pdf03} target="_blank">
                    Карьерные самосвалы
                  </a>
                </div>
              </div>

              <div class="catalog-item">
                <a href={Pdf04} target="_blank">
                  <div class="cat img04"></div>
                </a>
               
                <div class="type-text">
                <a href={Pdf04} target="_blank">
                  Гидравлические экскаваторы
                </a>

                </div>
              </div>

              <div class="catalog-item">
                <a href={Pdf05} target="_blank">
                  <div class="cat img05"></div>
                </a>
                <div class="type-text">
                <a href={Pdf01} target="_blank">
                  Колесные погрузчики
                </a>
                  
                </div>
              </div>

              <div class="catalog-item">
                <a href={Pdf06} target="_blank">
                  <div class="cat img06"></div>
                </a>
                
                <div class="type-text">
                  <a href={Pdf06} target="_blank">
                    Экскаваторы погрузчики
                  </a>
                </div>
              </div>

            </div>

  
          </div>
        {/*</div>*/}
      </div>
{/*</div>*/}
</div>

)}

export default MainSecondScreen;




