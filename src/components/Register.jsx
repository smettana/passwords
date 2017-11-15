import React from 'react';

class RegisterForm extends React.Component {

    goToDashBoard(e){
        e.preventDefault();
		const loginId = '';
		const passVal = this.passwordInput.value;
		const logVal = this.loginInput.value;
		if(passVal===""||logVal===""){
			alert("Please enter a login and password")
			return
		}else if(passVal===""){ 
			alert("Please enter a password")
			return
		}else if(logVal===""){ 
			alert("Please enter a login")
			return
		}else{
			localStorage.setItem(`${logVal}`, passVal);
			this.context.router.transitionTo(`/${loginId}`);
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