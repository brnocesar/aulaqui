import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

function TeacherFavorites() {
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
                <TeacherItem />
                <TeacherItem />
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