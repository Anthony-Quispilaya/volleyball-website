import contacts from '../data/contacts.json';
import ContactCard from './ContactCard';
import conversations from '../data/conversations.json';

function ContactList({ onContactClick }) {
  return (
    <div>
      {contacts.map((contact) => {
        const convo = conversations[contact.id];
        const lastmsg = convo && convo.length > 0 ? convo[convo.length - 1].text : null;
        const lastmsgdate = convo && convo.length > 0 ? convo[convo.length - 1].date : null;

        return (
          <div onClick={() => onContactClick(contact.id)} key={contact.id}>
            <ContactCard
              name={contact.name}
              lastmsg={lastmsg}
              avatar={contact.avatar}
              date={lastmsgdate}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ContactList;
