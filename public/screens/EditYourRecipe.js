import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';
import SelectCuisineType from '../components/selectCuisineType';
import BackToPrev from '../components/backToPrev';

export default function EditYourRecipe({ route }) {
    const bg_img = require('../images/Recipe_BG.png');

    const [recipeName, onChangeRecipeName] = useState(route.params.recipe.title);
    const [recipeDesc, onChangeRecipeDesc] = useState(route.params.recipe.description);

    const [recipeIngredients, onChangeRecipeIngredients] = useState(route.params.recipe.ingredients);

    const [recipeSteps, onChangeRecipeSteps] = useState(route.params.recipe.steps);

    const saveRecipe = () => {
        if (recipeName === '') {
            alert('Recipe Name cannot be empty');
            return;
        }
        if (recipeDesc === '') {
            alert('Recipe Description cannot be empty');
            return;
        }
        if (recipeIngredients === '') {
            alert('Recipe Ingredients cannot be empty');
            return;
        }
        if (recipeSteps === '') {
            alert('Recipe Steps cannot be empty');
            return;
        }

        alert('Recipe Saved!');
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground source={bg_img} style={styles.bgImg}>
                    <View>
                        <BackToPrev />
                        <ScrollView>
                            <View style={styles.recipeImg}>
                                <Image source={{ uri: route.params.recipe.imageURL }} style={styles.image} />
                            </View>

                            <TouchableOpacity style={styles.editImgBtn}>
                                <Text style={styles.editImgBtnText}>Edit Image</Text>
                            </TouchableOpacity>

                            <SelectCuisineType />

                            <View style={styles.inputField}>
                                <Text style={styles.recipeHeading}>Recipe Name: </Text>
                                <TextInput style={styles.recipeNameInput} onChangeText={onChangeRecipeName} value={recipeName} />
                            </View>

                            <View style={styles.inputField}>
                                <Text style={styles.recipeHeading}>Description: </Text>
                                <TextInput style={styles.recipeDescInput} onChangeText={onChangeRecipeDesc} value={recipeDesc} multiline numberOfLines={5} />
                            </View>

                            <View style={styles.inputField}>
                                <Text style={styles.recipeHeading}>Ingredients: </Text>
                                <TextInput style={styles.recipeIngredientInput} onChangeText={onChangeRecipeIngredients} value={recipeIngredients} multiline numberOfLines={20} />
                            </View>

                            <View style={styles.inputField}>
                                <Text style={styles.recipeHeading}>Steps: </Text>
                                <TextInput style={styles.recipeStepsInput} onChangeText={onChangeRecipeSteps} value={recipeSteps} multiline numberOfLines={25} />
                            </View>

                            <TouchableOpacity style={styles.saveBtn} onPress={saveRecipe}>
                                <Text style={styles.saveBtnText}>Save</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </ImageBackground>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgImg: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        left: 0,
        top: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
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
    recipeImg: {
        width: '100%',
        height: 202,
        borderColor: 'black',
        borderWidth: 1,
    },
    image: {
        width: '100%',
        height: 200,
    },
    editImgBtn: {
        width: '90%',
        height: 40,
        backgroundColor: '#FFD74A',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20,
        borderColor: 'black',
        borderWidth: 1,
    },
    editImgBtnText: {
        fontSize: 20,
    },
    recipeHeading: {
        fontSize: 23,
        color: 'white',
        marginBottom: 5,
    },
    inputField: {
        alignSelf: 'center',
        width: '90%',
        marginTop: 25,
    },
    recipeNameInput: {
        width: '100%',
        borderRadius: 15,
        backgroundColor: 'white',
        fontSize: 20,
        paddingLeft: 15,
        paddingTop: 15,
        paddingBottom: 15,
    },
    recipeDescInput: {
        width: '100%',
        borderRadius: 15,
        backgroundColor: 'white',
        fontSize: 20,
        paddingLeft: 15,
        paddingTop: 15,
        paddingBottom: 15,
        textAlignVertical: 'top',
    },
    recipeIngredientInput: {
        width: '100%',
        borderRadius: 15,
        backgroundColor: 'white',
        fontSize: 20,
        paddingLeft: 15,
        paddingTop: 15,
        paddingBottom: 15,
        textAlignVertical: 'top',
    },
    recipeStepsInput: {
        width: '100%',
        borderRadius: 15,
        backgroundColor: 'white',
        fontSize: 20,
        paddingLeft: 15,
        paddingTop: 15,
        paddingBottom: 15,
        textAlignVertical: 'top',
    },
    saveBtn: {
        backgroundColor: '#FFD74A',
        width: '90%',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 100
    },
    saveBtnText: {
        color: 'black',
        fontSize: 25,
    }
});