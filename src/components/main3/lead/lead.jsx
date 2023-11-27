import "./screen5.css"
//import "./jquery.min.js"
//import {FC, useEffect, useContext, useState, ChangeEvent, FocusEvent} from 'react';
import {useState} from 'react';
//import nodemailer from 'nodemailer';



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

	/*const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			// TODO: replace `user` and `pass` values from <https://forwardemail.net>
			user: 'nikolayromanchuk88@gmail.com',
			pass: '!Cyndicat77'
		}	});

		const options = {
			from: 'you@example.com',
			to: 'user@gmail.com',
			subject: 'hello world',
			html: "Helo",
		};	*/


	const Send = (email, name) => {
		console.log(email, name)
		fetch("/mail/php/mail.php", {
      method: "POST",
      body: "cgjfygj",
      //headers: {"Content-Type": "multipart/form-data"}
			headers: {"Content-Type": "application/x-www-form-urlencoded"}
    }).then(response => {
      //response.json().then(data => {
        //console.log("Successful" + data);
				console.log(response);
      //})
			;})
		//transporter.sendMail(options);
	} 




return(
   
  <div class="screen5" id="lead">
		{/*<div className="screen-lead-background"></div>*/}
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
						<p class="button-text">оставить заявку</p>
						<div class="item--Vef"></div>
      </button>			
    </div>
    
  </div>

)}

export default MainLead;   
