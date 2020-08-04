/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import MinutesData from '../../Data/MinutesData';
import schedule from '../../images/2020_Meetings.pdf';
import { Minutes } from '../../Components';
import { StyledMinutesList } from './MinutesListPage.style'

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
                <a href={schedule}>Click here for 2020 Meeting Schedule</a>
                <h2>Meetings Minutes List</h2>
                {this.renderMinutes()}
            </StyledMinutesList>
        )
    }
}