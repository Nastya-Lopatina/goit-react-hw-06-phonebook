import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contact-actions';


const items = createReducer( [], {
    [actions.addContact]: (state, { payload }) => {
      if (state.find((contact) => contact.name=== payload.name)) {
               alert(`${payload.name} уже есть в контактах`);
               return state;
        }
         return [...state, payload]
    },
    [actions.deleteContact]: (state, { payload }) => 
       state.filter(contact => contact.id !== payload),
    
})

const filter = createReducer('', {
    [actions.changeFilter]: (_, { payload}) => payload
})

export default combineReducers({ items, filter });





// const items = (state = [], { type, payload }) => {
//     switch (type) {
//         case Types.ADD_CONTACT:
//            if (state.find((contact) => contact.name=== payload.name)) {
//                alert(`${payload.name} уже есть в контактах`);
//                return state;
//            }
//             return [...state, payload]
//         case Types.DELETE_CONTACT:
//             return state.filter(({ id }) => id !== payload);
//         default:
//             return state;
//     }
// }
// const filter = (state = [], { type, payload }) => {
//     switch (type) {
//         case Types.CHANGE_FILTER:
//             return payload;
//         default:
//             return state;
//      }
// }
 
// const find = (state, payload) => {
//     if (state.find((contact) => contact.name === payload.name)) {
//                alert(`${payload.name} уже есть в контактах`);
//                return state;
//            }
// }
