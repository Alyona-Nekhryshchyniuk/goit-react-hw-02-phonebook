const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <ul>
        {contacts.map(({ name, id, number }, ind) => {
          return (
            name && (
              <li key={id}>
                {' '}
                {name}: {number}
                <button
                  onClick={() => {
                    deleteContact(id);
                  }}
                >
                  Delete
                </button>
              </li>
            )
          );
        })}
      </ul>
    </>
  );
};
export default ContactList;
