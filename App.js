//app.js

import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ToDoList from 'components/todolist';
import ToDoForm from 'components/todoform';


export default function App() {
  const [task, setTask] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDo List</Text>
      <ToDoList todos={[]} />
      <ToDoForm task={task} setTask={setTask} handleAddTask={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
