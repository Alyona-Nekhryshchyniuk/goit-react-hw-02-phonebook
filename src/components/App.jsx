import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { render } from 'react-dom';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  //   filterList = ()=>{

  // }
  addContact = ({ name, number }) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { name, id: nanoid(), number }],
    }));
  };

  updateFilterInState = value => {
    this.setState({ filter: value });
  };

  render() {
    const filteredList = this.state.contacts.filter(({ name }) => {
      name.includes(this.state.filter);
    });

    // console.log(filteredList);
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h1>Contacts</h1>
        <Filter onChange={this.updateFilterInState} value={this.state.filter} />
        <ContactList
          contacts={
            // this.state.contacts
            this.state.contacts.length > 3 ? filteredList : this.state.contacts
          }
          filter={this.state.filter}
        />
      </>
    );
  }
}

export default App;
