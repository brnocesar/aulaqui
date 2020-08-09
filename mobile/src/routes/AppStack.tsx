import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import TeacherCreate from '../pages/TeacherCreate';
import StudentTabs from './StudentTabs';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Landing" component={Landing} />
                <Screen name="TeacherCreate" component={TeacherCreate} />
                <Screen name="Student" component={StudentTabs} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;