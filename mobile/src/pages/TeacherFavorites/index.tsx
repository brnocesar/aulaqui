import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

function TeacherFavorites() {
    const [favorites, setFavorites] = useState<Teacher[]>([]);

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                setFavorites(JSON.parse(response));
            }
        });
    }

    useFocusEffect(
        React.useCallback(() => {
            loadFavorites();
        }, [])
    );

    return (
        <View style={styles.container}>
            <PageHeader
                title="Professores favoritos"
            />

            <ScrollView
                style={styles.list}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {favorites.map((favorite: Teacher) => (
                    <TeacherItem
                        key={favorite.id}
                        teacher={favorite}
                        favorite={true}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddddd',
    },

    list: {
        marginTop: -60,
    },
});

export default TeacherFavorites;