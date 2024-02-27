import { ScrollView, Text, StyleSheet } from 'react-native';
export default ToDoList;


const ToDoList = () => {
  return (
    <ScrollView style={styles.scrollView}>
      {/* Hardcoded ToDo Items */}
      <Text style={styles.todoItem}>Task 1</Text>
      <Text style={styles.todoItem}>Task 2</Text>
      <Text style={styles.todoItem}>Task 3</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 20,
    width: '90%',
  },
  todoItem: {
    margin: 10,
    padding: 10,
    backgroundColor: '#f9c2ff',
    borderRadius: 10,
  },
});


