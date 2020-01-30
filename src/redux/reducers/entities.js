const initialState = [
  {
    name: 'mouse',
    power: 1,
    amount: 1
  }
];

const entities = (state = initialState, action) => {
  switch(action.type) {
    case 'BUY_ENTITY':
      return state.map(entity =>
        entity.name === action.name ? { ...entity, amount: entity.amount + action.amount } : entity
      );
    default:
      return state;
  }
};

export default entities;
