import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default function YourRecipeCard({ handlePress, imageURL, title, updateTime, likesCount }) {

    const showConfirmation = () => {
        Alert.alert(
            `Delete ${title} Recipe`,
            "Are you sure that you want to delete this recipe?",
            [
                {
                    text: "Cancel",
                },
                { 
                    text: "Delete", onPress: () => {
                        Alert.alert(
                            "Recipe Deleted",
                            `${title} has been deleted`,
                            [
                                {
                                    text: "OK",
                                }
                            ]
                        )
                    }                    
                }
            ]
        )
    }

        return (
            <TouchableOpacity style={styles.recipeCard} onPress={handlePress}>
                <View style={styles.ImgStyling}>
                    <Image source={{ uri: imageURL }} style={styles.recipeImg} />
                </View>
                <View style={styles.recipeCardInfo}>
                    <View style={styles.recipeDesc}>
                        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.recipeCardTitle}>{title}</Text>
                        <Text style={styles.lastUpdate}>Last Updated: {updateTime}</Text>
                        <Text style={styles.recipeLikes}>Liked By <Text style={styles.likesFont}>{likesCount}</Text> People</Text>
                    </View>
                    <View style={styles.recipeBtnInteractions}>
                        <TouchableOpacity style={styles.delete} onPress={showConfirmation}>
                            <Icon name={"trash-outline"} size={40} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }


    const styles = StyleSheet.create({
        recipeCardInfo: {
            flexDirection: 'row',
        },
        recipeDesc: {
            marginTop: 5,
            marginLeft: 20,
            width: 200,
        },
        recipeCardTitle: {
            fontSize: 23,
            width: 250,
        },
        lastUpdate: {
            fontSize: 18,
            color: 'black',
            width: 250,
        },
        recipeLikes: {
            fontSize: 20,
            paddingBottom: 5,
        },
        likesFont: {
            fontWeight: 'bold',
        },
        recipeBtnInteractions: {
            flexDirection: 'row',
            marginTop: 30,
            marginLeft: 85,
        },
        recipeImg: {
            width: '100%',
            height: 125,
            borderTopLeftRadius: 18,
            borderTopRightRadius: 18,
            alignSelf: 'center',
        },
        ImgStyling: {
            width: '100%',
            borderBottomWidth: 1,
            borderColor: 'black',
        },
        recipeCard: {
            backgroundColor: 'white',
            width: '90%',
            alignSelf: 'center',
            borderRadius: 20,
            marginTop: 10,
            marginBottom: 10,
            borderColor: 'black',
            borderWidth: 1,
        }
    });