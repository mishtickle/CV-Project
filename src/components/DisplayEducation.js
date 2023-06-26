import React from 'react';

class DisplayEducation extends React.Component {
    render() {
        const { myArray } = this.props;
        return(
            <>
                {myArray.map((arrayObject) => {
                    return <>                            
                            <p>{arrayObject.schoolName}</p>
                            <p>{arrayObject.titleOfStudy}</p>
                            <p>{arrayObject.dateOfStudy}</p>
                            <br></br>
                        </>
                })}        
            </>
            
        )
    }
}

export default DisplayEducation;