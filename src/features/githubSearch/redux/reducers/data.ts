import * as NS from '../../namespace';
import initial from '../initial';

function dataReducer(state: NS.IReduxState['data'] = initial.data, action: NS.IAction): NS.IReduxState['data'] {
  switch (action.type) {
    case 'GITHUB_SEARCH:SEARCH_USER_SUCCESS':
      return { ...state, foundUsers: action.payload };
    case 'GITHUB_SEARCH:LOAD_USER_DETAILS_SUCCESS':
      return { ...state, userDetails: action.payload };
    default:
      return state;
  }
}

export default dataReducer;
