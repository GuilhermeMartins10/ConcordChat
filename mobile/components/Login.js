import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { api } from '../helpers/Api'
Icon.loadFont();

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { pressStatus: false };
    };

    render() {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('')
        const [loading, setLoading] = useState(false)
        const [errorMessage, setErrorMessage] = useState(null)


        async function signIn() {
            if (email.length === 0) return;

            setLoading(true);

            try {
                const credentials = {
                    email: email,
                    password: password
                }

                const response = await api.post('/token', credentials);
                const user = response.data;
                await saveUser(user);
                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'App' })],
                });

                setLoading(false);

                props.navigation.dispatch(resetAction);
            }
            catch (error) {
                console.log(error)

                setLoading(false)
                setErrorMessage('Usuário não existe')
            }
        }

        return (
            <View>
                <Text style={styles.title}>
                    Login works!
            </Text>
                <View style={styles.inputContainer}
                    onFocus={() => this.onFocus()}
                >
                    <TextInput
                        style={styles.input}
                        placeholder={'Email'}
                        placeholderTextColor="rgba(0,0,0,.12)"
                        autoCapitalize="none"
                        autoCorrect={false}
                        underlineColorAndroid="rgba(0, 0, 0, 0)"
                        value={email}
                        onChangeText={email => setEmail(email)}
                    />
                    <Icon style={styles.inputIcon} name="email" size={32} color="gray" />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Password'}
                        placeholderTextColor="rgba(0,0,0,.12)"
                        autoCapitalize="none"
                        autoCorrect={false}
                        underlineColorAndroid="rgba(0, 0, 0, 0)"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={password => setPassword(password)}
                    />
                    <Icon style={styles.inputIcon} name="vpn-key" size={32} color="gray" />
                </View>
                <View style={styles.viewBtnLogin}>
                    <Button
                        onPress={signIn}
                        title="Login"
                        color={'#841584'}
                        accessibilityLabel="Login to your account!"
                    />
                </View>
            </View>
        )
    }

    onFocus() {
        this.setState({
            backgroundColor: 'green'
        })
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop: 'auto'
    },
    inputContainer: {
        height: 62,
        padding: 12,
        margin: 32,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderColor: 'rgba(0,0,0,.12)',
        borderWidth: 2,
        borderRadius: 8
    },
    inputContainerPress: {
        height: 62,
        padding: 12,
        margin: 32,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 8
    },
    input: {
        fontSize: 18
    },
    inputIcon: {
        flexDirection: 'row',
        marginLeft: 'auto',
        textAlignVertical: 'center',
        color: 'rgba(0,0,0,.12)'
    },
    viewBtnLogin: {
        margin: 32,
        borderRadius: 80
    }
});
