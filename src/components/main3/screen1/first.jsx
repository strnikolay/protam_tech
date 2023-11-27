import "./first.css"
import button from "./img/8nT.png"

function MainFirstScreen () {

return(
   
<div className="screen-1">
  <div className="screen-1-wraper">
    <div className="screen-1-background">
  <div className="title">
    <h1>Доставка техники и оборудования в Россию</h1>
    <h3>Доставим все, что Вам нужно.</h3>
  </div>
  <div class="button">
      <div class="item--Sum">
        <img class="item--U5m" src={button} alt=""/>
        <div class="button-border"></div>
        <p class="button-text"><a href="#lead">оставить заявку</a></p>
      </div>
  </div> 

  </div>
</div>
</div>
)}

export default MainFirstScreen;

 