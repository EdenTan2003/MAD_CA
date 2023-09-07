import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, Image, TextInput, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import BackToPrev from '../components/backToPrev';
import { getCurrentUser, updateUser } from '../utils/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibraryAsync } from 'expo-image-picker';


export default function EditProfile() {

    const bg_img = require('../images/Recipe_BG.png');

    const [id, setId] = useState(null);
    const [nameInput, setNameInput] = useState("");
    const [usernameInput, setUsernameInput] = useState("");
    const [bioInput, setBioInput] = useState("");
    const [pfpUri, setpfpUri] = useState(null);
    const [token, setToken] = useState(null);

    const retrieveToken = async () => {
        try {
            const token = await AsyncStorage.getItem('accessToken');
            setToken(token);
            if (token) {
                const source = "https://firebasestorage.googleapis.com/v0/b/mad-ca3-a9576.appspot.com/o/Profile.png?alt=media&token=cec06dff-fa66-4071-a76c-fad58eead9c6";
                setpfpUri(source);
                setNameInput("John Doe");
                setUsernameInput("johndoe");
                setBioInput("I Love Cooking");
            }
            else {
                (async () => {
                    try {
                        getCurrentUser().then(async (user) => {
                            if (user) {
                                setId(user.id);
                                setNameInput(user.name);
                                setUsernameInput(user.username);
                                setBioInput(user.bio);
                                setpfpUri(user.profile_pic_uri);
                            }
                        })
                        .catch(error => {
                            console.error(error);
                        });
                    }
                    catch (e) {
                        console.log('Failed to fetch the data from storage')
                    }
                })();
            }
        } catch (error) {
            console.error(error);
        }
    };

    // Call the retrieveToken function to retrieve the token
    useEffect(() => {
        retrieveToken()
    }, []);

    const onSave = () => {
        if (nameInput === '') {
            Alert('Error', 'Name cannot be empty');
            return;
        }
        if (usernameInput === '') {
            Alert('Error', 'Username cannot be empty');
            return;
        }

        updateUser({
            id: id,
            name: nameInput,
            username: usernameInput,
            bio: bioInput,
            profile_pic_uri: pfpUri
        }).then(_ => {
            Alert.alert('Profile updated');
        }).catch(error => {
            Alert.alert('Error', error.message);
        });
    }

    const openImagePicker = async () => {
        const result = await launchImageLibraryAsync({ mediaType: "photo" });
        if (!result.didCancel) {
            const { assets: [{ uri }] } = result;
            setpfpUri(uri);
        }
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground source={bg_img} style={styles.bgImg}>
                    <View>
                        <BackToPrev />
                        <View style={styles.profileInfo}>
                            <Image style={styles.profileImg} source={{ uri: pfpUri }} />
                            <TouchableOpacity style={styles.changeProfileImageTextBtn} onPress={openImagePicker}>
                                <Text style={styles.changeProfileImageText}>Change Profile Image</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.fields}>
                            <TextInput style={styles.input} placeholder="Name" value={nameInput} onChangeText={(text) => setNameInput(text)} />
                            <TextInput style={styles.input} placeholder="Username" value={usernameInput} onChangeText={(text) => setUsernameInput(text)} />
                            <TextInput style={styles.bioInput} placeholder="Bio" value={bioInput} onChangeText={(text) => setBioInput(text)} />
                        </View>
                        <TouchableOpacity style={styles.saveBtn} onPress={() => onSave()}>
                            <Text style={styles.saveBtnText}>Save</Text>
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
    profileInfo: {
        alignItems: 'center',
        marginTop: 80,
    },
    profileImg: {
        width: 170,
        height: 170,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'black',
    },
    changeProfileImageTextBtn: {
        marginTop: 20,
        backgroundColor: '#FFD74A',
        borderRadius: 25,
        alignItems: 'center',
    },
    changeProfileImageText: {
        color: 'black',
        fontSize: 20,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
    },
    fields: {
        marginTop: 30,
        alignItems: 'center',
    },
    input: {
        width: '80%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 20,
        paddingLeft: 20,
        color: 'black',
        fontSize: 20,
    },
    bioInput: {
        width: '80%',
        height: 100,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 20,
        paddingLeft: 20,
        color: 'black',
        fontSize: 20,
    },
    saveBtn: {
        backgroundColor: '#FFD74A',
        width: '80%',
        height: 50,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    saveBtnText: {
        color: 'black',
        fontSize: 25,
    }
});