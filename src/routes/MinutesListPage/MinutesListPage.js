import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Minutes from '../../Data/Minutes';

export default class MinutesListPage extends Component {
    renderMinutes() {
        Minutes.map((meeting) => {
             return <Link to={{
                pathname:`/meeting/${meeting.id}`
             }}>
                {meeting.date.month}{" "}{meeting.date.year}
            </Link>
        })
    }

    render() {
        return (
            <>
                {this.renderMinutes()};
            </>
        )
    }
}