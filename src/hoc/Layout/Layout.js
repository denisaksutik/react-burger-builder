import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSideDrawer: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    handleClick() {
        this.setState(state => ({
            showSideDrawer: !state.showSideDrawer
        }));
    }

    render() {
        return (
            <Aux>
                <Toolbar hamburgerIconCliked={this.handleClick} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;