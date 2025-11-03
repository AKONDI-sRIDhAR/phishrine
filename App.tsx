import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Godot from '@borndotcom/react-native-godot';

const GodotView = () => {
  const pck = require('./game.pck');
  return <Godot style={styles.godot} pck={pck} />;
};

const App = () => {
  return (
    <View style={styles.container}>
      <GodotView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  godot: {
    flex: 1,
  },
});

export default App;
