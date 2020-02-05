import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dome from './components/silla';

export default function App() {
    return (
        <Dome/>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});