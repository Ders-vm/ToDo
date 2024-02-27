import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

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
      {todos.map((todo) => (
        <Text key={todo.id}>{todo.task}</Text>
      ))}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <Button title="Add Task" onPress={handleAddTask} />
      </View>
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
  formContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
  },
});

