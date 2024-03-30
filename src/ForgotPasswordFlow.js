import React, { useState, Fragment } from 'react';
import './ForgotPasswordFlow.css';
import Header from './Header';
import ForgotPasswordEmail from './ForgotPasswordEmail';
import ForgotPasswordEnterCode from './ForgotPasswordEnterCode';
import ForgotPasswordNewPassword from './ForgotPasswordNewPassword';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { updatePassword } from 'firebase/auth';
import updatePass from './services/updatePassword';

function ForgotPasswordFlow() {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [code, setCode] = useState(0);
    const [genecode, setGenecode] = useState(0);
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const navigate = useNavigate();

    const handleEmailSubmit = (emailp) => {
        setEmail(emailp);

        const genCode = Math.floor(100000 + Math.random() * 900000);
        setGenecode(genCode);
        
        const tempParams = {
            to_email: emailp,
            code: genCode
        };

        emailjs.send('service_dclgre5', 'template_z4fmbb8', tempParams, 'gSscQoEIBSasaNiYd')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        setStep(2); 
    }

    const handleCodeSubmit = (codep) => {
        setCode(codep);
        console.log(codep);

        // if (codep == genecode) {
        //     setStep(3);
        // } else {
        //     navigate('/');
        // }
        setStep(3);
    }

    const handleNewPasswordSubmit = async (passwordp, confirmPasswordp) => {
       console.log(passwordp);
       console.log(confirmPasswordp);
       setPassword(passwordp);
       setNewPassword(confirmPasswordp);
       if (passwordp === confirmPasswordp) {
            try {
                await updatePass(email, passwordp);
            } catch (error) {
                console.error(error);
            }
       }
    }

    return (
        <div className='forgot-password-flow-container'>
            <Header />
            <div className='forgot-password-fragment'>
                {step == 1 && <ForgotPasswordEmail onNext={handleEmailSubmit}/>}
                {step == 2 && <ForgotPasswordEnterCode onCodeSubmit={handleCodeSubmit}/>}
                {step == 3 && <ForgotPasswordNewPassword onFinish={handleNewPasswordSubmit}/>}
            </div>
        </div>
    );
}

export default ForgotPasswordFlow;
