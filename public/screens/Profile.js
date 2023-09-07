import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RecipeCardBookmarkProfile from '../components/recipeCardBookmarkProfile';
import BackToPrev from '../components/backToPrev';
import { getCurrentUser } from '../utils/storage';
import { ip_address } from '../utils/IPAddress';

export default function Profile({ navigation }) {
    const bg_img = require('../images/Recipe_BG.png');

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [bio, setBio] = useState("");
    const [imgSrc, setImgSrc] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [token, setToken] = useState(null);

    const retrieveToken = async () => {
        try {
            const token = await AsyncStorage.getItem('accessToken');
            setToken(token);
            if (token) {
                const source = { uri: "https://firebasestorage.googleapis.com/v0/b/mad-ca3-a9576.appspot.com/o/Profile.png?alt=media&token=cec06dff-fa66-4071-a76c-fad58eead9c6" }
                setImgSrc(source);
                setName("John Doe");
                setUsername("johndoe");
                setBio("I Love Cooking");
            }
            else {
                getUser();
                navigation.addListener('focus', () => {
                    getUser();
                });
            }
            getBookmarkRecipes();
        } catch (error) {
            console.error(error);
        }
    };

    // Call the retrieveToken function to retrieve the token
    useEffect(() => {
        retrieveToken()
    }, []);

    const getUser = () => {
        getCurrentUser().then(user => {
            setName(user.name);
            setUsername(user.username);
            setBio(user.bio);
            const source = { uri: user.profile_pic_uri };
            if (user.profile_pic_uri != "") {
                setImgSrc(source);
            }
        })
        .catch(error => {
            console.error(error);
        });
    }

    const getBookmarkRecipes = async () => {
        try {
            //get IPV4 address from settings
            const response = await fetch(`http://${ip_address}:8081/getRecipes/`);
            const json = await response.json();
            setData(json.bookmarkedRecipes);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const clearToken = async () => {
        try {
            await AsyncStorage.removeItem('accessToken');
        } catch (error) {
            console.error(error);
        }
    };

    const logout = async () => {
        if (token) {
            clearToken();
            console.log("Google Log Out")
        }
        else {
            await AsyncStorage.removeItem('currentUser');
            console.log("Log Out")
        }
        // await AsyncStorage.clear();
        navigation.navigate('Welcome');
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={bg_img} style={styles.bgImg}>
                <View>
                    <BackToPrev />
                    <TouchableOpacity style={styles.logOutBtn} onPress={logout}>
                        <Text style={styles.logOutTxt}>Log Out</Text>
                        <Icon name="log-out-outline" size={40} color="white" />
                    </TouchableOpacity>
                    <ScrollView>
                        <View style={styles.profileInfo}>
                            <Image style={styles.profileImg} source={imgSrc} />
                            <Text style={styles.profileName}>{name}</Text>
                            <Text style={styles.profileUsername}>@{username}</Text>
                            <Text style={styles.profileBio}>{bio}</Text>
                            <TouchableOpacity style={styles.editProfileBtn} onPress={() => navigation.navigate("Edit Profile")}>
                                <Text style={styles.editBtnTxt}>Edit Profile</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.bookmarkHeading}>Your Bookmarks</Text>
                            <TextInput style={styles.searchBookmarksField} placeholder="Search Your Bookmarks..." />
                        </View>
                        <View>
                            {isLoading ? <ActivityIndicator /> : (
                                <View style={styles.bookmarkRecipes}>
                                    {data.map((item, index) => (
                                        <RecipeCardBookmarkProfile key={index} imageURL={item.imageURL} title={item.title} likes={item.likes} isLike={item.like} isBookmark={item.bookmark} handlePress={() => navigation.navigate("Recipe Info",
                                            { recipe: item }
                                        )} />
                                    ))}
                                </View>
                            )}
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
    logOutBtn: {
        position: 'absolute',
        top: 30,
        right: 10,
        borderRadius: 10,
        alignItems: 'center',
        zIndex: 3,
        flexDirection: 'row',
    },
    logOutTxt: {
        fontSize: 20,
        color: 'white',
    },
    profileInfo: {
        alignItems: 'center',
        marginTop: 50,
    },
    profileImg: {
        width: 135,
        height: 135,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'black',
    },
    profileName: {
        fontSize: 25,
        color: 'white',
        marginTop: 10,
    },
    profileUsername: {
        fontSize: 20,
        color: 'white',
        marginTop: 5,
    },
    profileBio: {
        fontSize: 20,
        color: 'white',
        marginTop: 10,
    },
    editProfileBtn: {
        backgroundColor: '#FFD74A',
        borderRadius: 40,
        marginTop: 20,
        width: 180,
        height: 40,
        alignItems: 'center',
    },
    editBtnTxt: {
        fontSize: 20,
        color: 'black',
        marginTop: 6,
    },
    bookmarkHeading: {
        fontSize: 25,
        color: 'white',
        marginTop: 20,
        marginLeft: 20,
    },
    searchBookmarksField: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 10,
        width: '90%',
        height: 40,
        paddingLeft: 20,
        alignSelf: 'center',
        fontSize: 20,
    },
    bookmarkRecipes: {
        marginBottom: 100,
    }
});