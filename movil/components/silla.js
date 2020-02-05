import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text> Dome</Text>
            <Image style ={styles.image} source={require('../assets/comicsilla.jpg')}/>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
     image: {
         borderRadius: 200,
         height: 200,
         width: 200
     }
});