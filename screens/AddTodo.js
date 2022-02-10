import * as React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, TextInput, Switch} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AddTodo() {

    const [name, setName] = React.useState('');
    const [date, setDate] = React.useState(new Date());
    const [isToday, setIsToday] = React.useState(false);

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Add a Task</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Name</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Task"
                placeholderTextColor="#00000030"
                onChangeText={(text) => {
                    console.log(text);
                }} 
            /> 
          </View>        
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Hour</Text>
            <DateTimePicker
              value={date}
              mode={'time'}
              is24Hour={true}
              onChange={(event, selectedDate) => setDate(selectedDate)}
              style={{width: '80%'}}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Today</Text>
            <Switch
                value={isToday}
                onValueChange={(value) => { setIsToday(value) }}
            />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white'}}>Done</Text>
          </TouchableOpacity>
          <Text style={{color: '#00000060'}}>If you disable today, the task will be considered as tomorrow</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 35,
        marginTop: 10,
    },
    textInput: {
        borderBottomColor: '#00000030',
        borderBottomWidth: 1,
        width: '80%',
    },
    container: {
        flex: 1,
        backgroundColor: '#F7F8FA',
        paddingHorizontal: 30,
    },
    inputTitle: {
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 24
    },
    inputContainer: {
        justifyContent: 'space-between', 
        flexDirection: 'row', 
        paddingBottom: 30,
    },
    button: {
        marginTop: 30,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        height: 46,
        borderRadius: 11,
    }
});