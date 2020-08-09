import React, { ReactNode } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons as McIcon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/images/header-logo.png';


interface PageHeaderProps {
    title: string;
    headerRight?: ReactNode;
    children?: ReactNode;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = ({ title, headerRight, children }) => {
    const { navigate } = useNavigation();

    function handleGoBack() {
        navigate('Landing');
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <McIcon name="keyboard-backspace" style={styles.backIcon} />
                </BorderlessButton>

                <Image source={logoImg} style={styles.logo} />
            </View>

            <View style={styles.header}>
                <Text style={styles.title}>
                    {title}
                </Text>

                {headerRight}
            </View>

            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: '#eb8d8d',
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    backIcon: {
        fontSize: 40,
        color: '#014a5c',
    },

    logo: {
        width: 72,
        resizeMode: 'contain',
    },
    
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    
    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 40,
    },
});

export default PageHeader;