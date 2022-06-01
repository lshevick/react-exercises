import { useState, useEffect } from "react";
import Contacts from './ContactList/Contacts';
import ContactForm  from './ContactList/ContactForm';

const DATA = [
    { id: 1, firstName: 'John', lastName: 'Doe', address: '123 Main St', phoneNum: '(999)999-9999' },
    { id: 2, firstName: 'Mike', lastName: 'Jones', address: '789 E Main St', phoneNum: '(281)303-8004' },
    { id: 3, firstName: 'John', lastName: 'Doe', address: '123 Main St', phoneNum: '(999)999-9999' },
];


const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const [uid, setUid] = useState(0);


    useEffect(() => {
        setContacts(DATA);
    }, []);

    const addContact = (newContact) => {
        newContact.id = uid;
        setContacts([...contacts, newContact]);
        setUid(uid + 1);
    }

    return (
        <div className="contact-list">

            <ContactForm addContact={addContact} />

            <Contacts contacts={contacts} />

        </div>
    );
}

export default ContactList;