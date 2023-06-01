import ContactForm from '../components/Forms/ContactForm';
import ContactsList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import PagesSTL from './Pages.module.css';
import usePHBState from '../redux/selectors';
import { fetchContacts } from '../redux/contactsOps';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../redux/store';
import { IContact } from '../types';
import Loader from '../components/Loader/Loader';
import Error from '../components/Error/Error';
import Modal from '../components/Modal/Modal';

export default function ContactsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { contacts, filter } = usePHBState();
  const { items, error, isLoading } = contacts;

  const closeModal = () => {
    setIsOpen(false);
  };

  const getVisibleContacts = (items: IContact[]) => {
    return items.filter((item) =>
      item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );
  };
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const visibleContacts = getVisibleContacts(items);
  return (
    <div className={PagesSTL.container}>
      <h2 className={PagesSTL.heading}>PhoneBook</h2>
      <ContactForm />
      <h2 className={PagesSTL.heading}>Contacts</h2>
      {items.length > 1 && <Filter />}
      {items.length > 0 && !error && !isLoading && (
        <ContactsList visibleContacts={visibleContacts} onEdit={() => setIsOpen(true)} />
      )}
      {isLoading && <Loader />}
      {error && <Error message={error} />}
      <Modal isOpen={isOpen} onCloseModal={closeModal}>
        <ContactForm />
      </Modal>
    </div>
  );
}
