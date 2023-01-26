import React, { Component } from 'react';
import { render } from 'react-dom';
import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter /Filter ';
import ContactList from './ContactList/ContactList';
// import { contactsGenerate } from './ContactList/ContactList';
class App extends Component {
  state = {
    contacts: [{ name: 'jjj', id: 'k' }],
    filter: '',
  };
  contactsGenerate = contacts => {
    console.log('one two three');
    return (
      <ul>
        {contacts.map(({ name, id }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
    );
  };
  nameList = name => {
    this.setState(prevState => {
      prevState.contacts.push({ name, id: 'koko' });
    });
    this.contactsGenerate(this.state.contacts);
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm nameList={this.nameList} ContactList={ContactList} />
        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}

export default App;
