import React, { useState } from 'react';
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
                Las Palmas Grand Residents' Association - LPGRA
            </h1>
        </StyledNav>
    )
}

export default Nav;