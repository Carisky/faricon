const initialState = {
    role: undefined,
    name: undefined,
    password: undefined,
  };
  
  const SET_USER = 'SET_USER';
  const CLEAR_USER = 'CLEAR_USER';
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_USER:
        return {
          ...state,
          role: action.payload.role,
          name: action.payload.name,
          password: action.payload.password,
        };
      case CLEAR_USER:
        return {
          ...initialState
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  