import { Component } from 'preact';
import RectangleHeader from '../rectangle-header';
import axios from 'axios';
import linesImage from '../../assets/lines.png';
import linesFormImage from '../../assets/lines-form.png';
import linesTextImage from '../../assets/lines-text.png';
import LineSeperator from '../line-seperator';
import Form from '../form';
import EventText from './../event-text';
import LecturersSection from './../lecturers-section';
import Footer from '../footer';
import LinkedinBtn from '../linkedin-register-btn';
import connectWitLinkedin from '../../assets/Logo-2CRev-75px-R.png';
import headerImage from '../../assets/header-image.jpg';

const url = 'https://blockchain-meetup-api.herokuapp.com/linkedin';

export default class Main extends Component {
  state = {
    registered: false,
    linkedinText: 'הירשמו בקלות עם לינקאדין',
    formText: 'או פשוט מלאו את הפרטים הבאים:',
    blockchainText: 'BLOCKCHAIN DISRUPT',
    lecturersData: [
      { name: 'שם מרצה', bio: 'BIO', image: '' },
      { name: 'שם מרצה', bio: 'BIO', image: '' },
      { name: 'שם מרצה', bio: 'BIO', image: '' }
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
      <div className="container">
        <div className="header">
          <img src={headerImage} />
        </div>
        <RectangleHeader
          image={linesImage}
          text={linkedinText}
          link={false}
          classes="linkedin"
        />
        <LineSeperator />
        <LinkedinBtn link={url} classes="linkedin" image={connectWitLinkedin} />
        <RectangleHeader
          image={linesFormImage}
          text={formText}
          link={false}
          classes="form"
        />
        <LineSeperator />
        <Form />

        {/* 
          <RectangleHeader
          image={linesTextImage}
          text={blockchainText}
          link={false}
          classes="form"
          />
            <LineSeperator circle={true} />
           <EventText />
          <LecturersSection lecturersData={lecturersData} />
        */}
        <Footer />
      </div>
    );
  }
}
