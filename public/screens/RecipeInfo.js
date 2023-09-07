import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import RecipeInfoDesc from '../components/recipeInfoDesc';
import BackToPrev from '../components/backToPrev';


export default function RecipeInfo({route}) {

    const bg_img = require('../images/Recipe_BG.png');
    const [likesCount, setLikeCount] = useState(route.params.recipe.likes);
    const [bookmark, setBookmark] = useState(route.params.recipe.bookmark);
    const [like, setLike] = useState(route.params.recipe.like);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [yCoordinate, setYCoordinate] = useState(0);
    const [yCoordinateIngredient, setYCoordinateIngredient] = useState(0);
    const [yCoordinateStep, setYCoordinateStep] = useState(0);
    const listRef = useRef(null);
    const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
    const CONTENT_OFFSET_THRESHOLD = 200;

    const likeHandler = () => {
        setLike(!like);
        let newLikes = like ? likesCount - 1 : likesCount + 1;
        setLikeCount(newLikes);
    }

    const bookmarkHandler = () => {
        setBookmark(!bookmark);
    }

    const DATA = [
        {
            id: '1',
            title: 'Description'
        },
        {
            id: '2',
            title: 'Ingredients'
        },
        {
            id: '3',
            title: 'Steps'
        }
    ]

    const Selection = ({ data, onValueChange }) => {
        return (
            <View style={{ flexDirection: 'row' }}>
                {data.map((x, i) => (
                    <SelectButton
                        key={i}
                        text={x.title}
                        id={i}
                        selectedIndex={selectedIndex}
                        callback={(id) => {
                            setSelectedIndex(id);
                            if (onValueChange) {
                                onValueChange(id);
                            }
                            if (id == 0) {
                                listRef.current.scrollTo({y: yCoordinate, animated: true });
                            }
                            else if (id == 1) {
                                listRef.current.scrollTo({y: yCoordinateIngredient, animated: true });
                            }
                            else if (id == 2) {
                                listRef.current.scrollTo({y: yCoordinateStep, animated: true });
                            }
                        }}
                    />
                ))}
            </View>
        );
    };

    const SelectButton = ({ callback, text, id, selectedIndex }) => {
        const clicked = selectedIndex === id;
        return (
            <TouchableOpacity
                style={[
                    styles.recipeInfoBtn,
                    { backgroundColor: clicked ? '#FFD74A' : 'white' },
                ]}
                onPress={() => {
                    callback(id);
                }}>
                <Text style={styles.recipeInfoBtnTitle}>
                    {text}
                </Text>
            </TouchableOpacity>
        );
    };

    const onLayoutDesc = (event) => {
        setYCoordinate(event.nativeEvent.layout.y);
    }

    const onLayoutIngredient = (event) => {
        setYCoordinateIngredient(event.nativeEvent.layout.y);
    }

    const onLayoutSteps = (event) => {
        setYCoordinateStep(event.nativeEvent.layout.y);
    }

    const scrollToTopBtn = () => {
        listRef.current?.scrollTo({y: 0, animated: true });
        setSelectedIndex(0);
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={bg_img} style={styles.bgImg}>
                <View>
                    <BackToPrev />

                    <ScrollView ref={listRef} onScroll={event => { setContentVerticalOffset(event.nativeEvent.contentOffset.y); }} >
                        <View style={styles.recipeImg}>
                            <Image source={{uri: route.params.recipe.imageURL}} style={styles.image} />
                        </View>
                        <View style={styles.recipeHeading}>
                            <View style={styles.recipeInfo}>
                                <Text style={styles.recipeName} adjustsFontSizeToFit numberOfLines={1}>{route.params.recipe.title}</Text>
                                <Text style={styles.recipeAuthor}>By: {route.params.recipe.author}</Text>
                            </View>
                            <View style={styles.btnInteractions}>
                                <TouchableOpacity style={styles.bookmark} onPress={() => bookmarkHandler()}>
                                    <Icon name={bookmark ? "bookmark" : "bookmark-outline"} size={30} color={bookmark ? "black" : "white"} />
                                </TouchableOpacity>
                                <View style={styles.btnLike}>
                                    <Text style={styles.likeCount}>{likesCount}</Text>
                                    <TouchableOpacity onPress={() => likeHandler()}>
                                        <Icon name={like ? "heart" : "heart-outline"} size={30} color={like ? "red" : "white"} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={styles.recipeInfoSelectionBtn}>
                            <Selection data={DATA} />
                        </View>

                        <Text  onLayout={onLayoutDesc}/>
                        <RecipeInfoDesc title={"Description"} text={route.params.recipe.description} />

                        <Text  onLayout={onLayoutIngredient}/>
                        <RecipeInfoDesc title={"Ingredients"} text={route.params.recipe.ingredients} />
                        
                        <Text  onLayout={onLayoutSteps}/>
                        <RecipeInfoDesc title={"Steps"} text={route.params.recipe.steps} />
                        
                    </ScrollView>
                    
                    {contentVerticalOffset > CONTENT_OFFSET_THRESHOLD && (
                        <TouchableOpacity style={styles.scrollToTopBtn} onPress={scrollToTopBtn}>
                            <Icon name="arrow-up" size={30} color="white" />
                        </TouchableOpacity>
                    )}
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
        height: 200,
        borderColor: 'black',
        borderWidth: 1,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    recipeHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    recipeInfo: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
    },
    recipeName: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
        width: 250,
    },
    recipeAuthor: {
        fontSize: 20,
        color: 'white',
    },
    btnInteractions: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginTop: 20,
        marginRight: 20,
    },
    btnLike: {
        flexDirection: 'row',
        marginTop: 15,
    },
    likeCount: {
        marginRight: 10,
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
    },
    recipeInfoSelectionBtn: {
        marginTop: 20,
        alignSelf: 'center',
    },
    recipeInfoBtn: {
        borderRadius: 20,
        height: 40,
        justifyContent: 'center',
        marginRight: 6,
        marginLeft: 6,
    },
    recipeInfoBtnTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
        textAlign: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 2,
    },
    scrollToTopBtn: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#FFD74A',
        borderRadius: 50,
        padding: 10,
        zIndex: 1
    }
});