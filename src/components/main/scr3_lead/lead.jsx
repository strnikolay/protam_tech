import "./screen3.css"
import {useState} from 'react';



function MainLead () {

	const [email, setEmail] = useState('')
	const [name, setName] = useState('')

	const emailHandler = (e) => {
		setEmail(e.target.value)
		/*const re = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/i; 
		if (!re.test(String(e.target.value).toLowerCase())) {
				setEmailError('Не коректный')
		} else {
				setEmailError('')
		}*/
	}
	
	const nameHandler = (e) => {
		setName(e.target.value)
	}

	const Send = (email, name) => {
		console.log(email, name)
		fetch("/mail/php/mail.php", {
      method: "POST",
      body: "",

			headers: {"Content-Type": "application/x-www-form-urlencoded"}
    }).then(response => {
      //response.json().then(data => {
				console.log(response);
      //})
			;})
		//transporter.sendMail(options);
	} 




return(
   
  <div class="screen3" id="lead">
		<div className="screen-lead-background"></div>
    <div className="form">
			<label htmlFor="name">
				<input
        	onChange={e => nameHandler(e)}
        	value={name}
        	type="text"
        	placeholder='Вашe имя'
        	name="name"
        	className="input"
      	/>
			</label>

			<label htmlFor="email">
				<input
          onChange={e => emailHandler(e)}
          value={email}
          type="text"
          placeholder='Ваш e-mail'
          name="email"
          className="input"
        />
			</label>

			<button onClick={() => Send(email, name)} className="fifth-screen-button">
				<div class="button-content">
					<p class="button-text">оставить заявку</p>
				</div>
				{/*<div class="item--Vef"></div>*/}
      </button>			
    </div>
    
  </div>

)}

export default MainLead;   
