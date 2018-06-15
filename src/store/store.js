import { createStore, combineReducers} from 'redux';
import dashboardReducer from "../store/reducers";


let reducers = combineReducers({
  dashboardReducer: dashboardReducer
});

export const store = createStore(reducers);
