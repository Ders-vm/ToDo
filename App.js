// App.js
import React, { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import ToDoList from './components/ToDoList'; // Import ToDoList component
import ToDoForm from './components/ToDoForm'; // Import ToDoForm component

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 40,
    },
});

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

    const clearAllTasks = () => {
        setTasks([]);
    };

    const removeTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };

    return (
        <View style={styles.container}>
            <ToDoList tasks={tasks} onToggleTaskCompleted={toggleTaskCompleted} onClearAllTasks={clearAllTasks} onRemoveTask={removeTask} />
            <ToDoForm onAddTask={addTask} />
        </View>
    );
}

export default App;
