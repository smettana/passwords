import React from 'react';
import { Input } from 'antd';

class LoginForm extends React.Component {

	state = {
		password:'',
		login:'',
		inputType:'password'
	}

    goToRegister = (e) => {
		e.preventDefault();
		const registerId = 'register';
		this.context.router.transitionTo(`${registerId}`);
		console.log('goToRegister');
	}

	goToDashBoard = (e) => {
		e.preventDefault();
		if(localStorage.getItem(this.state.login) && JSON.parse(localStorage.getItem(this.state.login)).password===this.state.password){
			const userId = JSON.parse(localStorage.getItem(this.state.login)).userId;	
			this.context.router.transitionTo(`/dashboard/${userId}`);
		}else{
			alert('Пожалуйста, введите корректный логин и пароль');
		}
		
	}

	onChange(e){
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	togglePassword = (e) =>{
		e.preventDefault();
		if(e.target.text === "Show Password"){
			this.setState({
				inputType : "text"
			});
			e.target.text = "Hide Password"
		}else{
			this.setState({
				inputType : "password"
			});
			e.target.text = "Show Password"
		}
	}
	
    render() {
		return (
			<form className="login-form" onSubmit={(e) => this.goToDashBoard (e)}>
				<h2>Please enter a login and password</h2>
				<div className="row">
					<Input type="text" placeholder="Login" name="login"
						onChange={(e)=>this.onChange(e)} />
				</div>
				<div className="row">
					<input className="password-input" type={this.state.inputType} placeholder="Password" name="password"
						onChange={(e)=>this.onChange(e)}
					/>
					<a href="#" className="show-password" onClick={(e)=>this.togglePassword(e)}>Show Password</a>
				</div>

				<button>Log In</button>
                <a href="#" className="go-to-register" onClick={(e)=>this.goToRegister(e)}>Registration</a>
			</form>
		);
	}
}

LoginForm.contextTypes = {
	router: React.PropTypes.object
};

export default LoginForm;