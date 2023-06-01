import ContactListItem from './ContactListItem/ContactListItem';
import ContactListStl from './ContactListItem/ContactListItem.module.css';
import { deleteContact } from '../../redux/contactsOps';
import { IContact } from '../../types';
import { useAppDispatch } from '../../redux/store';
interface ContactsListProps {
  visibleContacts: IContact[];
  onEdit(): void;
}

export default function ContactsList({ visibleContacts, onEdit }: ContactsListProps) {
  const dispatch = useAppDispatch();
  return (
    <ul className={ContactListStl.contactList}>
      {visibleContacts.map((visibleContact) => (
        <ContactListItem
          contact={visibleContact}
          onEdit={onEdit}
          onRemove={() => dispatch(deleteContact(visibleContact.id!))}
          key={visibleContact.id}
        />
      ))}
    </ul>
  );
}
