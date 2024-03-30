import './AboutUsPage.css';
import AboutUsTopSection from './AboutUsTopSection';
import BigFormLabelInput from './BigFormLabelInput';
import ButtonUni from './ButtonUni';
import FormInput from './FormInput';
import Header from './Header';
import OurStorySection from './OurStorySection';
import OurTeamSection from './OurTeamSection';
import SectionHeadings from './SectionHeadings';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from './Footer';

function AboutUsPage() {

    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();

        const tempParams = {
            from_email: email,
            subject: subject,
            message: description
        }

        emailjs.send('service_dclgre5', 'template_mn1xa8f', tempParams, 'gSscQoEIBSasaNiYd')
        .then((result) => {
            console.log(result.text);
            setEmail('');
            setSubject('');
            setDescription('');
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div>
            <Header />
            <AboutUsTopSection />
            <OurStorySection />
            {/* <OurTeamSection /> */}
            <div className='contact-section'>
                <SectionHeadings heading="Contact Us" subheading_line1="Connect with GadgetCycle" subheading_line2="Your Gateway to Making a Difference" />
                <div className='contact-us-form'>
                    <BigFormLabelInput 
                        label="Your Email Address"
                        onChnage={(e) => handleEmailChange(e)}
                        value={email}
                        width="682.675px"
                    />
                    <BigFormLabelInput 
                        label="Subject"
                        onChnage={(e) => handleSubjectChange(e)}
                        value={subject}
                        width="682.675px"
                    />
                    <label className='contact-us-form-label'>
                        Description
                        <textarea
                            label="Description"
                            onChange={handleDescriptionChange}
                            value={description}
                            className='contact-us-form-des-textarea'
                        />
                    </label>
                    <ButtonUni 
                        content="Continue"
                        width="682.675px"
                        height="72.532px"
                        margin_top="38.82px"
                        onClick={handleClick}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUsPage;
