import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    this.state.contacts.find(obj => obj.name === name)
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, { name, id: nanoid(), number }],
        }));
  };

  deleteContact = ContactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => ContactId !== contact.id),
    }));
  };

  updateFilterInState = value => {
    this.setState({ filter: value });
  };

  render() {
    const { filter, contacts } = this.state;
    const loweredFilter = filter.toLowerCase();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h1>Contacts</h1>
        <Filter onChange={this.updateFilterInState} value={filter} />
        <ContactList
          deleteContact={this.deleteContact}
          contacts={contacts.filter(({ name }) =>
            name.toLowerCase().includes(loweredFilter)
          )}
          filter={filter}
        />
      </>
    );
  }
}

export default App;
