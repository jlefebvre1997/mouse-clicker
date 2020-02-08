const cheese = (state = 0, action) => {
  switch(action.type) {
    case 'ADD_CHEESE':
      return state + action.cheese;
    case 'DECREMENT_CHEESE':
      return (state >= action.cheese) ? state - action.cheese : state;
    default:
      return state;
  }
};

export default cheese;
