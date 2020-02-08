export function addCheese(cheese) {
  return {
    type: 'ADD_CHEESE',
    cheese
  }
}

export function decrementCheese(cheese) {
  return {
    type: 'DECREMENT_CHEESE',
    cheese
  }
}
