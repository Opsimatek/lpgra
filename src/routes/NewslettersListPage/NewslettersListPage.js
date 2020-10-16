import React, { Component } from 'react';
import NewslettersData from '../../Data/Newsletters';
import { StyledNewslettersList } from './NewslettersListPage.style';
import { Newsletter } from '../../Components';

export default class NewslettersListPage extends Component {
    renderNewsletters() {
        return !NewslettersData.length
            ? <p>Currently no newsletters available, please try back later.</p>
            : NewslettersData.reverse().map((datum) => <Newsletter
                    key={datum.id}
                    newsletter={datum}
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