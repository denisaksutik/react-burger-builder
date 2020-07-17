import React from 'react';

import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import HamburgerIcon from '../SideDrawer/HamburgerIcon/HamburgerIcon';
import Aux from '../../../hoc/Aux/Aux';


const toolbar = (props) => {
    let hamburgerIcon = 'NavIcon';
    return (
        <Aux>
            <header className="Toolbar">
                <HamburgerIcon opened={hamburgerIcon} clicked={props.hamburgerIconCliked} />
                <Logo />
                <nav className="DesktopOnly">
                    <NavigationItems />
                </nav>
            </header>
        </Aux>
    )
}

export default toolbar;