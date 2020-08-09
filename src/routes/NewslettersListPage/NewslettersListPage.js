import React, { Component } from 'react';
import Newsletters from '../../Data/Newsletters';
import { StyledNewslettersList } from './NewslettersListPage.style'

export default class NewslettersListPage extends Component {
    renderNewsletters() {
        return !Newsletters.length
            ? <p>Currently no newsletters available, please try back later.</p>
            : Newsletters.reverse().map((datum) => <Newsletters
                    key={datum.id}
                    meeting={datum}
                />
            )
    }

    render() {
        return (
            <StyledNewslettersList>
                <h2>Newsletters List</h2>
                {this.renderNewsletters()}
            </StyledNewslettersList>
        )
    }
}