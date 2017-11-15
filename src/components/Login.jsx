import React from 'react';

class LoginForm extends React.Component {
	constructor(){
		super();

		this.state = {
			user:'',
			password:''
		}
	}

    goToRegister(e){
		e.preventDefault();
		const registerId = 'register';
        this.context.router.transitionTo(`${registerId}`);
	}

	goToDashbord(e){
		e.preventDefault();
		const dashboardId = 'dashboard';
		console.log(localStorage.getItem(this.state.user))
		if(localStorage.getItem(this.state.user) && localStorage.getItem(this.state.user)===this.state.password){	
			this.context.router.transitionTo(`${dashboardId}`);
		}else{
			alert('Please enter a correct login or password')
		}
		
	}

	passwordChange(e){		
		this.setState({
			password: this.passwordInput.value
		});
	}

	loginChange(e){
		this.setState({
			user: this.loginInput.value
		});
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
			<form className="login-form">
				<h2>Please enter a login and password</h2>
				<div className="row">
					<input type="text" placeholder="Login"
						ref={(input)=>{this.loginInput = input}}
						onChange={(e)=>this.loginChange(e)}
					/>
				</div>
				<div className="row">
					<input className="password-input" type="password" placeholder="Password" 
						ref={(input)=>{this.passwordInput = input}} 
						onChange={(e)=>this.passwordChange(e)}
					/>
					<a href="#" ref={(link)=>{this.showPassword = link}} className="show-password" onClick={(e)=>this.togglePassword(e)}>Show password</a>
				</div>

				<button ref={(button)=>{this.storeButton = button}} onClick={(e)=>this.goToDashbord(e)}>Log In</button>
                <button ref={(button)=>{this.registrationButton = button}} onClick={(e)=>this.goToRegister(e)}>Registration</button>
			</form>
		);
	}
}

LoginForm.contextTypes = {
	router: React.PropTypes.object
};

export default LoginForm;