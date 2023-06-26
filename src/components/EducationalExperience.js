import React from 'react';

class EducationalExperience extends React.Component {
    constructor(props){
        super(props);
        this.handleSchoolChange = this.handleSchoolChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmitEducationTask = this.handleSubmitEducationTask.bind(this);
    }

    handleSchoolChange(event) {
        this.props.onSchoolChange(event.target.value);
    }

    handleTitleChange(event) {
        this.props.onTitleChange(event.target.value);
    }

    handleDateChange(event) {
        this.props.onDateChange(event.target.value);
    }

    handleSubmitEducationTask(event){
        this.props.submitEducationTask(event);
    }

    render() {
        const { userSchoolName, userTitle, userDate } = this.props;
        return(
            <>
                <form onSubmit={this.handleSubmitEducationTask} label="Educational Experience">
                    <input type = "text" placeholder="School Name" name="userSchoolName" value={userSchoolName} onChange={this.handleSchoolChange} />
                    <br/>
                    <input type = "text" placeholder="Title of Study" name="userTitle" value={userTitle} onChange={this.handleTitleChange} />
                    <br/>
                    <input type="text" placeholder="Date of Study" name="userDate" value={userDate} onChange={this.handleDateChange} />
                    <br/>
                    <button>Submit</button>
                </form>
                
            </>
            
        )
    }
}

export default EducationalExperience;