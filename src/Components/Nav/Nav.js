import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Burger, Menu } from '../../Components';
import { StyledNav } from './Nav.style';   
        
function Nav() {
    const [open, setOpen] = useState(false);
    return (
        <StyledNav>
            <div>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
            <h1>
                <Link to="/">Las Palmas Grand Residents' Association - LPGRA</Link>
            </h1>
        </StyledNav>
    )
}

export default Nav;