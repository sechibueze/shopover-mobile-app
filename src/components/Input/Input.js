import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';
const Input = ({style, onChangeText, ...props}) => {
    return (
        <View>
            <TextInput
                style={[styles.textInput, style ]}
                onChangeText={onChangeText}
                {...props}
             />
        </View>
    );
}
 
export default Input;