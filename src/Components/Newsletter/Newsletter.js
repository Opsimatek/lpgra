import React from 'react';

export default function Newsletter(props) {
    const { newsletter } = props;
    return (
        <p>
            <a href={newsletter.path} target='_blank' rel="noopener noreferrer">
                {newsletter.name}
            </a>
        </p>
    )
}