import React from 'react';
import GeneralInfo from './GeneralInfo.js';
import EducationalExperience from './EducationalExperience';
import WorkExperience from './WorkExperience';
import DisplayEducation from './DisplayEducation.js';
import uniqid from "uniqid";

class PageDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleSchoolChange = this.handleSchoolChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.onSubmitEducationTask = this.onSubmitEducationTask.bind(this);
        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handlePositionChange = this.handlePositionChange.bind(this);
        this.handleTaskChange = this.handleTaskChange.bind(this);
        this.handleDatesChange = this.handleDatesChange.bind(this);
        this.onSubmitWork = this.onSubmitWork.bind(this);
        this.state = {     
            name: '',
            email: '',
            phone: '',
            educationalExperience: {
                schoolName: '',
                titleOfStudy: '',
                dateOfStudy: '',
                id: uniqid()
            },
            educationArray: [],
            workExperience: {
                companyName: '',
                positionTitle: '',
                mainTasks: '',
                datesWorked: '',
                id: uniqid()
            },
            workArray: []
        }
    }
    
    handleNameChange(userName){
        this.setState({name: userName});
    }

    handleEmailChange(userEmail){
        this.setState({email: userEmail});
    }

    handlePhoneChange(userPhone){
        this.setState({phone: userPhone});
    }

    handleSchoolChange(userSchoolName){
        this.setState({
            educationalExperience: {
                schoolName: userSchoolName,
                titleOfStudy: this.state.educationalExperience.titleOfStudy,
                dateOfStudy: this.state.educationalExperience.dateOfStudy,
                id: this.state.educationalExperience.id
            },
        });
    }

    handleTitleChange(userTitle){
        this.setState({
            educationalExperience: {
                titleOfStudy: userTitle,
                schoolName: this.state.educationalExperience.schoolName,
                dateOfStudy: this.state.educationalExperience.dateOfStudy,
                id: this.state.educationalExperience.id
            },
        });
    }

    handleDateChange(userDate){
        this.setState({
            educationalExperience: {
                schoolName: this.state.educationalExperience.schoolName,
                titleOfStudy: this.state.educationalExperience.titleOfStudy,
                dateOfStudy: userDate,
                id: this.state.educationalExperience.id
            },
        });
    }

    onSubmitEducationTask = (event) => {    
        event.preventDefault();
        this.setState( {
            educationArray: this.state.educationArray.concat(this.state.educationalExperience),
            educationalExperience: {
                schoolName: '',
                titleOfStudy: '',
                dateOfStudy: '',
                id: uniqid()
            },
        });
    };

    handleCompanyChange(userCompany){
        this.setState({
            workExperience: {
                companyName: userCompany,
                positionTitle: this.state.workExperience.positionTitle,
                mainTasks: this.state.workExperience.mainTasks,
                datesWorked: this.state.workExperience.datesWorked,
                id: this.state.workExperience.id
            },
        });
    }

    handlePositionChange(userPosition){
        this.setState({
            workExperience: {
                companyName: this.state.workExperience.companyName,
                positionTitle: userPosition,
                mainTasks: this.state.workExperience.mainTasks,
                datesWorked: this.state.workExperience.datesWorked,
                id: this.state.workExperience.id
            },
        });
    }

    handleTaskChange(userTasks){
        this.setState({
            workExperience: {
                companyName: this.state.workExperience.companyName,
                positionTitle: this.state.workExperience.positionTitle,
                mainTasks: userTasks,
                datesWorked: this.state.workExperience.datesWorked,
                id: this.state.workExperience.id
            },
        });
    }

    handleDatesChange(userDates){
        this.setState({
            workExperience: {
                companyName: this.state.workExperience.companyName,
                positionTitle: this.state.workExperience.positionTitle,
                mainTasks: this.state.workExperience.mainTasks,
                datesWorked: userDates,
                id: this.state.workExperience.id
            },
        });
    }

    onSubmitWork = (event) => {    
        event.preventDefault();
        this.setState( {
            workArray: this.state.workArray.concat(this.state.workExperience),
            workExperience: {
                companyName: '',
                positionTitle: '',
                mainTasks: '',
                datesWorked: '',
                id: uniqid()
            },
        });
    };

    render() {
        const { name, email, phone, educationalExperience, educationArray, workExperience } = this.state;
        return(
            <div>
                <h1>Curriculum Vitae</h1>
                <h3>General Info</h3>
                <GeneralInfo 
                    userName={name} 
                    userEmail={email} 
                    userPhone={phone} 
                    onNameChange={this.handleNameChange} 
                    onEmailChange={this.handleEmailChange} 
                    onPhoneChange={this.handlePhoneChange}/>
                <h3>Educational Experience</h3>
                <EducationalExperience  
                    userSchoolName={educationalExperience.schoolName} 
                    userTitle={educationalExperience.titleOfStudy} 
                    userDate={educationalExperience.dateOfStudy}
                    onSchoolChange={this.handleSchoolChange}
                    onTitleChange={this.handleTitleChange}
                    onDateChange={this.handleDateChange}
                    submitEducationTask={this.onSubmitEducationTask}/>
                <h3>Work Experience</h3>
                <WorkExperience
                    userCompany={workExperience.companyName}
                    userPosition={workExperience.positionTitle}
                    userTasks={workExperience.mainTasks}
                    userDates={workExperience.datesWorked}
                    onCompanyChange={this.handleCompanyChange}
                    onPositionChange={this.handlePositionChange}
                    onTasksChange={this.handleTaskChange}
                    onDatesChange={this.handleDatesChange}
                    submitWork={this.onSubmitWork}/>
                <h1>Curriculum Vitae</h1>
                <h3>General Info</h3>
                <p>Name: {this.state.name}</p>
                <p>Email: {this.state.email}</p>
                <p>Phone: {this.state.phone}</p>
                <h3>Educational Experience</h3>
                <DisplayEducation myArray={educationArray}/>
                <h3>Work Experience</h3>
            </div>
        )
    }
}

export default PageDisplay;