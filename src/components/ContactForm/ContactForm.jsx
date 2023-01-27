import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: 'f',
    number: 1,
  };
  //   addContact = () => {};
  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.addContact(this.state);
        }}
      >
        <label>
          Name:{' '}
          <input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.inputChange}
          />
        </label>
        <label>
          Number:{' '}
          <input
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.inputChange}
          />
        </label>
        <button type="submit">Add contacts</button>
      </form>
    );
  }
}
export default ContactForm;
