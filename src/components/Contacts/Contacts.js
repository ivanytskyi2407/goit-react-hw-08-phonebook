import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  addContact,
  fetchContacts,
  removeContact,
} from 'redux/contacts/contactsOperations';
import s from './Contacts.module.css';
import Filter from '../Filter/Filter';

export const Contacts = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { items, filter } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <div className={s.div}>
      <div>
        <h3 className={s.title}>New Contact</h3>
        <form className={s.form} onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            placeholder="Name"
            className={s.input}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <input
            onChange={handleChange}
            placeholder="Number"
            className={s.input}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className={s.button} type="submit">
            Add Contact
          </button>
        </form>
      </div>

      <div>
        <Filter />
        <ul>
          {items
            .filter(({ name }) =>
              name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(contact => {
              return (
                <li key={contact.id} className={s.item}>
                  <button
                    key={contact.id}
                    name={contact.name}
                    className={s.buttonDelete}
                    type="button"
                    onClick={() => dispatch(removeContact(contact.id))}
                  >
                    Delete
                  </button>
                  {contact.name}: {contact.number}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
