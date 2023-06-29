import React from 'react';

class DisplayWork extends React.Component {
    render() {
        const { workArray } = this.props;
        return(
            <>
                {workArray.map((arrayObject) => {
                    return <>                            
                            <p contentEditable>{arrayObject.companyName}</p>
                            <p contentEditable>{arrayObject.positionTitle}</p>
                            <p>Tasks:</p>
                            <p contentEditable>{arrayObject.mainTasks}</p>
                            <p contentEditable>{arrayObject.datesWorked}</p>
                            <br></br>
                        </>
                })}        
            </>
            
        )
    }
}

export default DisplayWork;