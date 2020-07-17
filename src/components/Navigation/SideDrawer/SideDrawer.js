import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';
import HamburgerIcon from './HamburgerIcon/HamburgerIcon';

const sideDrawer = (props) => {

    let attachedClasses = ['SideDrawer', 'Close'];
    let openedHamburgerIcon = ['NavIcon', ''];
    if (props.open) {
        attachedClasses = ['SideDrawer', 'Open'];
        openedHamburgerIcon = ['NavIcon', 'open'];
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <HamburgerIcon opened={openedHamburgerIcon.join(' ')} clicked={props.closed} />
                <Logo />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;