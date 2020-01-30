const cheese = (state = 0, action) => {
  switch(action.type) {
    case 'ADD_CHEESE':
      return state + action.amount;
    default:
      return state;
  }
};

export default cheese;
