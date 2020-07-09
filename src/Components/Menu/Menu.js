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
                Meeting Minutes
            </a>
            <a href="/">
                Informational Links
            </a>
            <a href="/">
                Meet The Board
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