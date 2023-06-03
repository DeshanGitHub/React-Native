import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { GoalInput } from './components/GoalInput';

export default function App() {

  const [enteredGoalText, setEnteredGoalText]=useState('');

  const goalInputHandler=(enteredText)=>{
      setEnteredGoalText(enteredText);
  }

  const addGoalHandler=()=>{
    console.log(enteredGoalText);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your Course Goal' onChangeText={goalInputHandler} ></TextInput>
        <Button title='Add Goal' onPress={addGoalHandler}></Button>
      </View>

      {/* <GoalInput/> */}

      <View style={styles.goalContainer}>
        <Text>List Of Goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
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
  },
  goalContainer: {
    flex: 4,
  }
});