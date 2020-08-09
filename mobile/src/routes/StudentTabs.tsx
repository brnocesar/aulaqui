import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons as McIcon } from '@expo/vector-icons';
import TeacherIndex from '../pages/TeacherIndex';
import TeacherFavorites from '../pages/TeacherFavorites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudentTabs() {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: 'row',
                    // alignItems: 'center',
                    justifyContent: 'center',
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                labelStyle: {
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 13,
                    marginLeft: 16,
                },
                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ebebf5',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#4e1616',
            }}
        >
            <Screen
                name="TeacherIndex"
                component={TeacherIndex}
                options={{
                    tabBarLabel: 'Professores',
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <McIcon name="teach" size={size} color={color} />
                        );
                    }
                }}
            />
            <Screen
                name="TeacherFavorites"
                component={TeacherFavorites}
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ color, size, focused }) => (
                            <McIcon name="heart" size={size} color={ focused ? '#eb8d8d' : color } />
                        ),
                }}
            />
        </Navigator>
    );
}

export default StudentTabs;