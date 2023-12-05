import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'

import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { TextInput } from 'react-native-gesture-handler';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Info</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/modal.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

// export function StepGoal() {
//   const [stepGoal, setStepGoal] = useState('');
  
//   return(
//     <View styles={styles.title}>
//     <StatusBar hidden/>
//     <Text styles={styles.title}>Daily Step Goal</Text>
//     <TextInput>
//         styles={styles.input}
//         value={stepGoal}
//         onChangeText={(text) => setStepGoal(text)}
//         onSubmitEditing={() => console.warn('StepGoal: ${stepGoal}')}
//         placeholder="Enter your daily step goal"
//         keyboardType="decimal-pad"
//     </TextInput>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 20,
    borderWidth: .7,
    borderCurve:10,
    borderColor: '#eee',
    padding: 10
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
