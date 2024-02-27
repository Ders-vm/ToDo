// ToDoList.js
import React from 'react';
import { ScrollView, Text } from 'react-native';

const ToDoList = ({ todos }) => {
  const staticList = [
    { id: 1, task: 'Task 1' },
    { id: 2, task: 'Task 2' },
    { id: 3, task: 'Task 3' },
  ];

  return (
    <ScrollView>
      {staticList.map((todo) => (
        <Text key={todo.id}>{todo.task}</Text>
      ))}
      {todos.map((todo) => (
        <Text key={todo.id}>{todo.task}</Text>
      ))}
    </ScrollView>
  );
};

export default ToDoList;
