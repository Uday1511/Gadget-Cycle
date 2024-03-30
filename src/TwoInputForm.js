import './TwoInputForm.css';
import ButtonUni from './ButtonUni';
import FormInput from './FormInput';
import { useState } from 'react';


function TwoInputForm({ heading, subheading, placeholder1, placeholder2, buttonContent, onFormSubmit }) {
    
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    const handleInputOneChange = (e) => {
      setInput1(e.target.value);
    }

    const handleInputtwoChange = (e) => {
      setInput2(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      onFormSubmit(input1, input2);
    }
    
    return (
      <div className='two-input-form'>
        <div className='heading'>
          <h1>{heading}</h1>
          <h4>{subheading}</h4>
        </div>
        <form onSubmit={onFormSubmit}>
          <FormInput 
            placeholder={placeholder1}
            onChange={handleInputOneChange}
            height="59.2px" 
            width="461px" 
            margin_top="42.21px" 
          />
          <FormInput 
            placeholder={placeholder2}
            height="59.2px" 
            width="461px" 
            margin_top="19.57px" 
            onChange={handleInputtwoChange}
          />
          <ButtonUni 
            content={buttonContent} 
            height="62px" 
            width="461px" 
            margin_top="39.84px"
            onClick={handleSubmit}
          />
        </form>
      </div>
    );
}
  
export default TwoInputForm;
