import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';


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
        <SafeAreaView style={styles.container}>
            <ToDoList tasks={tasks} onToggleTaskCompleted={toggleTaskCompleted} />
            <ToDoForm onAddTask={addTask} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
