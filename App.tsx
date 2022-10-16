import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Main from './Components/Main'
import Index from './component/Index'


export default function App() {
  return (
    <View style={styles.container}>
      <Main/>
      <Index/>
      <StatusBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 'auto',
  },
});

