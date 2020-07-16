import React, { Component } from 'react';
import { StyledBoard } from './BoardPage.style';
import Officers from '../../Data/Officers';

export default class BoardPage extends Component {
    renderOfficers() {
        return Officers.map((Officer) => {
            <Officer
                key={Officer.id}
                position={Officer.position}
                name={Officer.name}
                unit={Officer.unit}
                phoneNumber={Officer.phoneNumber}
                term={Officer.term}
                email={Officer.email}
                photo={Officer.photo}
            />
        })
    }
    render() {
        return (
            <StyledBoard>
                
            </StyledBoard>
        )
    }
}