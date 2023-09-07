import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default function RecipeCard({handlePress, imageURL, title, likes, isLike, isBookmark}) {
    const [likesCount, setLikeCount] = useState(likes);
    const [like, setLike] = useState(isLike);
    const [bookmark, setBookmark] = useState(isBookmark);

    const likeHandler = () => {
        setLike(!like);
        let newLikes = like ? likesCount - 1 : likesCount + 1;
        setLikeCount(newLikes);
    }

    const bookmarkHandler = () => {
        setBookmark(!bookmark);
    }

    return (
        <TouchableOpacity style={styles.recipeCard} onPress={handlePress}>
            <View style={styles.ImgStyling}>
                <Image source={{uri:imageURL}} style={styles.recipeImg} />
            </View>
            <View style={styles.recipeCardInfo}>
                <View style={styles.recipeDesc}>
                    <Text adjustsFontSizeToFit numberOfLines={1} style={styles.recipeCardTitle}>{title}</Text>
                    <Text style={styles.recipeLikes}>{likesCount} Likes</Text>
                </View>

                <View style={styles.recipeBtnInteractions}>
                    <TouchableOpacity style={styles.heart} onPress={() => likeHandler()}>
                        <Icon name={like ? "heart" : "heart-outline"} size={30} color={like ? "red" : "black"} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bookmark} onPress={() => bookmarkHandler()}>
                        <Icon name={bookmark ? "bookmark" : "bookmark-outline"} size={30} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    recipeCardInfo: {
        flexDirection: 'row',
    },
    recipeDesc: {
        marginTop: 5,
        marginLeft: 20,
        width: 200,
    },
    recipeCardTitle: {
        fontSize: 23,
        width: 250,
    },
    recipeLikes: {
        fontSize: 20,
    },
    recipeBtnInteractions: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 50,
    },
    heart: {
        marginRight: 15,
    },
    recipeImg: {
        width: '100%',
        height: 125,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        alignSelf: 'center',
    },
    ImgStyling: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'black',
    },
    recipeCard: {
        backgroundColor: 'white',
        width: '90%',
        height: 200,
        alignSelf: 'center',
        borderRadius: 20,
        marginBottom: 20,
        borderColor: 'black',
        borderWidth: 1,
    },
});