import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.style';

const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
            <a href="/">
                Home
            </a>
            <a href="/newsletters">
                Newsletters
            </a>
            <a href="/minutes">
                Meetings
            </a>
            <a href="/elections">
                Elections
            </a>
            <a href="/board">
                Meet The Board
            </a>
            <a href="/neighborhoodWatch">
                Neighborhood Watch
            </a>
            <a href="/links">
                Informational Links
            </a>
            <a href="/requestForm">
                Request Form
            </a>
            <a href="/contact">
                Contact
            </a>
        </StyledMenu>
    )
}
Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu