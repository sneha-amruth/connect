import { AUTH, AUTH_ERROR, LOGOUT} from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
      return { ...state, authData: action.payload, loading: false, errors: null };
    case AUTH_ERROR: 
      return {...state, errors: true, errorText: action.errorText}
    case LOGOUT:
      localStorage?.removeItem('profile');
      // localStorage.clear();
      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;