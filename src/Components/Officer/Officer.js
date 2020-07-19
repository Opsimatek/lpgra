import React, { Component } from 'react';
import { StyledOfficer } from './Officer.style';

export default class Officer extends Component {
    render() {
        const { officer } = this.props;

        const {
            name,
            position,
            term,
            unit,
            phoneNumber,
            email
        } = officer;
        
        return (
            <StyledOfficer>
                <h2>{position}</h2>
                <h3>{name}</h3>
                <p>Unit #{unit}</p>
                <p>Phone: {phoneNumber}</p>
                <p>Email: {email}</p>
                <p>Current term ends November {term}</p>
            </StyledOfficer>
        )
    }  
}

