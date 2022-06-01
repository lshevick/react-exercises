
const Contacts = ({ uid, contacts }) => {

    const contactList = contacts.map((contact) => (

        <li key={contact.id}>
            <div className="contact-info">
                <ul>
                    <li>{contact.firstName}</li>
                    <li>{contact.lastName}</li>
                    <li>{contact.address}</li>
                    <li>{contact.phoneNum}</li>
                </ul>
            </div>
        </li>
    ));

    return (
        <ul className='contacts'>

            {contactList}

        </ul>
    );
}

export default Contacts;