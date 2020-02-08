const initialState = [
  {
    name: 'mouse',
    power: 1,
    amount: 1,
    price: 0
  },
  {
    name: 'rat',
    power: 3,
    amount: 0,
    price: 10,
    description: "A small nice rat",
    condition: {
      target: 'mouse',
      amount: 1
    }
  },
  {
    name: 'hamster',
    power: 10,
    amount: 0,
    price: 150,
    description: "A big sized hamster. He loves cheese.",
    condition: {
      target: 'rat',
      amount: 20
    }
  }
];

const entities = (state = initialState, action) => {
  switch(action.type) {
    case 'BUY_ENTITY':
      return state.map(entity =>
        (entity.name === action.name) && (action.cheese >= entity.price) ? {
          ...entity,
          amount: entity.amount + action.amount,
          price: entity.price * 1.05,
        } : entity
      );
    case 'UPGRADE_ENTITY':
      return state.map(entity =>
        (entity.name === action.name) && (action.cheese >= action.price) ? {
          ...entity,
          power: action.effect(entity.power)
        } : entity
      );
    default:
      return state;
  }
};

export default entities;
