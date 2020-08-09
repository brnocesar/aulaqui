import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons as McIcon } from '@expo/vector-icons';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

function TeacherIndex() {
    const [showFilters, setShowFilters] = useState(false);

    function handleToggleFilters() {
        setShowFilters(!showFilters);
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
                            placeholder="Qual a matéria?"
                            placeholderTextColor="#c1bccc"
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da Semana</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Qual o dia?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Qual horário?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>
                        </View>

                        <RectButton 
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
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
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