import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ToDoForm = ({ task, setTask, handleAddTask }) => {
  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default ToDoForm;
