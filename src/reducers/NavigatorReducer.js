import { NavigationActions } from 'react-navigation';
import { Navigator } from '../navigator/Navigator';

const firstAction = Navigator.router.getActionForPathAndParams('Home');
const initialState = Navigator.router.getStateForAction(firstAction);

function nav(state = initialState, action) {
  let nextState;
  switch (action.routeName) {
    case 'Home':
      nextState = Navigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Home' }),
        state,
      );
      break;
    case 'Profile':
      nextState = Navigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Profile' }),
        state,
      );
      break;
    default:
      nextState = Navigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
}

export default nav;
