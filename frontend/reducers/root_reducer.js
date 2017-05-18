import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PhotoReducer from './photo_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  photos: PhotoReducer
});

export default RootReducer;
