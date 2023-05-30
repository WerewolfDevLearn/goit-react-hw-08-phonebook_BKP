import ContactForm from '../components/Forms/ContactForm';
import ContactsList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import AppStl from './Pages.module.css';
import usePHBState from '../redux/selectors';
import { fetchContacts } from '../redux/contactsOps';
import { useEffect } from 'react';
import { useAppDispatch } from '../redux/store';
import { IContact } from '../types';
import Loader from '../components/Loader/Loader';
import Error from '../components/Error/Error';

export default function App() {
  const dispatch = useAppDispatch();
  const { contacts, filter } = usePHBState();
  const { items, error, isLoading } = contacts;
  console.log(error);
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
    <div className={AppStl.container}>
      <h2 className={AppStl.heading}>PhoneBook</h2>
      <ContactForm />
      <h2 className={AppStl.heading}>Contacts</h2>
      {items.length > 1 && <Filter />}
      {items.length > 0 && !error && !isLoading && (
        <ContactsList visibleContacts={visibleContacts} />
      )}
      {isLoading && <Loader />}
      {error && <Error message={error} />}
    </div>
  );
}
