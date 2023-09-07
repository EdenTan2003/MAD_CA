import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function RecipeInfoDesc({title, text}) {
    return (
        <View style={styles.recipeDescription}>
            <View style={styles.descriptionStyling}>
                <Text style={styles.descriptionTitle}>{title}</Text>
            </View>
            <Text style={styles.descriptionText}>
                {text}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    recipeDescription: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
    },
    descriptionStyling: {
        borderBottomWidth: 1,
        borderColor: 'black',
        backgroundColor: '#FFD74A',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    descriptionTitle: {
        fontSize: 25,
        padding: 10,
        paddingLeft: 20,
        width: '100%',
        alignSelf: 'center',
    },
    descriptionText: {
        fontSize: 20,
        padding: 20,
    },
});