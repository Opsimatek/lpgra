import React, { Component } from 'react';
import { NeighborhoodWatchData, NeighborhoodWatchMinutesData } from '../../Data/NeighborhoodWatchData';
import { StyledNeighboorhoodWatchList } from './NeighborhoodWatchPage.style';

export default class NeighborhoodWatchPage extends Component {
    renderNWData(dataArray) {
        return !dataArray.length
            ? <p>Currently no neighborhood watch info available. Please try back later.</p>
            : dataArray.map((datum) => <li>
                <a href={datum.path} target= '_blank' rel="noopener noreferrer">
                    {datum.title}
                </a>
            </li>)
    }

    render() {
        return (
            <StyledNeighboorhoodWatchList>
                <h2>Neighborhood Watch Program</h2>
                {this.renderNWData(NeighborhoodWatchData)}
                <h2>Neighborhood Watch Meeting Minutes</h2>
                {this.renderNWData(NeighborhoodWatchMinutesData.reverse())}
            </StyledNeighboorhoodWatchList>
        )
    }
}