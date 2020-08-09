import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Ionicons as IoIcon, MaterialCommunityIcons as McIcon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import landingImg from '../../assets/images/landing-logo.png';


function Landing() {
    const navigation = useNavigation();

    function handleNavigateToStudentPage() {
        navigation.navigate('Student');
    }

    function handleNavigateToTeacherCreatePage() {
        navigation.navigate('TeacherCreate');
    }

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.logo} />

            <Text style={styles.title}>
                <Text style={styles.titleBold}>
                    Bem-vindo {' '}
                </Text>
                a sua plataforma de estudos online
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton
                    onPress={handleNavigateToStudentPage}
                    style={[styles.button, styles.buttonStudent]}
                >
                    <IoIcon name="md-school" style={styles.iconStudent} />
                    <Text style={styles.buttonTextStudent}>Estudar</Text>
                </RectButton>

                <RectButton
                    onPress={handleNavigateToTeacherCreatePage}
                    style={[styles.button, styles.buttonTeacher]}
                >
                    <McIcon name="teach" style={styles.iconTeacher} />
                    <Text style={styles.buttonTextTeacher}>Lecionar</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de {'xxx'} conexões já realizadas {' '}
                <IoIcon name="ios-heart" style={styles.connectionsIcon} />
            </Text>

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    brnocesar.github.io
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eb8d8d',
        justifyContent: 'center',
        padding: 32,
        paddingTop: 160,
    },
    
    logo: {
        width: '100%',
        resizeMode: 'contain',
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#FFF',
        fontSize: 22,
        lineHeight: 30,
        marginTop: 120,
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
    },

    button: {
        height: 150,
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between',
    },

    iconStudent: {
        marginTop: -6,
        color: '#014a5c',
        fontSize: 44,
    },
    iconTeacher: {
        color: '#ffffff',
        fontSize: 32,
    },

    buttonTextStudent: {
        color: '#014a5c',
        fontFamily: 'Archivo_700Bold',
        fontSize: 20,
    },
    buttonTextTeacher: {
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize: 20,
    },

    buttonStudent: {
        backgroundColor: '#ebd265',
    },
    buttonTeacher: {
        backgroundColor: '#038eb8',
    },

    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: '#ffcece',
        fontSize: 13,
        lineHeight: 20,
        maxWidth: 150,
        marginTop: 40,
    },
    connectionsIcon: {
        color: '#ffcece',
        fontSize: 12,
    },

    footer: {
        marginTop: 120,
        // marginBottom: -64,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    footerText: {
        fontFamily: 'Poppins_400Regular',
        color: '#ffcece',
        fontSize: 16,
        lineHeight: 20,
    },
});

export default Landing;