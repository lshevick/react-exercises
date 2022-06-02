import { useState } from "react";

const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    address: '',
    phoneNum: '',
};

const ContactForm = ({ addContact }) => {
    const [state, setState] = useState(INITIAL_STATE)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.firstName.trim().length === 0 && state.lastName.trim().length === 0) {
            return;
        }

        addContact(state);
        setState(INITIAL_STATE);

    }

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <form onSubmit={handleSubmit} className='contact-form'>

            <label htmlFor="first-name"></label>
            <input id='first-name' name='firstName' type="text" autoComplete="off" value={state.firstName} onChange={handleChange} placeholder='Frist Name'/>

            <label htmlFor="last-name"></label>
            <input id='last-name' name='lastName' type="text" autoComplete="off" value={state.lastName} onChange={handleChange} placeholder='Last Name'/>

            <label htmlFor="address"></label>
            <input id='address' name='address' type="text" autoComplete="off" value={state.address} onChange={handleChange} placeholder='Address'/>

            <label htmlFor="phone-num"></label>
            <input id='phone-num' name='phoneNum' type="text" autoComplete="off" value={state.phoneNum} onChange={handleChange} placeholder='Phone Number'/>

            <button type='submit'>Add Contact</button>
        </form>
    );
}

export default ContactForm;