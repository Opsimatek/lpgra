import React from 'react';
import { Link } from 'react-router-dom';
import { StyledMinutes } from './Minutes.style';

export default function Minutes(props) {
    const { meeting } = props;
    return (
        <Link 
            to={{
                pathname: `/minutes/${meeting.id}`,
                state: {
                    meeting
                }
            }} 
        >
            <li>
                {meeting.date.month}{" "}{meeting.date.year}
            </li>
        </Link>
    )
}