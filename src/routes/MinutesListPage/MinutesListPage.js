/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import MinutesData from '../../Data/MinutesData';
import schedule from '../../images/2021_Meetings.pdf';
import { Minutes } from '../../Components';
import { StyledMinutesList } from './MinutesListPage.style';
import october2020Minutes from '../../images/LPGRA_Minutes_of_Meeting_Oct_1_2020.pdf';
import november2020Minutes from '../../images/LPGRA_Minutes_November_5_2020.pdf';

export default class MinutesListPage extends Component {
    renderMinutes() {
        return !MinutesData.length
            ? <p>Currently no meeting minutes available, Please try back later.</p>
            : MinutesData.reverse().map((datum) => <Minutes
                    key={datum.id}
                    meeting={datum}
                />
            )
    }

    render() {
        return (
            <StyledMinutesList>
                <a href={schedule}>Click here for 2021 Meeting Schedule</a>
                <h2>Meetings Minutes List</h2>
                <a href={november2020Minutes} target="_blank" rel="noopener noreferrer">November 2020</a>
                <a href={october2020Minutes} target="_blank" rel="noopener noreferrer">October 2020</a>
                {this.renderMinutes()}
            </StyledMinutesList>
        )
    }
}