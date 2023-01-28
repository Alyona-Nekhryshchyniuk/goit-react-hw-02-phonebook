import PropTypes from 'prop-types';
import { Button } from '../Button.styled';
import { List, ListItem } from './List.styled';
import { MdOutlineContactPhone } from 'react-icons/md';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <List icon={<MdOutlineContactPhone />}>
        {contacts.map(({ name, id, number }) => {
          return (
            name && (
              <ListItem key={id}>
                {' '}
                {name}: {number}
                <Button
                  onClick={() => {
                    deleteContact(id);
                  }}
                >
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
