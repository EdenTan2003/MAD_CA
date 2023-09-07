import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity, ImageBackground, Image, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Google Sign In
// import 'expo-dev-client';
// import { auth, googleProvider } from '../config';

// import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

// WebBrowser.maybeCompleteAuthSession();

export default function Login() {
    const [signedIn, setSignedIn] = useState(false);
    const bg_img = require('../images/Recipe_BG.png');

    const navigation = useNavigation();

    const navigateToHomePage = () => {
        navigation.navigate('HomeScreen');
    }

    const navigateToSignUpPage = () => {
        navigation.navigate('SignUp');
    }


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);


    //Google Sign In
    const storeToken = async (token) => {
        try {
            await AsyncStorage.setItem('accessToken', token);
        } catch (error) {
            console.error(error);
        }
    };

    const [accessToken, setAccessToken] = useState();

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: "585046557463-1qik51q8c9km1ed7h05g4k0tu2d6025p.apps.googleusercontent.com",
        androidClientId: "585046557463-0hl9cndpsg3n8al3a1ik24jut8uqrbp3.apps.googleusercontent.com",
        webClientId: "585046557463-0hl9cndpsg3n8al3a1ik24jut8uqrbp3.apps.googleusercontent.com"
    });

    useEffect(() => {
        if (response?.type === 'success') {
            setAccessToken(response.authentication.accessToken);
            storeToken(response.authentication.accessToken);
            navigateToHomePage()
        }
    }, [response]);

    //End Of Google Sign In

    useEffect(() => {
        (async () => {
            try {
                const users = await AsyncStorage.getItem('users');
                if (users == null) {
                    await AsyncStorage.setItem('users', JSON.stringify([]));
                    setUsers([]);
                }
                else {
                    setUsers(JSON.parse(users));
                }
            } catch (e) {
                console.log('Failed to fetch the data from storage');
            }
        })();
    }, []);

    const onSubmit = async () => {
        try {
            if (username != "" && password != "") {
                const users = await AsyncStorage.getItem('users');
                console.log(users);
                const parsedUsers = JSON.parse(users);
                const user = parsedUsers.filter(user => user.username === username && user.password === password);
                if (user.length > 0) {
                    try {
                        await AsyncStorage.setItem("currentUser", JSON.stringify(user[0]));
                        navigateToHomePage();
                    }
                    catch (e) {
                        console.log('Failed to save the data to the storage');
                    }
                }
                else {
                    Alert.alert(
                        "Log In Error",
                        "Invalid username or password",
                        [
                            {
                                text: "OK"
                            }
                        ]
                    );
                }
            }
            else {
                Alert.alert(
                    "Log In Error",
                    "Please enter username and password",
                    [
                        {
                            text: "OK"
                        }
                    ]
                );
            }
        }
        catch (e) {
            console.log('Failed to fetch the data from storage');
        }
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground source={bg_img} style={styles.bgImg}>
                    <View>
                        <Text style={styles.title}>Log In</Text>
                        <Text style={styles.appName}>GoRecipe</Text>
                        <Text style={styles.description}>Enter log in details to proceed</Text>
                    </View>
                    <View>
                        
                        <TouchableOpacity style={styles.googleBtn} onPress={ () => promptAsync({ useProxy: true, showInRecents: true }) }>
                            <Image source={require('../images/google.png')} style={styles.googleIcon} />
                            <Text style={styles.googleText}>Sign In with Google</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.orText}>Or</Text>
                    <View style={styles.fields}>
                        <TextInput style={styles.userInput} placeholder="Username" onChangeText={(text) => setUsername(text)} onSubmit={onSubmit} />
                        <TextInput style={styles.userInput} placeholder="Password" onChangeText={(text) => setPassword(text)} onSubmit={onSubmit} secureTextEntry={true} />
                    </View>
                    <TouchableOpacity style={styles.loginBtn} onPress={() => onSubmit()}>
                        <Text style={styles.loginBtnText}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.whiteLine} />
                    <View style={styles.noAccCreate}>
                        <Text style={styles.noAccDescription}>No Account?</Text>
                        <TouchableOpacity style={styles.signUpBtn} onPress={navigateToSignUpPage}>
                            <Text style={styles.signUpBtnText}>Create One</Text>
                        </TouchableOpacity>
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
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 60,
        alignSelf: 'center',
    },
    appName: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        marginTop: 30,
    },
    description: {
        fontSize: 25,
        width: 225,
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 30,
    },
    googleBtn: {
        backgroundColor: '#FFD74A',
        flexDirection: 'row',
        width: '80%',
        height: 50,
        alignSelf: 'center',
        borderRadius: 15,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    googleIcon: {
        marginRight: 20,
        width: 40,
        height: 40,
    },
    googleText: {
        fontSize: 20,
    },
    orText: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
        marginTop: 20,
    },
    fields: {
        marginTop: 20,
    },
    userInput: {
        backgroundColor: 'white',
        width: '80%',
        height: 50,
        alignSelf: 'center',
        borderRadius: 15,
        marginBottom: 30,
        paddingLeft: 40,
        fontSize: 20,
        borderColor: 'black',
        borderWidth: 1,
    },
    loginBtn: {
        backgroundColor: '#FFD74A',
        width: '80%',
        height: 50,
        alignSelf: 'center',
        borderRadius: 15,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginBtnText: {
        fontSize: 25,
    },
    whiteLine: {
        backgroundColor: 'white',
        width: '65%',
        height: 1,
        alignSelf: 'center',
        marginTop: 30,
    },
    noAccCreate: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 20,
    },
    noAccDescription: {
        fontSize: 20,
        color: 'white',
    },
    signUpBtn: {
        marginLeft: 10,
    },
    signUpBtnText: {
        fontSize: 20,
        color: '#FFD74A',
    }
});