import React from 'react';
import { connect } from 'react-redux';
import { removeUpgrade } from "../../redux/actions/upgradesActions";
import { upgradeEntity } from "../../redux/actions/entitiesActions";
import { BuyableButton } from '../';
import './Upgrades.scss';

const mapStateToProps = state => {
  return {
    cheese: state.cheese,
    upgrades: state.upgrades
  }
};

const mapActionsToProps = dispatch => {
  return {
    buyUpgrade: (upgrade, cheese) => {
      console.log(upgrade.effect);

      dispatch(removeUpgrade(upgrade.name));
      dispatch(upgradeEntity(upgrade.effect, upgrade.target, upgrade.price, cheese));
    }
  }
};

const Upgrades = ({ upgrades, buyUpgrade, cheese }) => {
  const buttons = upgrades.map((upgrade, index) =>
    <BuyableButton
      onClick={() => { buyUpgrade(upgrade, cheese) }}
      name={upgrade.name}
      price={upgrade.price}
      label={upgrade.effectLabel}
      key={index}
    />
  );

  return (
    <div className="component-upgrades">
      { buttons }
    </div>
  )
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Upgrades);
