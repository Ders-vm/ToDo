import { View, TextInput, Button, StyleSheet } from 'react-native';
export default ToDoForm;

const ToDoForm = () => {
  return (
    <View style={styles.formContainer}>
      <TextInput style={styles.input} placeholder="Add a new task" />
      <Button title="Add Task" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    margin: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: '70%',
  },
});


