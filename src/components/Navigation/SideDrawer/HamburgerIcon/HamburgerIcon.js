import React from 'react';

import './HamburgerIcon.css';

const hamburgerIcon = (props) => (
    <div onClick={props.clicked}
        className={props.opened} >
        <span></span>
        <span></span>
        <span></span>
    </div >
);

export default hamburgerIcon;