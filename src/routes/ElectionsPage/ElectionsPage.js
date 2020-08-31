import React, { Component } from 'react';
import { StyledElections } from './ElectionsPage.style';
import purpose from '../../images/Purpose_of_Elections.pdf';

export default class ElectionsPage extends Component {
    render() {
        return (
            <StyledElections>
                <a href={purpose} target="_blank" rel="noopener noreferrer">
                    Purpose of Elections
                </a>
            </StyledElections>
        )
    }
}