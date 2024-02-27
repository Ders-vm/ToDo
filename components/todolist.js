import React from 'react';
import { ScrollView, Text } from 'react-native';

const ToDoList = ({ todos }) => {
  return (
    <ScrollView>
      {todos.map((todo) => (
        <Text key={todo.id}>{todo.task}</Text>
      ))}
    </ScrollView>
  );
};

export default ToDoList;
