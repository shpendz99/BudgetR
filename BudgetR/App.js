import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

//set up redux

export default function App() {
  return (
    <Provider store={}>  
    <View style={styles.container}>
      <Text>Project BudgetR </Text>

    </View>
    </Provider>
    
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