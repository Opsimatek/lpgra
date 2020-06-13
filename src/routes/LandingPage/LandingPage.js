import React, { Component } from 'react';
import photo from '../../images/stockPhoto.jpg';
import './LandingPage.css';

export default class LandingPage extends Component {
    render() {
        return (
            <div className='landingPage'>
                <div className='purpose'>
                    <p>
                        We are the <span className='name'>Las Palmas Grand Residents Association</span>, and our purpose is to enhance the quality of life within Las Palmas Grand through communication and informational meetings, as well as to provide an organized approach for resident and management interaction.
                    </p>

                </div>
                <img src={photo} alt="friends looking into the sunset"></img>
                <div className="meeting">
                    <p>
                        Come join us! We meet the first Thursday of every month at 9:30am in the cardroom and we'd love to see you there. Feel free to bring any questions and concerns you may have.
                    </p>
                </div>
            </div>
        )
    }
}