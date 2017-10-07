import React from 'react';
import { Button } from 'react-native';
import { translate } from 'react-i18next';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import i18n from './js/i18n';
import Home from './js/pages/Home';
import Page2 from './js/pages/Page2';
import DrawerContainer from './js/pages/DrawerContainer';

const Drawer = DrawerNavigator({
  Page2: { screen: Page2 },
  Home: { screen: Home },
}, {
  gesturesEnabled: false,
  contentComponent: DrawerContainer
});

const menuPressed = ({navigation, screenProps}) => () => {
  navigation.navigate('DrawerToggle')
};

const Stack = StackNavigator({
  Drawer: { screen: Drawer }
}, {
  headerMode: 'float',
  gesturesEnabled: false,
  navigationOptions: ({navigation, screenProps}) => ({
    headerLeft:
      <Button
        title={screenProps.t('common:actions:menu')}
        onPress={menuPressed({navigation, screenProps})} />
  })
});


// Wrapping a stack with translation hoc asserts we get new render on language change
// the hoc is set to only trigger rerender on languageChanged
const WrappedStack = () => {
  return <Stack screenProps={{ t: i18n.getFixedT() }} />;
};

const ReloadAppOnLanguageChange = translate('common', {
  bindI18n: 'languageChanged',
  bindStore: false
})(WrappedStack);

// The entry point using a react navigation stack navigation
// gets wrapped by the I18nextProvider enabling using translations
// https://github.com/i18next/react-i18next#i18nextprovider
export default class App extends React.Component {
  render() {
    return <ReloadAppOnLanguageChange />;
  }
}
