import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
const Login = ({ navigation }) => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const {email, password } = data;
    return ( 
        <View style={styles.loginScreen}>
            
            <View style={styles.formGroup}>
                <Text style={styles.formLabel}> Email </Text>
                <Input 
                    style={styles.formControl}
                    keyboardType={'email-address'}
                    placeholder='Email address'
                    value={email}
                    onChangeText={text => setData(prev => ({...prev, email: text.trim()}))}
                />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.formLabel}> Password </Text>
                <Input 
                    style={styles.formControl}
                    secureTextEntry={true}
                    placeholder='Password'
                    value={password}
                    onChangeText={text => setData(prev => ({...prev, password: text.trim()}))}
                />
                <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text style={styles.formGroupTip}>Forgot Passowrd</Text>
                </TouchableOpacity>

                <View style={styles.btnWrapper}>
                    <Button 
                        title='Login'
                        onPress={() => console.log('submitting ', data)}
                        style={styles.buttonCTA}

                    />
                </View>

                <TouchableOpacity style={styles.registerCTA} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.registerCTAText}>Don't have account yet? Signup</Text>
                </TouchableOpacity>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    loginScreen: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: '100%'
    },
    formLabel: {
        textAlign: 'left',
        fontSize: 14,
        marginVertical: 5,
    },
    formGroup: {
        marginVertical: 10,
        width: '90%',
        paddingHorizontal: 15,
        justifyContent: 'center'
    },
    formControl: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        width: '100%',
        textAlign: 'left',
        borderRadius: 25
    },
    formGroupTip: {
        textAlign: 'right',
        fontSize: 12,
        marginTop: 8,
    },
    registerCTA: {
        marginVertical: 18,
        justifyContent: 'center'
    },
    registerCTAText:{
        textAlign: 'center',
        fontSize: 16
    },
    btnWrapper: {
        marginVertical: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonCTA: {
        backgroundColor: 'blue',
        borderRadius: 20,
        paddingVertical: 10,
        width: '90%'
    },
})
export default Login;