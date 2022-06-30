import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform } from 'react-native';
import Task from './components/Task';
import React, { useState } from 'react';

export default function App() {
  const [remainder, setRemainder] = useState();
  const [remainderItems, setRemainderList] = useState([]);

  const updateRemainder = () => {
    setRemainderList([...remainderItems, remainder]);
    if (remainder != remainderItems) {
      setRemainder(null);
      
    }

    console.log(remainder);
    console.log(remainderItems);
  }

  const completeRemainder = (index) => {
    let copyRemainder = [...remainderItems];
    copyRemainder.splice(index, 1);
    setRemainderList(copyRemainder);
  }

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Remainder's</Text>
        <View style={styles.items}>
          {
            remainderItems.map((x, index) => {
              return (
                <View style={styles.itemsIteration}>
                <TouchableOpacity key={index} onPress={() => completeRemainder(index)}>
                  <Task key={index} text={x}></Task>
                </TouchableOpacity>
                </View>
              )
            })
          }
          <Task text={'test'}></Task>
        </View>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.createTaskWrapper}>
        <TextInput style={styles.input} placeholder={'New remainder'} value={remainder} onChangeText={remainder => setRemainder(remainder)}></TextInput>
        <TouchableOpacity onPress={() => updateRemainder()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'orange'
  },
  items: {
    borderWidth: 2,
    borderBottomColor: '#000',
    borderColor: '#fff'
  },
  itemsIteration: {
    borderWidth: 2,
    borderBottomColor: '#000',
    borderColor: '#fff'
  },
  createTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 60,
    backgroundColor: 'rose',
    borderColor: 'orange',
    borderWidth: 1,
  },
  addWrapper: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: "center",
    borderColor: 'orange',
    borderWidth: 1,
  },
  addText: {},
});
