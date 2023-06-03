import { useState } from 'react';
import { Button, View, StyleSheet, TextInput } from "react-native";

export const GoalInput = (props) => {

    const [enteredGoalText, setEnteredGoalText]=useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    }

    const addGoalHandler = () => {
        console.log(enteredGoalText);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Your Course Goal"
                onChangeText={goalInputHandler}
            ></TextInput>
            <Button title="Add Goal" onPress={addGoalHandler}></Button>
        </View>
    )
}

const styles=StyleSheet.create({
    inputContainer: {
        felx: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
      },
      textInput: {
        width: '70%',
        marginRight: 8,
        padding: 8
      }
})






