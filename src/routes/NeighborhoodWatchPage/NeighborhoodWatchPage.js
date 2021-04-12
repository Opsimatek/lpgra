import React, { Component } from 'react';
import NeighborhoodWatchData from '../../Data/NeighborhoodWatchData';
import StyledNeighboorhoodWatchList from './NeighborhoodWatchPage.style';

export default class NeighborhoodWatchPage extends Component {
    renderNWData() {
        return !NeighborhoodWatchData.length
            ? <p>Currently no neighborhood watch info available. Please try back later.</p>
            : NeighborhoodWatchData.map((datum) => <li>
                <a href={datum.path} target= '_blank' rel="noopener noreferrer">
                    {datum.title}
                </a>
            </li>)
    }

    render() {
        return (
            <StyledNeighboorhoodWatchList>
                {this.renderNWData()}
            </StyledNeighboorhoodWatchList>
        )
    }
}