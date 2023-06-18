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

    render() {
        const { name, email, phone, schoolName, titleOfStudy, dateOfStudy, companyName, positionTitle, mainTasks, datesWorked } = this.state;
        return(
            <div>
                <h1>Curriculum Vitae</h1>
                <h3>General Info</h3>
                <GeneralInfo/>
                <h3>Educational Experience</h3>
                <EducationalExperience/>
                <h3>Work Experience</h3>
                <WorkExperience/>
            </div>
        )
    }
}

export default PageDisplay;