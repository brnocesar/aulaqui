import React from "react";
import { View, Image, Text } from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { MaterialCommunityIcons as McIcon, Ionicons as IoIcon } from '@expo/vector-icons';
import styles from './styles';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://brnocesar.github.io/image/pixel-profile-picture.jpg' }}
                />

                <View style={styles.profileInfo}>
                <Text style={styles.name}>Nome do Professor</Text>
                <Text style={styles.subject}>Física</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                <Text style={styles.shortBio}>
                    BATATINHA BETERRABA CENOURINHA {'\n'}
                </Text>
                batatinha beterraba cenourinha batatinha beterraba cenourinha batatinha beterraba cenourinha batatinha beterraba cenourinha batatinha beterraba cenourinha batatinha beterraba cenourinha 
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ 500,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton
                        style={[
                            styles.favoriteButton,
                            // styles.unfavoriteButton
                        ]}
                    >
                        <IoIcon name="ios-heart" style={styles.favoriteIcon} />
                        {/* <IoIcon name="md-heart-dislike" style={styles.unfavoriteIcon} /> */}
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <McIcon name="whatsapp" style={styles.contactIcon} size={24} color="black" />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;