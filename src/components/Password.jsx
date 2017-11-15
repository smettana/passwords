import React from 'react';

class Password extends React.Component {

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
        const details = this.props.details;
        return (
            <div className="password">
                <span className="site-name"><a href={`${details.name}`} target="_blank">{details.name}</a></span>
                <span className="site-login">{details.login}</span>
                <input className="site-password" type="password" disabled value={details.password} ref={(input)=>{this.passwordInput = input}}/>
                <a href="#"  className="delete" onClick={(e)=>this.props.deletePassword(e, this.props.index)}>Delete Password</a>
                <a href="#" className="edit" onClick={(e)=>this.props.editPassword(e, this.props.index)}>Edit Password</a>
                <a ref={(link)=>{this.showPassword = link}}  href="#" className="show-password" onClick={(e)=>this.togglePassword(e)}>Show Password</a>
            </div>
        )
    }
}

export default Password;