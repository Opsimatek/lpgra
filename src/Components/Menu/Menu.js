import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.style';

const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
            <a href="/">
                Home
            </a>
            <a href="/">
                Newletters
            </a>
            <a href="/">
                Meetings
            </a>
            <a href="/board">
                Meet The Board
            </a>
            <a href="/links">
                Informational Links
            </a>
            <a href="/">
                Contact
            </a>
        </StyledMenu>
    )
}
Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu