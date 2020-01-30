const initialState = [
  {
    id: 'MOUSE1',
    name: 'Gruyère haut de gamme',
    target: 'mouse',
    effect: (value) => value * 3
  }
];

const upgrades = (state = initialState, action) => {
  switch(action.type) {
    case 'BUY_UPGRADE':
      return state.filter(upgrade => upgrade.id === action.id);
    default:
      return state;
  }
};

export default upgrades;
