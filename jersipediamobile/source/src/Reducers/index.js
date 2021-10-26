import {combineReducers} from 'redux';
import UserReducer from './User';
import RajaOngkirReducer from './rajaongkir';
import AuthReducer from './auth';
import ProfileReducer from './profile';
import FiturReducer from './fitur';
import ProductReducer from './Products';

const rootReducer = combineReducers({
  UserReducer,
  RajaOngkirReducer,
  AuthReducer,
  ProfileReducer,
  FiturReducer,
  ProductReducer,
});

export default rootReducer;
