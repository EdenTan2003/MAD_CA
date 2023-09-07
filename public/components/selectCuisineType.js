import React, { useState } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

export default function SelectCuisineType() {

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const data = [
        { label: 'Asian', value: '1' },
        { label: 'Chinese', value: '2' },
        { label: 'Japanese', value: '3' },
        { label: 'Korean', value: '4' },
        { label: 'Thai', value: '5' },
        { label: 'Vietnamese', value: '6' },
        { label: 'Indian', value: '7' },
        { label: 'Italian', value: '8' },
        { label: 'Mexican', value: '9' },
    ];

    return (
        <View style={styles.cuisineTypeSelect}>
            <Text style={styles.selectCuisineHeading}>Select Cuisine Type: </Text>
            <Dropdown
                statusBarIsTranslucent={true}
                style={[styles.dropdown, isFocus]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Cuisine' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    cuisineTypeSelect: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 20
    },
    selectCuisineHeading: {
        fontSize: 20,
        color: 'white',
        marginTop: 5,
    },
    dropdown: {
        height: 35,
        width: 150,
        borderColor: 'black',
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 8,
        backgroundColor: 'white',
        marginLeft: 35,
        marginTop: 2
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '500',
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});