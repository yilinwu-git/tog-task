import React from 'react';
import WorkSpace from './WorkSpace';


const WorkSpacesList = ({workspaces}) => {

  return (

    <>        
       
            {workspaces.map((workspace)=> {

                return (
                  <div>
                    <WorkSpace workspace={workspace} /> 
                    <hr/>
                  </div>
                )                
            }   
            )}
        
    
     </>
)


}

export default WorkSpacesList;
