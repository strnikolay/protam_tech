import "./screen2.css"
import Pdf01 from "./tech/D65E.pdf"
import Pdf02 from "./tech/GD705.pdf"
import Pdf03 from "./tech/HD605.pdf"
import Pdf04 from "./tech/PC500.pdf"
import Pdf05 from "./tech/WA470.pdf"
import Pdf06 from "./tech/WB93R.pdf"
import circle from "./cirle.jpg"

function MainSecondScreen () {

return(
<div class="section screen2">
  <div class="screen2-content">
    <div class="title">
      <p class="title-text">
        <span class="black">каталог</span>
      </p>
    </div>

            <div class="block">
  
              <div class="catalog-item">
                <a href={Pdf01} target="_blank" rel="noreferrer">
                  <div class="cat img01"></div>
                  <p class="type-text">Гусенечные бульдозеры</p>
                  <img className="qwerty" src={circle} />
                </a>
              </div>

              <div class="catalog-item">
                <a href={Pdf02} target="_blank" rel="noreferrer">
                  <div class="cat img02"></div>
                  <p class="type-text">Грейдеры</p>
                </a>
              </div>

              <div class="catalog-item">
                <a href={Pdf03} target="_blank" rel="noreferrer">
                  <div class="cat img03"></div>
                  <p class="type-text">Карьерные самосвалы</p>
                </a>
              </div>

              <div class="catalog-item">
                <a href={Pdf04} target="_blank" rel="noreferrer">
                  <div class="cat img04"></div>
                  <p class="type-text">Гидравлические экскаваторы</p>
                </a>
              </div>

              <div class="catalog-item">
                <a href={Pdf05} target="_blank" rel="noreferrer">
                  <div class="cat img05"></div>
                  <p class="type-text">Колесные погрузчики</p>
                </a>
              </div>

              <div class="catalog-item">
                <a href={Pdf06} target="_blank" rel="noreferrer">
                  <div class="cat img06"></div>
                  <p class="type-text">Экскаваторы погрузчики</p>
                </a>
              </div>
            </div>
  </div>
</div>
)}
export default MainSecondScreen;




