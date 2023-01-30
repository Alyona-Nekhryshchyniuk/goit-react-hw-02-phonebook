import PropTypes from 'prop-types';
import { Button } from '../Button.styled';
import { List, ListItem } from './List.styled';
import { RiContactsLine } from 'react-icons/ri';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <List>
        {contacts.map(({ name, id, number }) => {
          return (
            name && (
              <ListItem key={id}>
                <div>
                  <RiContactsLine /> {name}: {number}
                </div>
                <Button
                  onClick={() => {
                    deleteContact(id);
                  }}
                >
                  {' '}
                  Delete
                </Button>
              </ListItem>
            )
          );
        })}
      </List>
    </>
  );
};
ContactList.defaultProps = {
  contacts: [],
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  deleteContact: PropTypes.func,
};
export default ContactList;
