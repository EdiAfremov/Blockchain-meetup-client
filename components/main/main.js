import { Component } from 'preact';
import LinkedinBtn from '../linkedin-register';
import axios from 'axios';
import linesImage from '../../assets/lines.png';
import linesFormImage from '../../assets/lines-form.png';
import linesTextImage from '../../assets/lines-text.png';
import LineSeperator from '../line-seperator';
import lecturerOne from '../../assets/lecturer-1.png';
import Form from '../form';
import EventText from './../event-text';
import LecturersSection from './../lecturers-section';
import Footer from '../footer';

const url = 'https://blockchain-meetup-api.herokuapp.com/linkedin';

export default class Main extends Component {
  state = {
    registered: false,
    linkedinText: 'הירשמו בקלות עם לינקאדין',
    formText: 'או פשוט מלאו את הפרטים הבאים:',
    blockchainText: 'BLOCKCHAIN DISRUPT',
    lecturersData: [
      { name: 'שם מרצה', bio: 'BIO', image: lecturerOne },
      { name: 'שם מרצה', bio: 'BIO', image: lecturerOne },
      { name: 'שם מרצה', bio: 'BIO', image: lecturerOne }
    ]
  };
  componentWillMount() {
    const { Registered } = this.props;
  }

  render() {
    const {
      linkedinText,
      formText,
      blockchainText,
      lecturersData
    } = this.state;
    return (
      <div>
        <LinkedinBtn
          image={linesImage}
          text={linkedinText}
          link={url}
          classes="linkedin"
        />
        <LinkedinBtn
          image={linesFormImage}
          text={formText}
          link={false}
          classes="form"
        />
        <LineSeperator />
        <Form />
        <LinkedinBtn
          image={linesTextImage}
          text={blockchainText}
          link={false}
          classes="form"
        />
        <LineSeperator circle={true} />
        <EventText />
        <LecturersSection lecturersData={lecturersData} />
        <Footer />
      </div>
    );
  }
}
