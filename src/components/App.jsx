import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { render } from 'react-dom';
import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter /Filter ';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [{ name: '', id: nanoid() }],
    filter: '',
  };

  // getNumber = number => {
  //   return number;
  // };

  addContact = ({ name, number }) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { name, id: nanoid() }],
    }));
    console.log(number);
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}

export default App;
