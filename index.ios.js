import React, {
  View, Text, TextInput, AppRegistry, StyleSheet
} from 'react-native';
import styles from './styles.js'
var english_german = require('./english_german.json');

class Dictionary extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      input: '',
      output: ''
    };
  }

  render() {
    return (
      <View style = { styles.parent } >
        <Text>Type something in English</Text>
        <TextInput style={ styles.textInput} 
          autoFocus={true}
          autoCapitalize={'none'}
          onChangeText={(text) => this.setState({input: text})}
          text = { this.state.input }
          onSubmitEditing = { this.showMeaning.bind(this) }/>
        <Text style = { styles.germanLabel } >German equivalent:</Text>
        <Text style = { styles.germanWord } > { this.state.output } </Text>
      </View>
    );
  }

  showMeaning() {
    var meaning = this.state.input in english_german ?
      english_german[this.state.input] :
      'Not Found';

    this.setState({
      output: meaning
    });
  }
}

AppRegistry.registerComponent('Dictionary', () => Dictionary);