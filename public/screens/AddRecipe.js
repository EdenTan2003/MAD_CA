import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SelectCuisineType from '../components/selectCuisineType';
import { launchImageLibraryAsync } from 'expo-image-picker';

export default function AddRecipe() {
    const bg_img = require('../images/Recipe_BG.png');

    const [recipeName, setRecipeName] = useState('');
    const [recipeDesc, setRecipeDesc] = useState('');
    const [recipeIngredients, setRecipeIngredients] = useState('');
    const [recipeSteps, setRecipeSteps] = useState('');
    const [foodUri, setFoodUri] = useState(null);

    const AddNewRecipe = () => {
        if (recipeName === '' || recipeDesc === '' || recipeIngredients === '' || recipeSteps === '') {
            alert('Please fill in all the fields');
            return;
        }
        if (foodUri === null) {
            alert('Please upload an image');
            return;
        }

        alert('Recipe ' + recipeName + ' Added Successfully');
        setFoodUri(null);
    }

    const openImagePicker = async () => {
        const result = await launchImageLibraryAsync({ mediaType: "photo" });
        if (!result.didCancel) {
            const { assets: [{ uri }] } = result;
            setFoodUri(uri);
        }
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground source={bg_img} style={styles.bgImg}>
                    <View>
                        <ScrollView>
                            <View style={styles.uploadImgWithBtn}>
                                <Image style={styles.uploadImg} source={{ uri: foodUri }} />
                                <TouchableOpacity style={styles.uploadBtn} onPress={openImagePicker}>
                                    <Text style={styles.uploadBtnText}>Upload Image</Text>
                                    <Icon name="add" size={30} color="black" />
                                </TouchableOpacity>
                            </View>

                            <SelectCuisineType />

                            <View style={styles.inputField}>
                                <Text style={styles.recipeHeading}>Recipe Name: </Text>
                                <TextInput style={styles.recipeNameInput} placeholder="Your Recipe Name" onChangeText={(text) => setRecipeName(text)} />
                            </View>

                            <View style={styles.inputField}>
                                <Text style={styles.recipeHeading}>Description: </Text>
                                <TextInput style={styles.recipeDescInput} placeholder="Your Recipe Description... " onChangeText={(text) => setRecipeDesc(text)} multiline numberOfLines={5} />
                            </View>

                            <View style={styles.inputField}>
                                <Text style={styles.recipeHeading}>Ingredients: </Text>
                                <TextInput style={styles.recipeIngredientInput} placeholder={"• 1x Egg\n• 2x Diced Onions\n• 4x Teaspoons of Sugar..."} onChangeText={(text) => setRecipeIngredients(text)} multiline numberOfLines={25} />
                            </View>

                            <View style={styles.inputField}>
                                <Text style={styles.recipeHeading}>Steps: </Text>
                                <TextInput style={styles.recipeStepsInput} placeholder={"1. Do Something\n2. Do Another Thing\n3. Do One More Thing..."} onChangeText={(text) => setRecipeSteps(text)} multiline numberOfLines={25} />
                            </View>

                            <TouchableOpacity style={styles.submitBtn} onPress={AddNewRecipe}>
                                <Text style={styles.submitBtnText}>Add Recipe</Text>
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
    uploadImgWithBtn: {
        width: '100%',
        height: 200,
    },
    uploadImg: {
        position: 'absolute',
        backgroundColor: 'rgba(240,240,240,0.7)',
        height: 190,
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        shadowColor: 'black',
        elevation: 5,
    },
    uploadBtn: {
        position: 'absolute',
        top: 80,
        alignSelf: 'center',
        backgroundColor: '#FFD74A',
        borderRadius: 20,
        width: 220,
        height: 40,
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        zIndex: 2,
        flexDirection: 'row',
    },
    uploadBtnText: {
        color: 'black',
        fontSize: 20,
        paddingLeft: 30,
        paddingRight: 10,
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
        height: 50,
        borderRadius: 15,
        backgroundColor: 'white',
        fontSize: 20,
        paddingLeft: 15,
    },
    recipeDescInput: {
        width: '100%',
        height: 100,
        borderRadius: 15,
        backgroundColor: 'white',
        fontSize: 20,
        paddingLeft: 15,
        paddingTop: 15,
        textAlignVertical: 'top',
    },
    recipeIngredientInput: {
        width: '100%',
        height: 250,
        borderRadius: 15,
        backgroundColor: 'white',
        fontSize: 20,
        paddingLeft: 15,
        paddingTop: 15,
        textAlignVertical: 'top',
    },
    recipeStepsInput: {
        width: '100%',
        height: 250,
        borderRadius: 15,
        backgroundColor: 'white',
        fontSize: 20,
        paddingLeft: 15,
        paddingTop: 15,
        textAlignVertical: 'top',
    },
    submitBtn: {
        backgroundColor: '#FFD74A',
        width: '90%',
        height: 50,
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 100,
    },
    submitBtnText: {
        fontSize: 25,
    },
});