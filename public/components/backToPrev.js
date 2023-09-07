import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function BackToPrev() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={40} color="white" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    backBtn: {
        position: 'absolute',
        top: 30,
        left: 20,
        backgroundColor: 'rgba(60,60,60,0.7)',
        borderRadius: 10,
        width: 45,
        alignItems: 'center',
        zIndex: 3,
    },
});