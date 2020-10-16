import React from 'react';
import { StyledNewsletter } from './Newsletter.style';

export default function Newsletter(props) {
    const { newsletter } = props;
    return (
        <a href={newsletter.path} target='_blank' rel="noopener norefferer">
            {newsletter.name}
        </a>
    )
}