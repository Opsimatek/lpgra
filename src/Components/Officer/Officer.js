import React from 'react';

export default function Officer(props) {
    console.log('Props: ', props)
    return (
        <li>
            <h2>{this.props.position}</h2>
            <h3>{this.props.name}</h3>
            <img src={this.props.photo} alt={this.props.name} />
            <p>Current term ends November {this.props.term}</p>
            <p>Unit #{this.props.unit}</p>
            <p>Phone: {this.props.phone}</p>
            <p>Email: {this.props.email}</p>
        </li>
    )
}

