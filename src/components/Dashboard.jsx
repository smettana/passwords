import React from 'react';
import AddForm from './AddForm';
import Password from './Password';


class Dashboard extends React.Component{
    constructor(){
		super();

		this.state = {
            passwords:{},
            currEditPass:''
		}
    }
    
    addPassword(password){
        // update state
        const passwords = {...this.state.passwords};
        // add in new password
        const timestamp = Date.now();
        passwords[`password-${timestamp}`] = password; 
        // set state
        this.setState({
            passwords: passwords
        });
    }

    deletePassword(e,password){
        e.preventDefault();
        // update state
        const passwords = {...this.state.passwords};
        delete passwords[password];
        // set state
        this.setState({
            passwords: passwords
        });
    }

    editPassword(e,key){
        e.preventDefault();
        this.setState({
            currEditPass: key
        });
    }

    updatePassword(password){
        const passwords = {...this.state.passwords};
        const string = '';
        passwords[this.state.currEditPass] = password;
        console.log(this.state.currEditPass)
        this.setState({
            passwords: passwords,
            currEditPass:string
        });
    }

    componentWillMount(){
        const localStorageRef = localStorage.getItem(`passwords-${this.props.params.userId}`);
        if(localStorageRef){
            this.setState({
                passwords: JSON.parse(localStorageRef)
            })
        }
    }

    componentWillUpdate(nextProps, nextState){
        console.log({nextProps , nextState})
        localStorage.setItem(`passwords-${this.props.params.userId}`, JSON.stringify(nextState.passwords));
    }

    exitDashboard(e){
        e.preventDefault();
        this.context.router.transitionTo(`/`);
    }

    render() {
        return (
            <div className="dashboard-wrapper">
                <h2>Dashboard</h2>
                <div className="passwords">
                    <ul className="list-of-passwords">
                        {
							Object.keys(this.state.passwords).map(key=>
								<Password key={key} index={key} deletePassword={this.deletePassword.bind(this)} editPassword={this.editPassword.bind(this)} details={this.state.passwords[key]}/>
							)
						}
					</ul>
                </div>   
                <AddForm fieldsNames={this.state.fieldNames}  editPass={this.state.currEditPass} passwords={this.state.passwords} addPassword={this.addPassword.bind(this)} updatePassword={this.updatePassword.bind(this)}/>
                <a href="#" className="exit" ref={(link) => this.exit = link} onClick={this.exitDashboard.bind(this)}>Exit</a>
            </div>
        )
    }
}

Dashboard.contextTypes = {
	router: React.PropTypes.object
};

export default Dashboard;