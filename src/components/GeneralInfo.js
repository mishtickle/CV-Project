import React from 'react';

class GeneralInfo extends React.Component {
    constructor(props){
        super(props);
        // this.onChange =this.onChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }

    handleClick(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const { userName, userEmail, userPhone } = this.props;
        console.log(userName)
        return(
            <>
                <form label="General Info" preventDefault>
                    <input type = "text" placeholder="Name" name="userName" value={userName} onChange={this.handleNameChange} />
                    <br/>
                    {/* <input type = "text" placeholder="Email" name="userEmail" value={userEmail} onChange={this.onChange} />
                    <br/>
                    <input type="text" placeholder="Phone Number" name="userPhone" value={userPhone} onChange={this.onChange} />
                    <br/> */}
                    <button onClick={ (e) => this.handleClick(e)}>Submit</button>
                </form>
                
            </>
            
        )
    }
}

export default GeneralInfo;