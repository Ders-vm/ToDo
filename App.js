import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ToDoList from './components/todolist';
import ToDoForm from './components/todoform'; 

export default function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([
    { id: 1, task: 'Buy groceries' },
    { id: 2, task: 'Do laundry' },
    { id: 3, task: 'Walk the dog' },
  ]);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      const newTask = {
        id: todos.length + 1,
        task: task.trim(),
      };
      setTodos([...todos, newTask]);
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDo List</Text>
      <ToDoList todos={todos} />
      <ToDoForm task={task} setTask={setTask} handleAddTask={handleAddTask} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
