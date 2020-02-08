import React from 'react';
import './BuyableButton.scss';

export default function BuyableButton({ name, label, price, onClick, quantity }) {
  const displayQuantity = quantity ? <span>owned : { quantity }</span> : '';

  return (
    <button className="component-buyable-button app-btn" onClick={onClick}>
      <span>{ name } : { price }</span>
      { displayQuantity }
      <span>{ label }</span>
    </button>
  )
}
