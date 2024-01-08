import "./screen4.css"


function MainFourScreen () {

return(
  <div class="screen4" id="etap">
    <div class="container">
      <div class="title">
      <p class="title-text">
        <span class="black">Этапы работ</span>
      </p>
      </div>
      <ul class="vertical-scrollable-timeline">
          <div class="list-progress"></div>
          <li>
            <h4>Оставляете заявку</h4>
              <h2>Правильный просчет схемы доставки и уточнение, по способу оплаты поставщику
              </h2>
            <div class="icon-holder">1</div>
          </li>
                                    
          <li>
            <h4>Консультация и договор</h4>
              <h2>
                После того, как технический специалист оформит замерный лист, он передаст его в сметный отдел. В течение 24 часов наши специалисты просчитают стоимость ремонта по каждому пункту 
              </h2>
            <div class="icon-holder">2</div>
          </li>

          <li>
            <h4>Доставка товара в Россию</h4>
            <h2>
            Страхования товара перед доставкой. Отслеживание товара от производителя до путанка получение заказа.. Мониторинг товара в транспортных компаниях на всех этапах доставки.
            </h2>
            <div class="icon-holder">3</div>
          </li>

          <li>
            <h4>Получение товара заказчиком</h4>
            <h2>
            Поверка товара на соответствие качества. Выдача экспедиционной документации и  гарантийных документов.
            </h2>
            <div class="icon-holder">4</div>
          </li>
      </ul>
    </div>
  </div>
)}

export default MainFourScreen;    