export function buyEntity(name, cheese) {
  return {
    type: 'BUY_ENTITY',
    name,
    cheese,
    amount: 1
  }
}

export function upgradeEntity(effect, name, price, cheese) {
  return {
    type: 'UPGRADE_ENTITY',
    effect,
    name,
    price,
    cheese
  }
}
