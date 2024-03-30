import './FormInput.css';

function FormInput({ height, width, placeholder, margin_top, onChange, isPassword }) {
    return (
        <div>
            {((isPassword) ? ( 
                <input className='form-input' type="password" placeholder={placeholder} style={{height: height, width: width, marginTop: margin_top}} onChange={onChange}/>
            ) : (
                <input className='form-input' placeholder={placeholder} type='text' style={{height: height, width: width, marginTop: margin_top}} onChange={onChange}/>
            ))}
        </div>
    );
}

export default FormInput;
