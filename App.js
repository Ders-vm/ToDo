import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ScrollView, Text, Pressable } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212', // Dark background, off-black
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 40,
    },
    formContainer: {
      width: '80%',
      marginBottom: 20,
    },
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#1E1E1E', // Slightly lighter than container for contrast
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    input: {
      flex: 1,
      height: 40,
      color: 'black', // Black text in input
      backgroundColor: 'white', // Keeping input field white for visibility
    },
    button: {
      marginLeft: 10,
      backgroundColor: '#008080', // Teal button
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    task: {
      backgroundColor: '#008080', // Teal background for tasks
      padding: 10,
      marginVertical: 5,
      borderRadius: 5,
    },
    completed: {
      backgroundColor: '#008080', // Teal background for completed tasks, same as task
    },
    taskText: {
      color: 'black', // Black text for tasks
    },
  });
  
  

function ToDoForm({ onAddTask }) {
    const [text, setText] = useState('');

    const handleSubmit = () => {
        if (!text.trim()) return;
        onAddTask(text);
        setText('');
    };

    return (
        <View style={styles.formContainer}>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Add a new task..."
                    value={text}
                    onChangeText={setText}
                />
                <Button title="Add" onPress={handleSubmit} color="#008080" />
            </View>
        </View>
    );
}

function ToDoList({ tasks, onToggleTaskCompleted }) {
    return (
        <ScrollView style={styles.formContainer}>
            {tasks.map((task) => (
                <Pressable key={task.id} onPress={() => onToggleTaskCompleted(task.id)}>
                    <View style={[styles.task, task.completed && styles.completed]}>
                        <Text style={styles.taskText}>{task.text}</Text>
                    </View>
                </Pressable>
            ))}
        </ScrollView>
    );
}

function App() {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Do laundry', completed: true },
        { id: 2, text: 'Go to gym', completed: false },
        { id: 3, text: 'Walk dog', completed: true },
    ]);

    const addTask = (taskText) => {
        const newTask = { id: Date.now(), text: taskText, completed: false };
        setTasks([...tasks, newTask]);
    };

    const toggleTaskCompleted = (id) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    return (
        <View style={styles.container}>
            <ToDoList tasks={tasks} onToggleTaskCompleted={toggleTaskCompleted} />
            <ToDoForm onAddTask={addTask} />
        </View>
    );
}

export default App;
