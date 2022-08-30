import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { StyledLinks } from './LinksPage.style';
import LinksData from '../../Data/LinksData';

export default class LinksPage extends Component {
    renderLinks() {
        return !LinksData.length
            ? <p>Currently no links available, Please try back later.</p>
            : LinksData.map((link) => <li>
                    <a 
                        href={link.path} 
                        target='_blank' 
                        rel='noopener noreferrer'>
                            {link.name}
                    </a>
                </li>
            )
    }

    render() {
        return (
            <StyledLinks>
                <h2>Informational Links</h2>
                <ul>
                    {/* <li>
                        <Link to="/bylaws">LPGRA Bylaws</Link>
                    </li> */}
                    {this.renderLinks()}
                </ul>
            </StyledLinks>
        )
    }
}