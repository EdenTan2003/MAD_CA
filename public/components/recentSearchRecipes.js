import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default function RecentSearchRecipes({ recipeName }) {

    return (
        <View style={styles.recentSearches}>
            <TouchableOpacity>
                <Text style={styles.recentSearchRecipe}>{recipeName}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="close-outline" size={35} color="white" style={styles.closeIcon} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    recentSearches: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        width: '90%',
        marginLeft: 20,
        paddingRight: 20,
        marginTop: 10,
    },
    closeIcon: {
        paddingTop: 5
    },
    recentSearchRecipe: {
        fontSize: 20,
        color: 'white',
    },
});