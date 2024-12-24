import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const LocationBar = () => {
    const [location, setLocation] = useState('');
    const [destination, setDestination] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setLocation(text)}
                value={location}
                placeholder="Enter location"
            />
            <TextInput
                style={styles.input}
                onChangeText={(text) => setDestination(text)}
                value={destination}
                placeholder="Enter destination"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '500px',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        // marginBottom: 10,
        marginTop: 10,
    },
});

export default LocationBar;