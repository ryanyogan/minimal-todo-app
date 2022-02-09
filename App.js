import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import AddTodo from './screens/AddTodo';

const Stack = createNativeStackNavigator();

function HomeScreen (){
  const navigation = useNavigation();
    return (
    <SafeAreaView style={styles.container}>
      <Home />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Add')}
      >
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{headerShown: false}} 
        />
        <Stack.Screen 
          name="Add" 
          component={AddTodo} 
          options={{
            presentation: 'modal',
            headerTitle: 'Task',
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },
  button: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#000',
    position: 'absolute',
    bottom: 50,
    right: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: .5,
    shadowRadius: 5,
    elevation: 5,
},
plus: {
    fontSize: 40,
    color: '#fff',
    position: 'absolute',
    top: -6,
    left: 9,
}
});
