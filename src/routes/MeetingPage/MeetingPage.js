import React, { Component } from 'react';
import { StyledMeetingPage } from './MeetingPage.style';

export default class MeetingPage extends Component {
    renderIntro(intro) {
        return intro.map((para) => <p>{para}</p>)
    }

    renderOldBusiness(oldBusiness) {
        return oldBusiness.map((para) => <p>{para}</p>)
    }

    renderNewBusiness(newBusiness) {
        return newBusiness.map((para) => <p>{para}</p>)
    }

    renderResidentComments(residentComments) {
        return residentComments.map((para) => <p>{para}</p>)
    }
    render() {
        const { meeting } = this.props.location.state;
        const { date, intro, oldBusiness, newBusiness, residentComments, nextMeeting, submittedBy } = meeting;
        
        return (
            <StyledMeetingPage>
                <h2>LPGRA Meeting Minutes from {date.month} {date.day}, {date.year}</h2>
                {this.renderIntro(intro)}
                <h3>Old Business</h3>
                {this.renderOldBusiness(oldBusiness)}
                <h3>New Business</h3>
                {this.renderNewBusiness(newBusiness)}
                <h3>Resident's Comments and Questions</h3>
                {this.renderResidentComments(residentComments)}
                {!nextMeeting
                    ? null
                    : <p>Next meeting will be held {nextMeeting}</p>}
                {!submittedBy
                    ? null
                    : <p>Submitted by {submittedBy}</p>}
            </StyledMeetingPage>
        )
    }
}