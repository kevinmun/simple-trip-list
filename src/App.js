import {
  TabNavigator,
} from 'react-navigation';
import HomeScreen from '../src/components/HomeScreen';
import ProfileScreen from '../src/components/ProfileScreen';

const App = TabNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

export default App;
