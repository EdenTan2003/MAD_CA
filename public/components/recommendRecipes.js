import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default function RecommendRecipes({ recipeName }) {

    return (
        <View style={styles.recipesRecommend}>
            <Icon name="trending-up-outline" size={30} color="red" style={styles.trendIcon} />
            <TouchableOpacity >
                <Text style={styles.recommendedRecipe}>{recipeName}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    recommendRecipesTitle: {
        fontSize: 25,
        color: 'white',
        paddingLeft: 20,
        marginTop: 50,
    },
    recipesRecommend: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 30,
    },
    trendIcon: {
        paddingTop: 5,
        paddingRight: 10,
    },
    recommendedRecipe: {
        fontSize: 20,
        color: 'white',
    }
});