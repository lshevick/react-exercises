import { add } from "date-fns";
import useState from "react";

export const ContactForm = ({ addContact }) => {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phoneNum: '',
    })


    return (
        <form className='contact-form'>

            <label htmlFor="first-name"></label>
            <input id='first-name' name='firstName' type="text" autoComplete="off" value={state.firstName} onChange={(e) => setState.firstName(e.target.value)}/>

            <label htmlFor="last-name"></label>
            <input id='last-name' name='lastName' type="text" autoComplete="off" value={state.lastName} onChange={(e) => setState.lastName(e.target.value)}/>

            <label htmlFor="address"></label>
            <input id='address' name='address' type="text" autoComplete="off" value={state.address} onChange={(e) => setState.address(e.target.value)}/>

            <label htmlFor="phone-num"></label>
            <input id='phone-num' name='phoneNum' type="text" autoComplete="off" value={state.phoneNum} onChange={(e) => setState.phoneNum(e.target.value)}/>

            <button type='submit'>Add Contact</button>
        </form>
    );
}
