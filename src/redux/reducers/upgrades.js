const initialState = [
  {
    id: 'MOUSE1',
    name: 'Gruyère haut de gamme',
    effectLabel: 'Triple le fromage par click',
    target: 'mouse',
    effect: value => value * 3,
    price: 50
  }
];

const upgrades = (state = initialState, action) => {
  switch(action.type) {
    case 'REMOVE_UPGRADE':
      return state.filter(upgrade => upgrade.name !== action.name);
    default:
      return state;
  }
};

export default upgrades;
