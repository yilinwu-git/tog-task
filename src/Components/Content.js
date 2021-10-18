import React, {useState} from 'react'
import WorkSpacesList from './WorkSpacesList';
import '../styles/content.scss';


const Content = ({data}) => {


    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className="content">
            <h1 className="content-heading">{data.title}</h1>
            <div className={click ? 'content-intro ellipsis-content' : 'content-intro ellipsis-content ellipsis-added'}>{data.intro}

                <p className="ellipsis-button" onClick={handleClick}>
                    <i className={click ? 'fas fa-angle-up' : 'fas fa-angle-down'} />
                </p>
            </div>

            {data.workspaces.length > 0 &&
                <div  className="content-work-space-list">
                    <WorkSpacesList workspaces={data.workspaces} /> 
                </div>
            }
        </div>
    )
}

export default Content;
