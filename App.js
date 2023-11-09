import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


//Screens 
import BarContainer from './Screens/Bars/BarContainer'

export default function App() {
  return (
    <View style={styles.container}>
     <BarContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
