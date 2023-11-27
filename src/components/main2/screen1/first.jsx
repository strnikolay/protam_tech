import "./first.css"
import button from "./img/8nT.png"

function MainFirstScreen () {

return(
   
<div className="screen-1">
  <div className="screen-1-wraper">
  <div className="title">
    <h1>Доставка техники и оборудования в Россию</h1>
    <h3>Доставим все, что Вам нужно.</h3>
    {/*<div className="content">
      <div className="arrow"></div>
      <h2>Ведущие производители</h2>
      <div className="arrow"></div>
      <h2>Широкий ассортимент</h2>
      <div className="arrow"></div>
      <h2>Инновационные технологии</h2>
      <div className="arrow"></div>
      <h2 className="text-black">Комплексные решения</h2>
    
    </div>*/}
    
  
  </div>
  <div class="button">
      <div class="item--Sum">
        <img class="item--U5m" src={button} alt=""/>
        <div class="button-border"></div>
        <p class="button-text">оставить заявку</p>
      </div>
  </div> 
  {/*<div className="background"></div>*/}

   
</div>
</div>
)}

export default MainFirstScreen;

 