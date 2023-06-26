import React from 'react';

class WorkExperience extends React.Component {
    constructor(props){
        super(props);
        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handlePositionChange = this.handlePositionChange.bind(this);
        this.handleTasksChange = this.handleTasksChange.bind(this);
        this.handleDatesChange = this.handleDatesChange.bind(this);
        this.handleSubmitWork = this.handleSubmitWork.bind(this);
    }

    handleCompanyChange(event) {
        this.props.onCompanyChange(event.target.value);
    }

    handlePositionChange(event) {
        this.props.onPositionChange(event.target.value);
    }

    handleTasksChange(event) {
        this.props.onTasksChange(event.target.value);
    }

    handleDatesChange(event) {
        this.props.onDatesChange(event.target.value);
    }

    handleSubmitWork(event){
        this.props.submitWork(event);
        console.log(this.props);
    }

    render() {
        const { userCompany, userPosition, userTasks, userDates } = this.props;
        return(
            <>
                <form onSubmit={this.handleSubmitWork} label="Work Experience">
                    <input type = "text" placeholder="Company Name" name="userCompany" value={userCompany} onChange={this.handleCompanyChange} />
                    <br/>
                    <input type = "text" placeholder="Position Title" name="userPosition" value={userPosition} onChange={this.handlePositionChange} />
                    <br/>
                    <textarea placeholder="Main Tasks" name="userTasks" value={userTasks} onChange={this.handleTasksChange}/>
                    <br/>
                    <input type = "text" placeholder="Dates Worked" name="userDates" value={userDates} onChange={this.handleDatesChange} />
                    <br/>
                    <button>Submit</button>
                </form>
                
            </>
            
        )
    }
}

export default WorkExperience;