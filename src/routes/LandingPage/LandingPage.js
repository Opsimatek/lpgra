import React, { Component } from 'react';
import photo from '../../images/fountain.jpg';
import { StyledLandingPage } from './LandingPage.style';

export default class LandingPage extends Component {
    render() {
        return (
            <StyledLandingPage>
                <div>
                    <p>
                        We are the <span>Las Palmas Grand Residents' Association</span>, and our purpose is to enhance the quality of life within Las Palmas Grand through communication and informational meetings, as well as to provide an organized approach for resident and management interaction.
                    </p>
                    
                    <p>
                        Come join us! We meet the first Thursday of every month at 9:30am in the cardroom and we'd love to see you there. Feel free to bring any questions and concerns you may have.
                    </p>
                </div>
            </StyledLandingPage>
        )
    }
}