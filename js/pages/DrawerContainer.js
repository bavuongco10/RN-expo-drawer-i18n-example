import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { DrawerItems } from 'react-navigation';
import { translate } from 'react-i18next';

class DrawerContainer extends React.Component {

  logout = () => {
    // This will reset back to loginStack
    // https://github.com/react-community/react-navigation/issues/1127
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      key: null,  // black magic
      actions: [NavigationActions.navigate({ routeName: 'Drawer' })]
    });
    this.props.navigation.navigate(actionToDispatch)
  }

  _changeLanguage = () => {
    const {i18n} = this.props;
    if(i18n.language === 'en') {
      i18n.changeLanguage('de')
    } else {
      i18n.changeLanguage('en')
    }
  }

  render() {
    const { t } = this.props;
    return (
      <View style={styles.container}>
        <DrawerItems
          {...this.props}
          labelStyle={styles.uglyDrawerItemText} />
        <Button
          title={t('common:actions:changeLanguage')}
          onPress={this._changeLanguage}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  uglyDrawerItemContainer: {
    borderRadius: 2,
    borderColor: '#E73536',
    borderWidth: 1,
  },
  uglyDrawerItemText: {
    padding: 15,
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E73536',
  }
});

export default translate(['common'], {wait: true})(DrawerContainer);
