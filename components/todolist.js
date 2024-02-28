import React from 'react';
import { ScrollView, View, Text, StyleSheet, Pressable } from 'react-native';

const styles = StyleSheet.create({
 });

function ToDoList({ tasks }) {
    return (
        <ScrollView>
            {tasks.map((task) => (
                <Pressable key={task.id}>
                    <View style={[styles.task, task.completed && styles.completed]}>
                        <Text style={styles.taskText}>{task.text}</Text>
                    </View>
                </Pressable>
            ))}
        </ScrollView>
    );
}

export default ToDoList;
