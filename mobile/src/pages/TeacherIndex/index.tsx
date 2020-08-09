import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons as McIcon } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';

function TeacherIndex() {
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [showFilters, setShowFilters] = useState(false);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                setFavorites(JSON.parse(response)
                    .map((favoriteTeacher: Teacher) => favoriteTeacher.id)
                );
            }
        });
    }

    function handleToggleFilters() {
        setShowFilters(!showFilters);
    }

    async function handleFiltersSubmit() {
        loadFavorites();

        const response = await api.get('aulas', {
            params: {
                subject,
                week_day,
                time
            }
        });

        setTeachers(response.data);
        setShowFilters(false);
    }


    return (
        <View style={styles.container}>
            <PageHeader
                title="Professores disponíveis"
                headerRight={(
                    // aumentar o raio do botao
                    // adicionar efeito suave ao abrir gaveta de filtros
                    <BorderlessButton
                        onPress={handleToggleFilters}
                    >
                        <McIcon
                            name={ !showFilters ? "filter-plus" : "filter-minus" }
                            style={styles.filterIcon}
                        />
                    </BorderlessButton>
                )}
            >
                { showFilters && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            style={styles.input}
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            placeholder="Qual a matéria?"
                            placeholderTextColor="#c1bccc"
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da Semana</Text>
                                <TextInput
                                    style={styles.input}
                                    value={week_day}
                                    onChangeText={text => setWeekDay(text)}
                                    placeholder="Qual o dia?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    style={styles.input}
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    placeholder="Qual horário?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>
                        </View>

                        <RectButton
                            onPress={handleFiltersSubmit}
                            style={styles.submitButton}
                        >
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView
                style={styles.list}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {teachers.map((teacher: Teacher) => (
                    <TeacherItem
                        key={teacher.id}
                        teacher={teacher}
                        favorite={favorites.includes(teacher.id)}
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
        marginTop: -40,
    },

    filterIcon: {
        fontSize: 24,
        color: '#014a5c',
    },
    
    searchForm: {
        marginBottom: 24,
    },
    
    label: {
        color: '#ffcece',
        fontFamily: 'Poppins_400Regular'
    },
    
    input: {
        height: 54,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    inputBlock: {
        width: '48%'
    },
    
    submitButton: {
        backgroundColor: '#038eb8',
        height: 56,
        flexDirection: 'row',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    submitButtonText: {
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    },
});

export default TeacherIndex;