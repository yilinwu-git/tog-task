import React from 'react'
import WorkSpacesList from './WorkSpacesList';

const Content = ({data}) => {
    return (
        <>
            <h1>{data.title}</h1>
            <p>{data.intro}</p>
            {data.workspaces.length > 0 &&
                <WorkSpacesList workspaces={data.workspaces} /> 
            }
        </>
    )
}

export default Content;
