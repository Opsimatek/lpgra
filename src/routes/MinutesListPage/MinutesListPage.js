/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import MinutesData from '../../Data/MinutesData';
import { Minutes } from '../../Components';
import { StyledMinutesList } from './MinutesListPage.style'

export default class MinutesListPage extends Component {
    renderMinutes() {
        return !MinutesData.length
            ? <p>Currently no meeting minutes available, Please try back later.</p>
            : MinutesData.map((datum) => <Minutes
                    key={datum.id}
                    meeting={datum}
                />
            )
    }

    render() {
        return (
            <StyledMinutesList>
                {this.renderMinutes()}
            </StyledMinutesList>
        )
    }
}