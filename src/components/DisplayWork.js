import React from 'react';

class DisplayWork extends React.Component {
    render() {
        const { workArray } = this.props;
        return(
            <>
                {workArray.map((arrayObject) => {
                    return <>                            
                            <p>{arrayObject.companyName}</p>
                            <p>{arrayObject.positionTitle}</p>
                            <p>Tasks:</p>
                            <p>{arrayObject.mainTasks}</p>
                            <p>{arrayObject.datesWorked}</p>
                            <br></br>
                        </>
                })}        
            </>
            
        )
    }
}

export default DisplayWork;