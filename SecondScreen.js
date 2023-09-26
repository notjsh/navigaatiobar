import React, { useEffect, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, BackHandler } from "react-native";


export default  function SecondScreen({route,navigation}) {
    useEffect(() => {
        if (route.params?.message){
            alert(route.params.message);
        }
    BackHandler.addEventListener('hardwareBackPress',close);
     return() =>{
        BackHandler.addEventListener('hardwareBackPress',close);
     }
    }, [])
    function close() {
        navigation.goBack(null);
        return true;
    }
    

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#f3f2'
            }
        })
    }, [])
    return (
        <View style={styles.container}>
            <Text>Second Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
});