import { Contacts } from './ContactList_components/Contacts';
import { ContactForm } from './ContactList_components/ContactForm';
import useState, { useEffect } from "react";

const DATA = [
    { firstName: 'John', lastName: 'Doe', address: '123 Main St', phoneNum: '(999)999-9999' },
    { firstName: 'John', lastName: 'Doe', address: '123 Main St', phoneNum: '(999)999-9999' },
    { firstName: 'John', lastName: 'Doe', address: '123 Main St', phoneNum: '(999)999-9999' },
];


export const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const [uid, setUid] = useState(1);


    useEffect(() => {
        setContacts(DATA);
    }, []);

    const addContact = (firstName, lastName, address, phoneNum) => {

        const newContact = {
            id: uid,
            firstName,
            lastName,
            address,
            phoneNum,
        }

        setContacts([...contacts, newContact]);
        setUid(uid + 1);
    }

    return (<div className="contact-list">

        <ContactForm addContact={addContact} />

        <Contacts />

    </div>
    );
}
