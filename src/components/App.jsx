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
  contactsGenerate = contacts => {
    return (
      <ul>
        {contacts.map(({ name, id }) => {
          if (name) {
            return <li key={id}>{name}</li>;
          }
        })}
      </ul>
    );
  };
  nameList = name => {
    this.setState(prevState => {
      prevState.contacts.push({ name, id: nanoid() });
    });
    this.contactsGenerate(this.state.contacts);
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm nameList={this.nameList} />
        <ContactList
          contacts={this.state.contacts}
          contactsGenerate={this.contactsGenerate}
        />
      </>
    );
  }
}

export default App;
