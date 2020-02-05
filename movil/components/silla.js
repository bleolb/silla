import React, {component} from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView} from 'react-native';
import Axios from 'axios';

const API_URL="";

export default class Dome extends Components{ 

    state ={
        fedex=[],
        correosEcuador=[],
        serviEntrega=[]
    };
    
    fedex=()=>{
        Axios.get(API_URL)
        .then(res=>{
            const dataFedex=res.data;
            this.setState({dataFedex});
            alert(JSON.strinfy(dataFedex[0]))
        })
    }
    correosEcuador=()=>{
        Axios.get(API_URL)
        .then(res=>{
            const dataCorreos=res.data;
            this.setState({dataCorreos});
            alert(JSON.strinfy(dataCorreos[1]))
        })
    }
    serviEntrega=()=>{
        Axios.get(API_URL)
        .then(res=>{
            const dataSentrega=res.data;
            this.setState({dataSentrega});
            alert(JSON.strinfy(dataSentrega[2]))
        })
    }



render() {
    return (
        <View style={styles.container}>
            <Image style ={styles.image} source={require('../assets/comicsilla.jpg')}/>
            <View style={styles.modo}/>
            <View style={{ fontSize= 10}}>Opciones</View>
            <Text style={styles.button}>Fedex</Text>
            <Text style={styles.button}>Correos Ecuador</Text>
            <Text style={styles.button}>ServiEntrega</Text>
        </View>
        
        

    );

 }
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