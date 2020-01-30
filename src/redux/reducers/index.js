import { combineReducers } from "redux";
import cheese from "./cheese";
import entities from "./entities";
import upgrades from "./upgrades";

export default combineReducers({
  cheese,
  entities,
  upgrades
});
