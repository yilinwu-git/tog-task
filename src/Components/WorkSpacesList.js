import React from 'react';
import WorkSpace from './WorkSpace';



const WorkSpacesList = ({workspaces}) => {

  return (
    <>               
      {workspaces.map((workspace)=> {
           return (
             <>
                <WorkSpace workspace={workspace} /> 
              </>
            )                
         }   
      )}  
    </>
  )
}

export default WorkSpacesList;
