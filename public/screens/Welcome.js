import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
    const bg_img = require('../images/Recipe_BG.png');

    const navigation = useNavigation();

    const navigateToLoginPage = () => {
        navigation.navigate('Login');
    }

    const navigateToSignUpPage = () => {
        navigation.navigate('SignUp');
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={bg_img} style={styles.bgImg}>
                <View style={styles.welcomeText}>
                    <Text style={styles.normalText}>Welcome to</Text>
                    <Text style={styles.appText}>GoRecipe App</Text>
                </View>
                <View style={styles.description}>
                    <Text style={styles.normalText}>A place where all recipes are shared to spread the joy of cooking.</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.noAccountText}>Don't Have An Account?</Text>
                    <TouchableOpacity style={styles.signUpbutton} onPress={navigateToSignUpPage}>
                        <Text style={styles.buttonText}>Create One</Text>
                    </TouchableOpacity>
                    <Text style={styles.haveAccountText}>Already Have An Account?</Text>
                    <TouchableOpacity style={styles.signInbutton} onPress={navigateToLoginPage}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
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
    welcomeText: {
        marginTop: 150,
        marginLeft: 20,
    },
    appText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center',
    },
    normalText: {
        fontSize: 30,
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center',
        width: 300,
        marginTop: 30,
    },
    description: {
        marginTop: 20,
        marginLeft: 20,
    },
    buttonContainer: {
        marginTop: 150
    },
    signUpbutton: {
        backgroundColor: 'white',
        width: '80%',
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 20,
        backgroundColor: '#FFD74A',
    },
    signInbutton: {
        backgroundColor: 'white',
        width: '80%',
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 20,
        backgroundColor: 'lightgrey',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    noAccountText: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
        textAlign: 'left',
        width: '80%',
        marginBottom: 5,
    },
    haveAccountText: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
        textAlign: 'left',
        width: '80%',
        marginBottom: 5,
    },
});

