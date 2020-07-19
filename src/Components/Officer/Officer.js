import React, { Component } from 'react';
// import { photo } from '../../images';
// import { StyledOfficer } from './Officer.style';

export default class Officer extends Component {
    render() {
        // console.log('Props: ', this.props)
        const {
            name,
            position,
            photo,
            term,
            unit,
            phone,
            email
        } = this.props;
        console.log('photo: ', photo);
        return (
            <li>
                <h2>{position}</h2>
                <h3>{name}</h3>
                {/* <img src={`../../images/${photo}`} alt={name} /> */}
                <p>Current term ends November {term}</p>
                <p>Unit #{unit}</p>
                <p>Phone: {phone}</p>
                <p>Email: {email}</p>
            </li>
        )
    }  
}

