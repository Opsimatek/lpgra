import React, { Component } from 'react';
import { StyledRequestForm } from './RequestFormPage.style';

export default class RequestFormPage extends Component {
    render() {
        return (
            <StyledRequestForm>
                <form action="https://formsubmit.co/LPGRABoard@gmail.com" method="POST">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="Jane Doe" required />
                    <br />
                    <label for="space">Space Number</label>
                    <input type="number" id="space" name="space number" placeholder="000" required />
                    <br />
                    <label for="phone">Telephone Number</label>
                    <input type="tel" id="phone" name="phone number" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                    <br />
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="ILoveLasPalmas@Grand.com" required />
                    <br />
                    <label for="comment">Request - Concern - Compliment</label>
                    <textarea type="text" id="comment" name="Request-Concern-Compliment" placeholder="Let us know how you feel here" required />
                    <br />
                    <button type="submit">Send</button>
                </form>
            </StyledRequestForm>
        )
    }
}