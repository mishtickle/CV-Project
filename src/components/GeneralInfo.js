import React from 'react';

class GeneralInfo extends React.Component {
    constructor(props){
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
    }

    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }
    handleEmailChange(event) {
        this.props.onEmailChange(event.target.value);
    }
    handlePhoneChange(event) {
        this.props.onPhoneChange(event.target.value);
    }

    handleClick(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const { userName, userEmail, userPhone } = this.props;
        return(
            <>
                <form label="General Info">
                    <input type = "text" placeholder="Name" name="userName" value={userName} onChange={this.handleNameChange} />
                    <br/>
                    <input type = "text" placeholder="Email" name="userEmail" value={userEmail} onChange={this.handleEmailChange} />
                    <br/>
                    <input type="text" placeholder="Phone Number" name="userPhone" value={userPhone} onChange={this.handlePhoneChange} />
                    <br/>
                    <button onClick={ (e) => this.handleClick(e)}>Submit</button>
                </form>
                
            </>
            
        )
    }
}

export default GeneralInfo;