import React, { Component } from 'react';
// import { StyledBoard } from './BoardPage.style';
import { Officer } from '../../Components';
import Officers from '../../Data/Officers';

export default class BoardPage extends Component {
    renderOfficers = (Officers) => {
        Officers.map((officer) => {
            return (
                <Officer
                    // key={officer.id}
                    // position={officer.position}
                    // name={officer.name}
                    // unit={officer.unit}
                    // phoneNumber={officer.phoneNumber}
                    // term={officer.term}
                    // email={officer.email}
                    // photo={officer.photo}
                    officer={officer}
                />
            )
        })
    }
    render() {
        console.log("Officers", Officers);
        return (
            // <StyledBoard>
                <ul>
                    {this.renderOfficers(Officers)}
                </ul>
            // </StyledBoard>
        )
    }
}