const ContactList = ({ contacts }) => {
  return (
    <>
      <ul>
        {contacts.map(({ name, id, number }) => {
          return (
            name && (
              <li key={id}>
                {' '}
                {name}: {number}
              </li>
            )
          );
        })}
      </ul>
    </>
  );
};
export default ContactList;
