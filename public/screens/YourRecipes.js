import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, ActivityIndicator, Dimensions} from 'react-native';
import YourRecipeCard from '../components/yourRecipeCard';
import { ip_address } from '../utils/IPAddress';

export default function YourRecipes({navigation}) {
    const bg_img = require('../images/Recipe_BG.png');

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getYourRecipes = async () => {
        try {
            //get IPV4 address from settings
            const response = await fetch(`http://${ip_address}:8081/getRecipes/`);
            const json = await response.json();
            setData(json.yourRecipes);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getYourRecipes();
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground source={bg_img} style={styles.bgImg}>
                <View>
                    <Text style={styles.heading}>Your Recipes</Text>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View>
                            {isLoading ? <ActivityIndicator /> : (
                                <View style={styles.yourRecipes}>
                                    {data.map((item, index) => {
                                        return (
                                            <YourRecipeCard key={index} imageURL={item.imageURL} title={item.title} updateTime={item.last_updated} likesCount={item.likes} handlePress={() => navigation.navigate("Edit Your Recipe", {
                                                recipe: item
                                            })} />
                                        );
                                    })}
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
    heading: {
        fontSize: 35,
        textAlign: 'left',
        color: 'white',
        marginTop: 50,
        marginBottom: 10,
        marginLeft: 20,
    },
    yourRecipes: {
        marginBottom: 190,
    }
});

