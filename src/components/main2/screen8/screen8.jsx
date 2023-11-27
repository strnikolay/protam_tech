import "./screen8.css"
import vector from "./Vector144.svg"
import aX from "./-9aX.png"
import Hqy from "./-Hqy.png"
import rB from "./-4rB.png"
import eP from "./-7eP.png"
import M17 from "./-17M.png"

function MainEighthScreen () {

return(

    <div class="screen8">
             
        <div class="screen8-title">
            <p class="screen8-title-text">
                <span class="black">Преимущества</span>
                <span class="orange">Работы </span>
                <span class="yellow">С нами</span>
            </p>
            <img class="vector-144-Zpb" src={vector}/>
        </div>




        <div class="screen8-wrapper">
          <div class="content">
            <div class="left-content">
              <div class="left-text">
                <div class="screen8-content-block left">
                  <p class="screen8-content-block-title">Инновации</p>
                  <p class="screen8-content-block-text">Мы ставим на инновации и всегда стремимся быть впереди отрасли. Предлагая клиентам современные технологические решения, мы помогаем им снизить издержки, увеличить эффективность и повысить безопасность на складе.</p>
                </div>
                <div class="screen8-content-block left">
                  <p class="screen8-content-block-title">Надежность</p>
                  <p class="screen8-content-block-text">Мы гарантируем надёжность и долговечность нашей техники. Все погрузчики, которые мы предлагаем, проходят строгий контроль качества, чтобы клиенты могли быть уверены в их надёжности и высокой производительности.</p>
                </div>
              </div>
              <div class="central-figure">
                {/*<div class="item--bXD">
                  <img class="item--Snj" src={Hqy}/>
                  <div class="auto-group-qahv-9h9">
                    <img class="item-3-VFD" src={rB}/>
                    <img class="item--bJF" src={eP}/>
                  </div>
                  <img class="item--upj" src={M17}/>
                </div>*/}
                
                <div class="item--RYB"></div>
              </div>
            </div>
            <div class="auto-group-aefr-33m">
              <div class="screen8-content-block right">
                <p class="screen8-content-block-title">Удобство использования</p>
                <p class="screen8-content-block-text">Мы предлагаем погрузчики, которые легки в использовании и обеспечивают максимальное удобство для операторов. Это повышает производительность и снижает риск возникновения ошибок или несчастных случаев на складе.</p>
              </div>
              <div class="screen8-content-block right">
                <p class="screen8-content-block-title">Фокус на клиенте</p>
                <p class="screen8-content-block-text">Мы придерживаемся принципа ориентации на клиента и стараемся удовлетворить их потребности и ожидания. Наша команда специалистов всегда готова предоставить индивидуальную консультацию, помочь с выбором правильного погрузчика и обеспечить высококлассное обслуживание клиентов.</p>
              </div>
            </div>
          </div>
          {/*<img class="item--ddZ" src={aX}/>*/}
        </div>

    </div>


)}

export default MainEighthScreen;    