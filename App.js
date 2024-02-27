import { StyleSheet, View } from 'react-native';
import ToDoList from './components/todolist';
import ToDoForm from './components/todoform'; 

export default function App() {
  return (
    <View style={styles.container}>
      <ToDoList />
      <ToDoForm />
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

