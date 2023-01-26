const ContactList = arr => {
  const { contacts } = arr;
  console.log(contacts);

  return <>{contactsGenerate(contacts)}</>;
};
export default ContactList;
