import React from 'react';
import { StyleSheet, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { Header } from './components/Header'
import { Login } from './components/Login'

export default function App() {
    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea}>
                <Login />
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'android' ? 32 : 0
    },
    container: {
        flex: 1
    },
});
