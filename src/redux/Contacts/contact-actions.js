import { createAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';


 const addContact = createAction('ContactForm/addContact',
    ({ name, number }) => {
        return {
            payload: { name, number, id: uuidv4() }
        }
    }
);

const deleteContact = createAction('ContactForm/deleteContact');

const changeFilter = createAction('ContactForm/changeFilter');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };




// const addContact= ({ name, number, id }) => ({
    
//     type: Types.ADD_CONTACT,
//     payload: { name, number, id: uuidv4() },
    
// });

// const deleteContact = contactId => ({
//     type: Types.DELETE_CONTACT,
//     payload: contactId
// });

// const changeFilter = value => ({
//     type: Types.CHANGE_FILTER,
//     payload: value
// })