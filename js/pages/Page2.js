import React from 'react';
import { translate } from 'react-i18next';
import { StyleSheet, Text, View, Button } from 'react-native';

class Home extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: screenProps.t('page2:title')
  });

  _navigateToChangeLangage = () => this.props.navigation.navigate('Home')

  render() {
    const { t, i18n } = this.props;

    return (
      <View style={styles.container}>
        <Text>{t('introduction')}</Text>
        <Text>{t('common:currentLanguage', { lng: i18n.language })}</Text>
        <Button title={t('common:actions:changeLanguage')} onPress={this._navigateToChangeLangage}/>
      </View>
    );
  }
}

export default translate(['page2', 'common'], { wait: true })(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
