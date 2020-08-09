import React from 'react';
import { StyleSheet, View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import bgImg from '../../assets/images/teacher-create-bg.png';

function TeacherCreate() {
    const navigation = useNavigation();

    function handleNavigateBack() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={bgImg}
                style={styles.bg}
                resizeMode="contain"
            >
                <Text style={styles.title}>
                    Quer se cadastrar como professor?
                </Text>
                <Text style={styles.description}>
                    Por enquanto esta funcionalidade está disponível apenas na nossa plataforma web.
                </Text>
            </ImageBackground>

            <RectButton 
                style={styles.button}
                onPress={handleNavigateBack}
            >
                <Text style={styles.buttonText}>Tudo bem</Text>
            </RectButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eb8d8d',
        justifyContent: 'center',
        padding: 32,
    },
    bg: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 10,
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 2500,
    },
    description: {
        marginTop: 24,
        color: '#ffdbdb',
        fontSize: 18,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 320,
    },

    button: {
        marginVertical: 40,
        backgroundColor: '#038eb8',
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Archivo_700Bold'
    },
});

export default TeacherCreate;