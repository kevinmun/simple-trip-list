import { NavigationActions } from 'react-navigation';
import { Navigator } from '../navigator/Navigator';

const initialRoute = 'Main';
const initialState = Navigator.router.getStateForAction(NavigationActions.navigate({
  routeName: initialRoute,
}));

function nav(state = initialState, action) {
  let nextState;
  switch (action.routeName) {
    case 'Main':
      nextState = Navigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Main' }),
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
