import React from 'react';

class AddForm extends React.Component {
    createPassword(e){
        e.preventDefault();
        const password = {
            name:this.name.value,
            login:this.login.value,
            password:this.password.value
        };
        
        if(this.props.editPass === ''){
            if(this.name.value==="" || this.login.value==="" || this.password.value===""){
                alert('Пожалуйста, заполните все поля');
                return;
            }else{
                this.props.addPassword(password);
            }
        }else{
            if(this.name.value==="" || this.login.value==="" || this.password.value===""){
                alert('Пожалуйста, заполните все поля');
                return;
            }else{
                this.props.updatePassword(password);
            }
            
        }
        
        this.passwordForm.reset();
    }
    render() {
        const buttonText = this.props.editPass === '' ? '+ Add Password' : 'Edit Password';
        const fieldName = this.props.editPass === '' ? 'Site Name' : this.props.passwords[this.props.editPass].name;
        const fieldLogin = this.props.editPass === '' ? 'Site Login' : this.props.passwords[this.props.editPass].login;
        const fieldPassword = this.props.editPass === '' ? 'Site Password' : this.props.passwords[this.props.editPass].password;

        return (
            <div className="form-wrapper">
                <form ref={(input)=>{this.passwordForm = input}} className="password-edit" onSubmit={(e)=>this.createPassword(e)}>
                    <input type="text" placeholder={fieldName} ref={(input) => this.name = input}/>
                    <input type="text" placeholder={fieldLogin} ref={(input) => this.login = input}/>
                    <input type="password" placeholder={fieldPassword} ref={(input) => this.password = input}/>
                    <button type="submit">{buttonText}</button>
                </form> 
            </div>    
        )
    }
}

export default AddForm;