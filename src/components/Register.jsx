import React from 'react';

class RegisterForm extends React.Component {

	state = {
		login:'',
		password:'',
		inputType:"password"	
	}

    goToDashBoard = (e) =>{
        e.preventDefault();
		// const passVal = this.passwordInput.value;
		// const logVal = this.loginInput.value;
		if(this.state.login===""||this.state.password===""){
			alert("Пожалуйста, введите логин и пароль")
			return
		}else if(this.state.password===""){ 
			alert("Пожалуйста, введите пароль")
			return
		}else if(this.state.login===""){ 
			alert("Пожалуйста, введите логин")
			return
		}else{
			if(localStorage.getItem(this.state.login)) {
				alert("Такой логин уже используется");
				return
			}else{
				const id = Date.now();
				localStorage.setItem(this.state.login, JSON.stringify({
					password:this.state.login,
					userId:`${this.state.login}-${id}`
				}));
				this.context.router.transitionTo(`/dashboard/${this.state.login}-${id}`);
			}
			
		}
	}

	togglePassword = (e) =>{
		e.preventDefault();
		if(e.target.text === "Show Password"){
			this.setState({
				inputType:"text"
			});
			e.target.text.text = "Hide password"
		}else{
			this.setState({
				inputType:"password"
			});
			e.target.text.text = "Show password"
		}
	}

	onChange=(e)=>{
		console.log(e.target.value)
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	
    render() {
		return (
			<form className="register-form" onSubmit={(e)=>this.goToDashBoard(e)}>
				<h2>Registration</h2>
				<div className="row">
					<input type="text" onChange={(e)=>this.onChange(e)} placeholder="Login" name="login"/>
				</div>
				<div className="row">
					<input type={this.state.inputType} onChange={(e)=>this.onChange(e)} className="password-input" placeholder="Password" name="password"/>
					<a href="#" className="show-password" onClick={(e)=>this.togglePassword(e)}>Show Password</a>
				</div>
				<button type="submit">Registration</button>
			</form>
		);
	}
}

RegisterForm.contextTypes = {
	router: React.PropTypes.object
};

export default RegisterForm;