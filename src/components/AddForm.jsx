import React from 'react';

class AddForm extends React.Component {
    state = {
        fields : {
            name:'',
            login:'',
            password:''
        }    
    }

    editPassword = false; 

    createPassword(e){
        e.preventDefault();
        const fields = {...this.state.fields};
        
        if(this.props.editPass === ''){
            if(this.state.fields.name==="" || this.state.fields.login==="" || this.state.fields.password===""){
                alert('Пожалуйста, заполните все поля');
                return;
            }else{
                this.props.addPassword(this.state.fields);
                
                fields['name'] = '';
                fields['login'] = '';
                fields['password'] = '';
                this.setState({
                    fields:fields
                });
            }
        }else{
            if(this.state.fields.name==="" || this.state.fields.login==="" || this.state.fields.password===""){
                alert('Пожалуйста, заполните все поля');
                return;
            }else{
                this.props.updatePassword(this.state.fields);

                fields['name'] = '';
                fields['login'] = '';
                fields['password'] = '';
                this.setState({
                    fields:fields
                });
                this.editPassword = false;
            }
            
        }
        
    }

    onChange = (e) => {
        const fields = {...this.state.fields};
        fields[e.target.name]=e.target.value;
        this.setState({
            fields:fields
        }) 
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
        if(nextProps.editPass !== '' && this.editPassword === false){
            this.editPassword = true
            const fieldsProps = nextProps.passwords[nextProps.editPass];
            const fields = { ...this.state.fields };
            fields['name'] = fieldsProps['name'];
            fields['login'] = fieldsProps['login'];
            fields['password'] = fieldsProps['password'];
            this.setState({
                fields: fields
            })
        }
    }
    
    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate')
    }

    render() {
        const buttonText = this.props.editPass === '' ? '+ Add Password' : 'Edit Password';

        return (
            <div className="form-wrapper">
                <form className="password-edit" onSubmit={(e)=>this.createPassword(e)}>
                    <input type="text" name="name" value={this.state.fields.name} onChange={this.onChange} placeholder="Site Name"/>
                    <input type="text" name="login" value={this.state.fields.login} onChange={this.onChange} placeholder="Site Login"/>
                    <input type="password" name="password" value={this.state.fields.password} onChange={this.onChange} placeholder="Site Password"/>
                    <button type="submit">{buttonText}</button>
                </form> 
            </div>    
        )
    }
}

export default AddForm;