import { combineReducers  } from 'redux';
// import _ from 'lodash';


const themeReducer = (theme='light-theme', action) => {              // Holds Company code of current company.
  if (action.type === 'THEME') {
    return action.payload;
  }
  return theme;
}



export default combineReducers({
  theme: themeReducer,
})
