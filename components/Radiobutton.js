import React, {useState} from 'react'
import {Text, View, Pressable} from 'react-native'
import StyleSheet from '../Styles'

export default function Radiobutton({options, onPress}) {
    const [value, setValue] = useState(null)

    const handleRadiobuttonPress = (selectedValue) => {
        setValue(selectedValue)
        onPress(selectedValue)
    }

    return (
        <>
        {
            options.map((item) => (
        <View key={item.value} style={StyleSheet.buttonContainer}>
            <Text>{item.label}</Text>
            <Pressable style={StyleSheet.circle} onPress={() => handleRadiobuttonPress(item.value)}>
                {value === item.value && <View style={StyleSheet.checkedCircle} />}
            </Pressable>
        </View> 
    ))
   }
   </>
  )
}

