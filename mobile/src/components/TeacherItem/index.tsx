import React, { useState } from "react";
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { MaterialCommunityIcons as McIcon, Ionicons as IoIcon } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import api from "../../services/api";
import styles from './styles';

export interface Teacher {
    id: number;
    avatar: string,
    name: string,
    subject: string,
    short_bio: string,
    full_bio: string,
    cost: number,
    whatsapp: string,
};

interface TeacherItemProps {
    teacher: Teacher;
    favorite: boolean;
};

const TeacherItem: React.FunctionComponent<TeacherItemProps> = ({ teacher, favorite }) => {
    const [isFavorite, setIsFavorite] = useState<boolean>(favorite);

    function handleLinkToWhatsApp(){
        api.post('conexoes', {
            user_id: teacher.id,
        });
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
    }

    async function handleToggleFavorite() {
        const favorites = await AsyncStorage.getItem('favorites');
        let favoritesArray = favorites ? JSON.parse(favorites) : [];

        if (isFavorite) {
            const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === teacher.id;
            });
            favoritesArray.splice(favoriteIndex, 1);
            setIsFavorite(false);
        } else {
            favoritesArray.push(teacher);
            setIsFavorite(true);
        }

        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: teacher.avatar }}
                />

                <View style={styles.profileInfo}>
                <Text style={styles.name}>{teacher.name}</Text>
                <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                <Text style={styles.shortBio}>
                    {teacher.short_bio} {'\n'}
                </Text>

                {teacher.full_bio}
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ {teacher.cost},00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton
                        style={[
                            styles.favoriteButton,
                            // styles.unfavoriteButton
                        ]}
                        onPress={handleToggleFavorite}
                    >
                        {isFavorite ?
                            <IoIcon name="md-heart-dislike" style={styles.unfavoriteIcon} /> :
                            <IoIcon name="ios-heart" style={styles.favoriteIcon} />
                        }
                        
                    </RectButton>

                    <RectButton
                        style={styles.contactButton}
                        onPress={handleLinkToWhatsApp}
                    >
                        <McIcon name="whatsapp" style={styles.contactIcon} size={24} color="black" />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;