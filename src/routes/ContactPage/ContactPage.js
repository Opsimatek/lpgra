import React, { Component } from 'react';
import { StyledContact } from './ContactPage.style';
import request from '../../images/request_form.pdf';

export default class ContactPage extends Component {
    render() {
        return (
            <StyledContact>
                <h2>
                    Contact Information for Las Palmas Grand Residents' Association
                </h2>
                <h3>
                    Mailing Address:
                </h3>
                <p>
                    2550 S. Ellsworth Rd. #666<br></br>
                    Mesa, AZ 85209
                </p>
                <h3>
                    Email:
                </h3>
                <a href="mailto:lpgraboard9@gmail.com?subject=Contact&nbsp;from&nbsp;Website">
                    lpgraboard@gmail.com 
                </a>
               
                <a href={request} target="_blank" rel="noopener noreferrer">Request/ Comment/ Compliment Form</a>

                <div>
                    <p>
                        If you'd like to contact the web developer you can 
                        <a href="mailto:shanemcneil19@gmail.com?subject=I&nbsp;saw&nbsp;the&nbsp;LPGRA&nbsp;Website">
                        here.
                    </a>
                    </p>
                </div>
            </StyledContact>
        )
    }
}