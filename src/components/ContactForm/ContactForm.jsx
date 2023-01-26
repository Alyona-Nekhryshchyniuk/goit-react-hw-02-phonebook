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
          this.props.nameList(this.state.name);
        }}
      >
        <label>
          Name:{' '}
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.inputChange}
          />
        </label>
        <label>
          Phone:{' '}
          <input
            type="number"
            name="number"
            value={this.state.number}
            onChange={this.inputChange}
          />
        </label>
        <button type="button">Add contacts</button>
      </form>
    );
  }
}
export default ContactForm;
