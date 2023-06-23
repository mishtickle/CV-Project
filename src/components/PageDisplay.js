import React from 'react';
import GeneralInfo from './GeneralInfo.js';
import EducationalExperience from './EducationalExperience';
import WorkExperience from './WorkExperience';

class PageDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.state = {
            companyName: '',
            positionTitle: '',
            mainTasks: '',
            datesWorked: '',
            name: 'wow',
            email: '',
            phone: '',
            schoolName: '',
            titleOfStudy: '',
            dateOfStudy: ''
        }
    }
    
    handleNameChange(userName){
        this.setState({name: userName});
    }

    render() {
        const { name, email, phone, schoolName, titleOfStudy, dateOfStudy, companyName, positionTitle, mainTasks, datesWorked } = this.state;
        return(
            <div>
                <h1>Curriculum Vitae</h1>
                <h3>General Info</h3>
                <GeneralInfo userName={name} userEmail={email} userPhone={phone} onNameChange={this.handleNameChange}/>
                <h3>Educational Experience</h3>
                <EducationalExperience/>
                <h3>Work Experience</h3>
                <WorkExperience/>
                <h1>Curriculum Vitae</h1>
                <h3>General Info</h3>
                <p>{this.state.name}</p>
                <p>{this.state.email}</p>
                <p>{this.state.phone}</p>
            </div>
        )
    }
}

export default PageDisplay;