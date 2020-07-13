import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FALIURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FALIURE,
} from '../actions/';

//contains the state of the application
//User Information will be stored in this reducer.
//there must be different reducers for different things,to maintain readability

const initialState = {
  message: '',
  navigate: false,
  isLoading: false,
  signInResponse: {},
  signUpResponse: {}
};

const userInformation = (state = initialState, action) => {
  //console.log("State",action)
  switch (action.type) {
    case LOGIN_REQUEST:
      return {...state, isLoading: true};
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        signInResponse: action.data.data,
        message: 'Login Sucessfull',
        navigate: true,
      };
    case LOGIN_FALIURE:
      return {
        ...state,
        isLoading: false,
        message: 'In valid Username/Password',
        navigate: false,
      };

    case SIGNUP_REQUEST:
      return {...state, isLoading: true};
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        signUpResponse: action.data.data,
        message: 'Registered Sucessfull',
        navigate: true,
      };
    case SIGNUP_FALIURE:
      return {
        ...state,
        isLoading: false,
        message: 'Registration Failed',
        navigate: false,
      };
    default:
      return state;
  }
};

export default userInformation;
