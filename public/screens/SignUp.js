import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, ImageBackground, Image, Alert, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibraryAsync } from 'expo-image-picker';

export default function SignUp() {
    const bg_img = require('../images/Recipe_BG.png');

    const navigation = useNavigation();

    const navigateToLoginPage = () => {
        navigation.navigate('Login');
    }

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [profile_pic_uri, setProfile_pic_uri] = useState('');

    const onSubmit = async () => {
        try {
            const users = await AsyncStorage.getItem('users');
            const parsedUsers = JSON.parse(users);

            if (password !== confirmPassword) {
                alert('Passwords do not match');
                setPassword('');
                setConfirmPassword('');
                return;
            }
            else {
                if (name === '' || username === '' || password === '' || confirmPassword === '') {
                    alert('Please fill in all the fields');
                    return;
                }
                if (profile_pic_uri === '') {
                    alert('Please upload a profile picture');
                    return;
                }
                else {
                    const user = parsedUsers.filter(user => user.username == username && user.name == name);

                    if (user.length > 0) {
                        alert('User already exists');
                        return;
                    }
                    else {
                        const userObj = {
                            name: name,
                            username: username,
                            password: password,
                            profile_pic_uri: profile_pic_uri
                        }

                        parsedUsers.push(userObj);
                        await AsyncStorage.setItem('users', JSON.stringify(parsedUsers));
                        await AsyncStorage.setItem('currentUser', JSON.stringify(userObj));

                        setName('');
                        setUsername('');
                        setPassword('');
                        setConfirmPassword('');

                        signUpSuccess();
                    }
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    const signUpSuccess = () => {
        Alert.alert(
            "Sign Up Success",
            "You will be redirected to the login page",
            [
                {
                    text: "Ok",
                    onPress: () => navigateToLoginPage(),
                    style: "cancel"
                }
            ]
        )
    }

    const handleUploadProfilePicture = async () => {
        try {
            const result = await launchImageLibraryAsync({ mediaType: 'photo', includeBase64: true });
            if (!result.didCancel) {
                const { assets: [{ fileName, uri, base64 }] } = result;
                setProfile_pic_uri(uri);
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground source={bg_img} style={styles.bgImg}>
                    <View>
                        <Text style={styles.title}>Sign Up</Text>
                        <Text style={styles.appName}>GoRecipe</Text>
                    </View>
                    <View style={styles.fields}>
                        <Text style={styles.description}>Create your Account</Text>
                        <TouchableOpacity style={styles.uploadBtn} onPress={handleUploadProfilePicture}>
                            <Text style={styles.uploadImgText}>Upload Profile Picture</Text>
                        </TouchableOpacity>
                        <Text style={styles.imageUploaded}>{profile_pic_uri ? "Image Uploaded" : "Image Not Uploaded"}</Text>
                        <TextInput style={styles.userInput} placeholder="Name" onChangeText={(text) => setName(text)} onSubmit={onSubmit} />
                        <TextInput style={styles.userInput} placeholder="Username" onChangeText={(text) => setUsername(text)} onSubmit={onSubmit} />
                        <TextInput style={styles.userInput} placeholder="Password" onChangeText={(text) => setPassword(text)} onSubmit={onSubmit} secureTextEntry={true} />
                        <TextInput style={styles.userInput} placeholder="Confirm Password" onChangeText={(text) => setConfirmPassword(text)} onSubmit={onSubmit} secureTextEntry={true} />
                    </View>
                    <TouchableOpacity style={styles.loginBtn} onPress={() => onSubmit()}>
                        <Text style={styles.loginBtnText}>Sign Up</Text>
                    </TouchableOpacity>
                    <View style={styles.whiteLine} />
                    <View style={styles.noAccCreate}>
                        <Text style={styles.noAccDescription}>Have an Account?</Text>
                        <TouchableOpacity style={styles.signUpBtn} onPress={navigateToLoginPage}>
                            <Text style={styles.signUpBtnText}>Sign In</Text>
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
    inner: {
        flex: 1,
        justifyContent: 'space-around',
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
        color: 'white',
        alignSelf: 'center',
        marginTop: 5,
        width: '80%',
    },
    fields: {
        marginTop: 35,
    },
    uploadBtn: {
        backgroundColor: '#FFD74A',
        width: '80%',
        height: 50,
        alignSelf: 'center',
        borderRadius: 15,
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageUploaded: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
        marginBottom: 20,
    },
    uploadImgText: {
        fontSize: 20,
    },
    userInput: {
        backgroundColor: 'white',
        width: '80%',
        height: 50,
        alignSelf: 'center',
        borderRadius: 15,
        marginBottom: 20,
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