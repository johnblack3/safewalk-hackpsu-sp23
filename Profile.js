import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import walkerData from './walkerData.json'

const Profile = ({ closeModal, acceptWalker, rejectWalker }) => {

    const handleApprove = () => {
        closeModal();
        acceptWalker();
    };

    const handleReject = () => {
        closeModal();
        rejectWalker();
    };

    const walker = walkerData[Math.floor(Math.random() * walkerData.length - 1)];

    return (
        <View style={styles.container}>
            {/* <TouchableOpacity onPress={closeModal} style={styles.exitButton}>
                <Text style={styles.exitButtonText}>X</Text>
            </TouchableOpacity> */}
            <View style={styles.content}>
                <View style={styles.profilePicture}>
                    <View style={styles.circle} />
                </View>
                <Text style={styles.name}>{walker.name}</Text>
                <Text style={styles.username}>@{walker.username}</Text>
                <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>{walker.rating}</Text>
                    <Text style={styles.ratingLabel}>out of 5 stars</Text>
                </View>
                <Text style={styles.description}>
                    {walker.description}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleApprove} style={[styles.button, styles.approveButton]}>
                    <Text style={styles.buttonText}>Approve</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleReject} style={[styles.button, styles.rejectButton]}>
                    <Text style={styles.buttonText}>Reject</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
    },
    profilePicture: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 10,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 5,
    },
    username: {
        fontSize: 18,
        color: 'gray',
        marginBottom: 20,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    rating: {
        fontWeight: 'bold',
        fontSize: 24,
        marginRight: 10,
    },
    ratingLabel: {
        fontSize: 18,
        color: 'gray',
    },
    description: {
        fontSize: 18,
        marginHorizontal: 30,
        textAlign: 'center',
        marginBottom: 20,
    },
    exitButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    exitButtonText: {
        color: 'grey',
        fontSize: 18,
        fontWeight: 'bold',
    },
    circle: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        borderRadius: 75,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginHorizontal: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    approveButton: {
        backgroundColor: 'green',
    },
    rejectButton: {
        backgroundColor: 'red',
    },
});

export default Profile;
