import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function FilterOption({ optionValue }) {
    return (
        <TouchableOpacity style={styles.filterOptionsBtn}>
            <Text style={styles.modalText}>{optionValue}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    filterOptionsBtn: {
        backgroundColor: "#dddea6",
        borderRadius: 10,
        padding: 10,
        width: 140,
        marginBottom: 5
    },
    modalText: {
        fontSize: 15,
        fontWeight: '500',
    },
});