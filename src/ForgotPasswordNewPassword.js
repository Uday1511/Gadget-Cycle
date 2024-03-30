import TwoInputForm from "./TwoInputForm";
import { useState } from "react";
import updatePassword from "./services/updatePassword";

function ForgotPasswordNewPassword({onFinish}) {

    const [pass,setPass] = useState('');
    const [conpass, setConpass] = useState('');

    const handleSubmit = (input1, input2) => {
        onFinish(input1, input2);
    }


    return (
        <TwoInputForm heading="Forgot" subheading="Password?" placeholder1="New Password" placeholder2="Confirm Password" buttonContent="Continue" onFormSubmit={handleSubmit}/>
    );
}

export default ForgotPasswordNewPassword;
