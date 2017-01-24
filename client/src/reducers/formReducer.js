import * as types from '../actions/actionTypes';
// import initialState from './initialState';

const initialState = {
  name: '', email: '', message: '',
}

export default function contactForm(state = initialState, action) {
  switch (action.type) {
    case types.FORM_RESET:
      return {
        ...state,
          name: '',
          email: '',
          message: '',
      };
    case types.FORM_SUBMIT_SUCCESS:
      // return Object.assign({}, action.message);
      return {
        ...state,
        mail: action.message };
    default:
      return state;
  }
}
