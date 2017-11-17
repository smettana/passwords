import React from 'react';

class Password extends React.Component {

    state = {
        inputType:"password"
    }

    togglePassword = (e) =>{
		e.preventDefault();
		if(e.target.text === "Show Password"){
            this.setState({
                inputType:'text'
            });
			e.target.text = "Hide Password"
		}else{
            this.setState ({
                inputType:'password'
            });
			e.target.text = "Show Password"
		}
    }
    
    render() {
        const details = this.props.details;
        return (
            <div className="password">
                <span className="site-name"><a href={`${details.name}`} target="_blank">{details.name}</a></span>
                <span className="site-login">{details.login}</span>
                <input className="site-password" type={this.state.inputType} disabled value={details.password} />
                <a href="#"  className="delete" onClick={(e)=>this.props.deletePassword(e, this.props.index)}>Delete Password</a>
                <a href="#" className="edit" onClick={(e)=>this.props.editPassword(e, this.props.index)}>Edit Password</a>
                <a href="#" className="show-password" onClick={(e)=>this.togglePassword(e)}>Show Password</a>
            </div>
        )
    }
}

export default Password;