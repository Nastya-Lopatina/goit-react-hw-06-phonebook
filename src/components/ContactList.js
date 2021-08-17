import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/ContactList.module.css';
import { connect } from 'react-redux';
import actions from '../redux/Contacts/contact-actions'
//import { v4 as uuidv4 } from 'uuid';

const ContactList = ({contacts,onDeleteContact}) => (
    <ul className = {style.list}>
        {contacts.map(({name,number,id}) => (
        <li
        className = {style.list_name}
         key = {id}>
            {name + ':' + number}
            
            {<button
                className = {style.button}
                type = 'button'
                name = 'delete'
                onClick = {() => onDeleteContact(id) }>
                    Удалить
            </button>
            }
           
        </li>
          
         ))}
     
    </ul>
)

ContactList.propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    )
};


const getVisibleContacts = ({ filter, items }) => {
  const normalizedFilter = filter.toLowerCase();
  return items.filter(({ name }) =>
     name.toLowerCase().includes(normalizedFilter),
  );
};


const mapStateToProps = state => ({
    contacts: getVisibleContacts(state.contacts)
});

const mapDispatchToProps = dispatch => ({
    onDeleteContact: contactId => dispatch(actions.deleteContact(contactId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);


// const getVisibleContacts = ({ filter, items }) => {
//     return items.filter(({ name }) =>
//         name.toLowerCase().includes(filter.toLowerCase());
// };

// const mapSateToProps = state => ({
//     contacts: getVisibleContacts(state.contacts.items)
// });