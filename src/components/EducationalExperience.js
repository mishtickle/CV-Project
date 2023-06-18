import React from 'react';

class EducationalExperience extends React.Component {
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
        const { schoolName, titleOfStudy, dateOfStudy } = this.props;
        return(
            <>
                <form label="Educational Experience" preventDefault>
                    <input type = "text" placeholder="School Name" name="schoolName" value={schoolName} onChange={this.onChange} />
                    <br/>
                    <input type = "text" placeholder="Title of Study" name="titleOfStudy" value={titleOfStudy} onChange={this.onChange} />
                    <br/>
                    <input type="text" placeholder="Date of Study" name="dateOfStudy" value={dateOfStudy} onChange={this.onChange} />
                    <br/>
                    <button onClick={ (e) => this.handleClick(e)}>Submit</button>
                </form>
                
            </>
            
        )
    }
}

export default EducationalExperience;