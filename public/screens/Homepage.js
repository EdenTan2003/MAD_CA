import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, Pressable, Modal, ActivityIndicator, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import RecipeCard from '../components/recipeCard';
import FilterOption from '../components/filterOption';
import { getCurrentUser } from '../utils/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ip_address } from '../utils/IPAddress';

export default function Homepage({ navigation }) {

    const bg_img = require('../images/Recipe_BG.png');
    const header_img = require('../images/goRecipe_img.png');

    const [filterText, setFilterText] = useState("Easy To Make");
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [imgSrc, setImgSrc] = useState(null);

    const retrieveToken = async () => {
        try {
            const token = await AsyncStorage.getItem('accessToken');
            if (token) {
                const source = { uri: "https://firebasestorage.googleapis.com/v0/b/mad-ca3-a9576.appspot.com/o/Profile.png?alt=media&token=cec06dff-fa66-4071-a76c-fad58eead9c6" }
                setImgSrc(source);
            }
            else {
                getUser();
                navigation.addListener('focus', () => {
                    getUser();
                });
            }
        } catch (error) {
            console.error(error);
        }
    };

    // Call the retrieveToken function to retrieve the token
    useEffect(() => {
        retrieveToken()
    }, []);

    const getUser = () => {
        console.log("3")
        getCurrentUser().then(user => {
            const source = { uri: user.profile_pic_uri };
            if (user.profile_pic_uri != "") {
                setImgSrc(source);
            }
        })
        .catch(error => {
            console.error(error);
        })
    }

    const DATA = [
        {
            id: '1',
            title: 'All'
        },
        {
            id: '2',
            title: 'Chinese'
        },
        {
            id: '3',
            title: 'Japanese'
        },
        {
            id: '4',
            title: 'Korean'
        },
        {
            id: '5',
            title: 'Thai'
        },
        {
            id: '6',
            title: 'Vietnamese'
        },
        {
            id: '7',
            title: 'Indian'
        },
        {
            id: '8',
            title: 'Italian'
        },
        {
            id: '9',
            title: 'Mexican'
        },
    ]

    const CuisineSelectionFilter = ({ data, onValueChange }) => {
        return (
            <View style={{ flexDirection: 'row' }}>
                {data.map((x, i) => (
                    <FilterButton
                        key={i}
                        text={x.title}
                        id={i}
                        selectedIndex={selectedIndex}
                        callback={(id) => {
                            setSelectedIndex(id);
                            if (onValueChange) {
                                onValueChange(id);
                            }
                        }}
                    />
                ))}
            </View>
        );
    };

    const FilterButton = ({ callback, text, id, selectedIndex }) => {
        const clicked = selectedIndex === id;
        return (
            <TouchableOpacity
                style={[
                    styles.scrollBtnItem,
                    { backgroundColor: clicked ? '#FFD74A' : 'white' },
                ]}
                onPress={() => {
                    callback(id);
                }}>
                <Text style={styles.scrollBtnTitle}>
                    {text}
                </Text>
            </TouchableOpacity>
        );
    };

    const getRecipes = async () => {
        try {
            //get IPV4 address from settings
            const response = await fetch(`http://${ip_address}:8081/getRecipes/`);
            const json = await response.json();
            setData(json.recipes);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground source={bg_img} style={styles.bgImg}>
                <View>
                    <ImageBackground source={header_img} style={styles.header_img}>
                        <View style={styles.headingInteractions}>
                            <TouchableOpacity style={styles.profileBtn} onPress={() => navigation.navigate("Profile")}>
                                <Image source={imgSrc} style={styles.profileImg} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.searchBtn} onPress={() => navigation.navigate("Search Recipe")}>
                                <Icon name="search" size={40} color="black" />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                    <View>
                        <View style={styles.scrollBtn}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <CuisineSelectionFilter data={DATA} />
                            </ScrollView>
                        </View>

                        <View style={styles.filterBtnWithTxt}>
                            <Text adjustsFontSizeToFit numberOfLines={1} style={styles.filterText}>Current Filter: {filterText}</Text>
                            <TouchableOpacity style={styles.filterBtn} onPress={() => setModalVisible(true)}>
                                <Icon name="funnel-outline" size={30} color="white" />
                                <Text style={styles.filterTextIcon}>Filter</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Modal animationType="none" transparent={true} visible={modalVisible}
                                onRequestClose={() => {
                                    Alert.alert("Filter Options has been closed.");
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <View style={styles.modalView}>
                                    <Text style={styles.filterModalHeading}>Filter Options:</Text>
                                    <FilterOption optionValue={"Easy To Make"} />
                                    <FilterOption optionValue={"Difficult To Make"} />
                                    <FilterOption optionValue={"Most Liked"} />
                                    <Pressable style={styles.filterCloseBtn} onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={styles.filterCloseTxt}>Close</Text>
                                    </Pressable>
                                </View>
                            </Modal>
                        </View>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View>
                            {isLoading ? <ActivityIndicator /> : (
                                <View  style={styles.recipeScroll}>
                                    {data.map((item, index) => (
                                        <RecipeCard key={index} imageURL={item.imageURL} title={item.title} likes={item.likes} isLike={item.like} isBookmark={item.bookmark} handlePress={() => navigation.navigate("Recipe Info", {
                                            recipe: item
                                        })} />
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
    headingInteractions: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    header_img: {
        position: 'absolute',
        width: '100%',
        height: 140,
        zIndex: 4
    },
    profileBtn: {
        marginTop: 50,
        marginLeft: 15,
        borderRadius: 65,
        width: 65,
        height: 65,
    },
    profileImg: {
        height: 67,
        width: 65,
        borderRadius: 65,
        borderWidth: 1,
        borderColor: 'black',
    },
    searchBtn: {
        marginTop: 65,
        marginRight: 20,
    },
    scrollBtnItem: {
        marginLeft: 10,
        marginRight: 5,
        borderRadius: 20,
        height: 35,
        paddingTop: 6,
    },
    scrollBtnTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        textAlign: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    scrollBtn: {
        marginTop: 155,
        marginLeft: 3,
    },
    filterCloseTxt: {
        fontSize: 15,
    },
    filterCloseBtn: {
        marginTop: 5,
        borderRadius: 20,
        paddingTop: 5,
        elevation: 2,
        height: 30,
        width: 100,
        alignItems: "center",
        backgroundColor: "#FFD74A",
    },
    filterBtnWithTxt: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    filterTextIcon: {
        paddingTop: 5,
        paddingLeft: 5,
        color: 'white',
        fontSize: 17,
        fontWeight: '700',
    },
    filterBtn: {
        flexDirection: 'row',
        width: 70,
        height: 35,
        marginTop: 16,
        marginRight: 20,
    },
    filterText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
        marginLeft: 15,
    },
    filterModalHeading: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        marginLeft: 220,
        marginTop: 210,
        paddingTop: 20,
        height: 225,
        width: 160
    },
    recipeScroll: {
        marginBottom: 330,
    }
    // flatListScroll: {
    //     marginLeft: 10,
    // },
});
