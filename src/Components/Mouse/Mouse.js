import { connect } from "react-redux";
import { addCheese } from "../../redux/actions/resourcesActions";
import React from "react";
import './Mouse.scss';

const mapStateToProps = state => {
  let cheesePerSecond = 0;

  state.entities.filter(entity => entity.name !== 'mouse').forEach(entity => {
    cheesePerSecond += (entity.power * entity.amount);
  });

  return {
    cheese: state.cheese,
    mousePower: state.entities.find(entity => entity.name === 'mouse').power,
    cheesePerSecond
  };
};

const mapActionsToProps = dispatch => {
  return {
    onClick: cheese => {
      dispatch(addCheese(cheese));
    },
  };
};

const Mouse = ({ cheese, mousePower, onClick, cheesePerSecond }) => {
  return (
    <div className={"component-mouse"}>
      <button onClick={() => onClick(mousePower)} className="component-mouse__button app-btn">
        Grind { mousePower } cheese
      </button>
      <span>
        Actual Cheese : { Math.round(cheese) }
      </span>
      <span>
        Cheese per second : { cheesePerSecond } / s
      </span>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Mouse);
