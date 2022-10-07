
import { Text, View, TextInput, Button, ScrollView } from 'react-native'
import { useState } from 'react'
import {Picker} from  '@react-native-picker/picker'
import StyleSheet from './Styles'
import Radiobutton from './components/Radiobutton'

export default function App() {

  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [level, setLevel] = useState(0)
  const [test, setTest] = useState(0) 

  //options for choosing gender 
  const options = [
    { label: 'Mies', value: 1},
    { label: 'Nainen', value: 2}
  ]

  //calculation based on gender choice. If result is less than zero, show result as zero.
  const calculate = () => {
 
    if (weight.length == 0) {
      alert('Weight not entered')
    }
    else {
    const litres = bottles * 0.33
    const grams = litres * 8 * 4.5
    const burning = weight/10
    const gramsLeft = grams - (burning*time)
    if (test === 1)
    result = gramsLeft/(weight*0.7)
    if (test ===2)
    result = gramsLeft/(weight*0.6)
    if (result<0) {
      result = 0
    }

  
    setLevel(result)
  }
  }

  return (
  <View style={StyleSheet.container}>
      <ScrollView>
        <Text style={StyleSheet.title}>Alcometer</Text>
          <Text style={StyleSheet.subtitle}>Weight</Text>
          <TextInput style={StyleSheet.textfield} keyboardType="number-pad" placeholder='Enter weight' value={weight} onChangeText={text => setWeight(text)}/> 
          <Text style={StyleSheet.subtitle}>Bottles</Text>
          <Picker
            selectedValue={bottles}
            onValueChange={(itemValue) =>
              setBottles(itemValue)
              }>
            <Picker.Item label="1 bottle" value="1" />
            <Picker.Item label="2 bottles" value="2" />
            <Picker.Item label="3 bottles" value="3" />
            <Picker.Item label="4 bottles" value="4" />
            <Picker.Item label="5 bottles" value="5" />
            <Picker.Item label="6 bottles" value="6" />
            <Picker.Item label="7 bottles" value="7" />
            <Picker.Item label="8 bottles" value="8" />
            <Picker.Item label="9 bottles" value="9" />
            <Picker.Item label="10 bottles" value="10" />
            <Picker.Item label="11 bottles" value="11" />
            <Picker.Item label="12 bottles" value="12" />
          </Picker>
          <Text style={StyleSheet.subtitle}>Time</Text>
          <Picker
            selectedValue={time}
            onValueChange={(itemValue) =>
              setTime(itemValue)
              }>
            <Picker.Item label="1 hour" value="1" />
            <Picker.Item label="2 hours" value="2" />
            <Picker.Item label="3 hours" value="3" />
            <Picker.Item label="4 hours" value="4" />
            <Picker.Item label="5 hours" value="5" />
            <Picker.Item label="6 hours" value="6" />
            <Picker.Item label="7 hours" value="7" />
            <Picker.Item label="8 hours" value="8" />
            <Picker.Item label="9 hours" value="9" />
            <Picker.Item label="10 hours" value="10" />
            <Picker.Item label="11 hours" value="11" />
            <Picker.Item label="12 hours" value="12" />
          </Picker>
          <Text style={StyleSheet.subtitle}>Gender</Text>
          <Radiobutton options={options} onPress={(value) => {setTest(value)}} />
        <View style={StyleSheet.resultContainer}>
          <Text style= { [level < 0.5 ? StyleSheet.green: level >=0.5 && level <1.2 ? StyleSheet.yellow : StyleSheet.red]}>{level.toFixed(2)}</Text>
        </View>
          <Button title="Calculate" onPress={calculate} />  
      </ScrollView>
    </View>
  );
}



