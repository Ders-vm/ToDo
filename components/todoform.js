import { View, TextInput, Button, StyleSheet } from 'react-native';
export default ToDoForm;

const ToDoForm = () => {
  return (
    <View style={styles.form}>
      <TextInput style={styles.input} placeholder="Add a ToDo Item" />
      <Button title="Add" />
    </View>
  );
}


