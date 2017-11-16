import React from 'react';

class RegisterForm extends React.Component {

    goToDashBoard(e){
        e.preventDefault();
		const passVal = this.passwordInput.value;
		const logVal = this.loginInput.value;
		if(passVal===""||logVal===""){
			alert("Пожалуйста, введите логин и пароль")
			return
		}else if(passVal===""){ 
			alert("Пожалуйста, введите пароль")
			return
		}else if(logVal===""){ 
			alert("Пожалуйста, введите логин")
			return
		}else{
			if(localStorage.getItem(logVal)) {
				alert("Такой логин уже используется");
				return
			}else{
				const id = Date.now();
				localStorage.setItem(`${logVal}`, JSON.stringify({
					password:passVal,
					userId:`${logVal}-${id}`
				}));
				this.context.router.transitionTo(`/dashboard/${logVal}-${id}`);
			}
			
		}
	}

	togglePassword(e){
		e.preventDefault();
		if(this.passwordInput.type === "password"){
			this.passwordInput.type = "text";
			this.showPassword.text = "Hide password"
		}else{
			this.passwordInput.type = "password";
			this.showPassword.text = "Show password"
		}
	}
	
    render() {
		return (
			<form className="register-form" onSubmit={(e)=>this.goToDashBoard(e)}>
				<h2>Registration</h2>
				<div className="row">
					<input type="text" placeholder="Login"
						ref={(input)=>{this.loginInput = input}}
					/>
				</div>
				<div className="row">
					<input type="password" className="password-input" placeholder="Password"
						ref={(input)=>{this.passwordInput = input}}
					/>
					<a href="#" ref={(link)=>{this.showPassword = link}} className="show-password" onClick={(e)=>this.togglePassword(e)}>Show password</a>
				</div>
				<button ref={(button)=>{this.storeButton = button}} type="submit">Registration</button>
			</form>
		);
	}
}

RegisterForm.contextTypes = {
	router: React.PropTypes.object
};

export default RegisterForm;