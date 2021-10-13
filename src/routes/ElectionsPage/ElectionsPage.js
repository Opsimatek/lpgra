import React, { Component } from 'react';
import { StyledElections } from './ElectionsPage.style';
import purpose from '../../images/Purpose_of_Elections.pdf';
import duties from '../../images/Board_Officer_Duties.pdf';
import questionnaire from '../../images/Candidate_Questionnaire_2020.pdf';
import committees from '../../images/COMMITTEES_AND_DUTIES.pdf';
// import notice from '../../images/Election_Meeting_Notice_2020.pdf';
import absentee from '../../images/ABSENTEE_BALLOT.pdf';
import mueller from '../../images/D_Mueller-Candidate_Questionnaire_2021.pdf';
import hammann from '../../images/D_Hammann-Questionnaire_2021.pdf';

export default class ElectionsPage extends Component {
    render() {
        return (
            <StyledElections>
                <h2>Information Regarding LPGRA Elections</h2>
                <a href={purpose} target="_blank" rel="noopener noreferrer">
                    Purpose of Elections
                </a>
                {/* <a href={notice} target="_blank" rel="noopener noreferrer">
                    Notice of Upcoming Election
                </a> */}
                <a href={questionnaire} target="_blank" rel="noopener noreferrer">
                    Questionnaire for Potential Candidates
                </a>
                <a href={duties} target="_blank" rel="noopener noreferrer">
                    Duties of Board Officers
                </a>
                <a href={committees} target="_blank" rel="noopener noreferrer">
                    Current Committees and Duties
                </a>
                <a href={absentee} target="_blank" rel="noopener noreferrer">
                    2021 Absentee Ballot
                </a>
                <ul>
                    <h2>Meet our 2021 Candidates</h2>
                    <li><a href={mueller} target="_blank" rel="noopener noreferrer">
                        Donna Mueller
                    </a></li>
                    <li><a href={hammann} target="_blank" rel="noopener noreferrer">
                        Dee Hammann
                    </a></li>
                </ul>
            </StyledElections>
        )
    }
}