import React from 'react';
import GeneralInfo from './GeneralInfo.js';
import EducationalExperience from './EducationalExperience';
import WorkExperience from './WorkExperience';

class PageDisplay extends React.Component {
    state = {
        companyName: '',
        positionTitle: '',
        mainTasks: '',
        datesWorked: '',
        name: '',
        email: '',
        phone: '',
        schoolName: '',
        titleOfStudy: '',
        dateOfStudy: ''
    }

    onChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        
        return(
            <div>
                <h1>Curriculum Vitae</h1>
                <h3>General Info</h3>
                <GeneralInfo onChange={this.onChange}/>
                <h3>Educational Experience</h3>
                <EducationalExperience onChange={this.onChange}/>
                <h3>Work Experience</h3>
                <WorkExperience onChange={this.onChange}/>
            </div>
        )
    }
}

export default PageDisplay;