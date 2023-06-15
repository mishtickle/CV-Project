import React from 'react';

class GeneralInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: ''
        }
        this.onChange = this.onChange.bind(this);
    }

 

    onChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleClick(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const { name, email, phone } = this.state;
        return(
            <>
                <form label="General Info" preventDefault>
                    <input type = "text" placeholder="Name" name="name" value={name} onChange={this.onChange} />
                    <br/>
                    <input type = "text" placeholder="Email" name="email" value={email} onChange={this.onChange} />
                    <br/>
                    <input type="text" placeholder="Phone Number" name="phone" value={phone} onChange={this.onChange} />
                    <br/>
                    <button onClick={ (e) => this.handleClick(e)}>Submit</button>
                </form>
                
            </>
            
        )
    }
}

export default GeneralInfo;