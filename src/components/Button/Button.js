import React from 'react';
import { TouchableOpacity, Text} from 'react-native';

const Button = ({style, title, onPress,  ...props}) => {
    return ( 
        <TouchableOpacity onPress={onPress} style={[style]}>
            <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 16}}> { title && title } </Text>
        </TouchableOpacity>
     );
}
 
export default Button;