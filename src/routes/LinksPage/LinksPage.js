import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LinksPage extends Component {
    render() {
        return (
            <div>
                <h2>Informational Links</h2>
                <ul>
                    <li>
                        <a href="http://aamho.org/" target="_blank" rel="noopener noreferrer">The Arizona Association of Manufactured Home and RV Owners (AAMHO)</a>
                    </li>
                    <li>
                        <a href="http://thesman.com/" target="_blank" rel="noopener noreferrer">Thesman Communities</a>
                    </li>
                    <li>
                        <a href="http://treasurer.maricopa.gov/parcels/" target="_blank" rel="noopener noreferrer">Maricopa County Tax Information</a>
                    </li>
                    <li>
                        <a href="https://www.azgfd.com/" target="_blank" rel="noopener noreferrer">Arizona Game &amp; Fish</a>
                    </li>
                    <li>
                        <a href="https://www.wunderground.com/?query=85209" target="_blank" rel="noopener noreferrer">Local Weather</a>
                    </li>
                    <li>
                        <a href="https://www.fsl.org/" target="_blank" rel="noopener noreferrer">The Foundation of Senior Living</a>
                    </li>
                    <li>
                        <a href="https://www.va.gov/" target="_blank" rel="noopener noreferrer">U.S. Department of Veteran Affairs</a>
                    </li>
                    <li>
                        <a href="https://www.mesaaz.gov/" target="_blank" rel="noopener noreferrer">City of Mesa</a>
                    </li>
                    <li>
                        <a href="https://www.heart.org/" target="_blank" rel="noopener noreferrer">American Heart Association</a>
                    </li>
                    <li>
                        <a href="https://www.cancer.org/" target="_blank" rel="noopener noreferrer">American Cancer Society</a>
                    </li>
                    <li>
                        <a href="https://www.hov.org/" target="_blank" rel="noopener noreferrer">Hospice of the Valley</a>
                    </li>
                    <li>
                        <Link to="/bylaws">LPGRA Bylaws</Link>
                    </li>
                </ul>
            </div>
        )
    }
}