import React from 'react';

class DisplayEducation extends React.Component {
    render() {
        const { myArray } = this.props;
        return(
            <>
                {myArray.map((arrayObject) => {
                    return <>                            
                            <p contentEditable>{arrayObject.schoolName}</p>
                            <p contentEditable>{arrayObject.titleOfStudy}</p>
                            <p contentEditable>{arrayObject.dateOfStudy}</p>
                            <br></br>
                        </>
                })}        
            </>
            
        )
    }
}

export default DisplayEducation;