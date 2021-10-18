import React, {useState} from 'react';
import '../styles/dropdown.scss';

const Dropdown = () => {


    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    return (
        <>
            <ul  onClick={handleClick}
                 className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
                 <li onClick={() => setClick(false)}> <a href="#item1"className='dropdown-link'>Item 1</a></li>
                 <li onClick={() => setClick(false)}> <a href="#item2"className='dropdown-link'>Item 2</a></li>
                 <li onClick={() => setClick(false)}> <a href="#item3"className='dropdown-link'>Item 3</a></li>
            </ul>
        </>
    )
}

export default Dropdown;
