// IMPORTATION 

import {  FAIL_CONTACT, LOAD_CONTACT,  ONE_CONTACT, SUCC_CONTACT } from "../ActionType/contact";

// INITIAL STATE
const initialState = {
    listContacts : [],
    erros : null,
    load : false,
    contactToGet : {},

};
// PURE FUNCTION

const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_CONTACT:
      return { ...state, load : true };
      case SUCC_CONTACT:
        return { ...state, load : false , listContacts : payload.listContacts  };
        case ONE_CONTACT:
      return { ...state, contactToGet : payload.contactToGet, load : false};
      case FAIL_CONTACT:
      return { ...state, load : false , erros : payload };
    default:
      return state;
  }
};

export default contactReducer;