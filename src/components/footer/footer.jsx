import "./footer.css"

function MainFooter () {

return(

    
  <footer className="footer">
    <div className="container">
      {/*</div><div class="row">
        <div class="span5">
        <h3>Contact Form</h3>

        <div>         
          <form class="form-main" name="ajax-form" id="ajax-form" action="#" method="post">
            <input name="name" id="name" type="text" value="Введите имя" onfocus="if(this.value == 'Name') this.value='';" onblur="if(this.value == '') this.value='Name';"/>

            <input  name="email" id="email" type="text" value="E-mail" onfocus="if(this.value == 'E-mail') this.value='';" onblur="if(this.value == '') this.value='E-mail';"/>

            <textarea  name="message" id="message" onfocus="if(this.value == 'Message') this.value='';" onblur="if(this.value == '') this.value='Введите сooбщение';">Введите сообщение</textarea><br/>

            <button id="send" class="btn f-right">Отправить сообщение <i class="icon-ok"></i></button>
          </form>
        </div>

        </div>
        <div class="span3 offset3">
          <h3>Адрес</h3>
          РФ, Москва<br/>
          Улица Дом<br/>
          <br/>
        </div>
        <div>  
          <i class="icon-phone"></i>+07 000 000 00 00<br/>
          <i class="icon-envelope"></i><a href="mailto:support@example.com">support@example.com</a><br/>
          <i class="icon-home"></i><a href="#">www.example.com</a>
          
          <div class="row space40"></div>  

          <a href="#" class="social-network sn2 behance"></a>
          <a href="#" class="social-network sn2 facebook"></a>
          <a href="#" class="social-network sn2 pinterest"></a>
          <a href="#" class="social-network sn2 flickr"></a>
          <a href="#" class="social-network sn2 dribbble"></a> 
        </div>
        
      </div>

      <div class="row">
        <div class="span6">
          {/*<div class="logo-footer">
            Design by <a href="https://www.freshdesignweb.com">freshDesignweb</a>
          </div> </div>                     
</div>*/}
        
      
      <div class="span6 right">
          &copy; 2023. All rights reserved.
        </div>
    </div>
  </footer>




)}

export default MainFooter;    



