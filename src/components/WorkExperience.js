import React from 'react';

class WorkExperience extends React.Component {
    onChange(event) {
        this.props.setState({[event.target.name]: event.target.value})
    }

    handleClick(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const { companyName, positionTitle, mainTasks, datesWorked } = this.state;
        return(
            <>
                <form label="Work Experience" preventDefault>
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