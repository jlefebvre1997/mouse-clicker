import React from 'react';
import { connect } from 'react-redux';
import { buyEntity } from "../../redux/actions/entitiesActions";
import { addCheese, decrementCheese } from "../../redux/actions/resourcesActions"
import { BuyableButton } from '../';
import './Entities.scss';

const mapStateToProps = state => {
  let cheesePerSecond = 0;

  const entities = state.entities.filter(entity => entity.name !== 'mouse');

  entities.forEach(entity => {
    cheesePerSecond += (entity.amount * entity.power);
  });

  const availableEntities = entities.filter(entity =>
    state.entities.find(en => en.name === entity.condition.target).amount >= entity.condition.amount
  );

  return {
    entities: availableEntities,
    cheese: state.cheese,
    cheesePerSecond
  };
};

const mapActionsToProps = dispatch => {
  return {
    buyEntity: (entity, cheese) => {
      dispatch(decrementCheese(entity.price));
      dispatch(buyEntity(entity.name, cheese))
    },
    addCheese: cheese => {
      dispatch(addCheese(cheese))
    }
  };
};

class Entities extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cheesePerSecond: props.cheesePerSecond,
      interval: null
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      ...this.state,
      cheesePerSecond: nextProps.cheesePerSecond
    })
  }

  componentDidMount() {
    const { addCheese } = this.props;

    this.setState({
      interval: setInterval(() => {
        addCheese(this.state.cheesePerSecond);
      }, 1000)
    })
  }

  render() {
    const { entities, cheese, buyEntity } = this.props;

    const buttons = entities.map((entity, index) => {
      return (
        <BuyableButton
          onClick={() => {buyEntity(entity, cheese)}}
          key={index}
          name={entity.name}
          label={entity.description}
          price={Math.round(entity.price)}
          quantity={entity.amount}
        />
      )
    });

    return (
      <div className="component-entities">
        { buttons }
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Entities);
