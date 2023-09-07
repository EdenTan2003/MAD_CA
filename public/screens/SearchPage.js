import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import RecentSearchRecipes from '../components/recentSearchRecipes';
import RecommendRecipes from '../components/recommendRecipes';

export default function SearchPage() {
    const bg_img = require('../images/Recipe_BG.png');

    const [searchTerm, setSearchTerm] = useState('');

    const navigation = useNavigation();

    const navigateToHomePage = () => {
        navigation.navigate('HomePage');
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={bg_img} style={styles.bgImg}>
                <View style={styles.topSearch}>
                    <TouchableOpacity style={styles.backBtn} onPress={navigateToHomePage}>
                        <Icon name="chevron-back-outline" size={50} color="white" style={styles.backIcon} />
                    </TouchableOpacity>
                    <View style={styles.searchField}>
                        <Icon name="search-outline" size={30} color="grey" style={styles.searchIcon} />
                        <TextInput
                            style={styles.input}
                            defaultValue={searchTerm}
                            placeholder="Search Recipes..."
                            placeholderTextColor="#aaaaaa"
                            onChangeText={text => setSearchTerm(text)}
                        />
                    </View>
                </View>
                <View>
                    <View style={styles.clearAllWithText}>
                        <Text style={styles.recentSearchTitle}>Recent Searches</Text>
                        <TouchableOpacity>
                            <Text style={styles.clearAllBtn}>Clear All</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <RecentSearchRecipes recipeName={"Teriyaki Chicken"} />
                        <RecentSearchRecipes recipeName={"Chicken Parmesan"} />
                        <RecentSearchRecipes recipeName={"Tonkotsu Ramen"} />
                        <RecentSearchRecipes recipeName={"Chicken Noodle Soup"} />
                    </View>
                </View>

                <View>
                    <Text style={styles.recommendRecipesTitle}>Recommended For You</Text>
                    <View>
                        <RecommendRecipes recipeName={"Fried Rice"} />
                        <RecommendRecipes recipeName={"Truffle Aglio Olio"} />
                        <RecommendRecipes recipeName={"Baked Rice"} />
                    </View>
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
    topSearch: {
        flexDirection: 'row',
        marginTop: 50,
        width: '100%',
    },
    backBtn: {
        borderRadius: 10,
        alignItems: 'center'
    },
    backIcon: {
        paddingLeft: 5,
        paddingRight: 5,
    },
    searchIcon: {
        marginLeft: 10,
    },
    searchField: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        width: '80%',
        height: 50,
    },
    input: {
        height: 50,
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 20,
        width: '80%',
    },
    clearAllWithText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 20,
    },
    recentSearchTitle: {
        fontSize: 25,
        color: 'white',
    },
    clearAllBtn: {
        paddingTop: 5,
        fontSize: 20,
        color: '#FFD74A',
    },
    recommendRecipesTitle: {
        fontSize: 25,
        color: 'white',
        paddingLeft: 20,
        marginTop: 50,
    },
    recipesRecommend: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 30,
    },
    trendIcon: {
        paddingTop: 5,
        paddingRight: 10,
    },
    recommendedRecipe: {
        fontSize: 20,
        color: 'white',
    }
});