import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // Styles remain the same as before
});

function ToDoForm({ onAddTask }) {
    const [text, setText] = useState('');

    const handleSubmit = () => {
        if (!text.trim()) return;
        onAddTask(text);
        setText('');
    };

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                value={text}
                onChangeText={setText}
            />
            <Button title="Add" onPress={handleSubmit} />
        </View>
    );
}

export default ToDoForm;
