const ContactList = ({ contacts, contactsGenerate }) => {
  return <>{contactsGenerate(contacts)}</>;
};
export default ContactList;
