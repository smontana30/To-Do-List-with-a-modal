import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, Modal } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from '/Users/sofiamontana/Desktop/expo/rn-complete/components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHander = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, 
      {id: Math.random().toString(), val: goalTitle}
    ]);
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
    <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput 
      visible={isAddMode} 
      onAddGoal={addGoalHander} 
      onCancel={cancelGoalAdditionHandler}
      />
      {/* onAddGoal will be recieved to GoalInput as a prop */}
      <FlatList
      keyExtractor={(item, index) => item.id}
      data={courseGoals} 
      renderItem={itemData => <GoalItem 
      id={itemData.item.id} 
      onDelete={removeGoalHandler} 
      title={itemData.item.val}/>}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding: 50
  },
});