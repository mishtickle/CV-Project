import React from 'react';

class WorkExperience extends React.Component {
    constructor(props){
        super(props);
        this.onChange =this.onChange.bind(this);
    }
    
    onChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleClick(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const { companyName, positionTitle, mainTasks, datesWorked } = this.props;
        return(
            <>
                <form label="Work Experience">
                    <input type = "text" placeholder="Company Name" name="companyName" value={companyName} onChange={this.onChange} />
                    <br/>
                    <input type = "text" placeholder="Position Title" name="positionTitle" value={positionTitle} onChange={this.onChange} />
                    <br/>
                    <textarea placeholder="Main Tasks" name="mainTasks" value={mainTasks} onChange={this.onChange} />
                    <br/>
                    <input type = "text" placeholder="Dates Worked" name="datesWorked" value={datesWorked} onChange={this.onChange} />
                    <br/>
                    <button onClick={ (e) => this.handleClick(e)}>Submit</button>
                </form>
                
            </>
            
        )
    }
}

export default WorkExperience;