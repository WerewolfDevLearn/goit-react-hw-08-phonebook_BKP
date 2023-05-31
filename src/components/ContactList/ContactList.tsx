import ContactListItem from './ContactListItem/ContactListItem';
import ContactListStl from './ContactListItem/ContactListItem.module.css';
import { deleteContact } from '../../redux/contactsOps';
import { IContact } from '../../types';
import { useAppDispatch } from '../../redux/store';
interface ContactsListProps {
  visibleContacts: IContact[];
}

export default function ContactsList({ visibleContacts }: ContactsListProps) {
  const dispatch = useAppDispatch();
  return (
    <ul className={ContactListStl.contactList}>
      {visibleContacts.map((visibleContact) => (
        <ContactListItem
          contact={visibleContact}
          onRemove={() => dispatch(deleteContact(visibleContact.id!))}
          key={visibleContact.id}
        />
      ))}
    </ul>
  );
}
