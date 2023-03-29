import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import Register from '../screens/Register';
import OiiKii_Logo from '../components/OiiKii_Logo';


const Stack = createStackNavigator();

export default function AuthNavigator(){

    return(

    <Stack.Navigator initialRouteName='Welcome' screenOptions={{

        title: <OiiKii_Logo />,
        headerTitleAlign:'center'
    
    }} >
        <Stack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={Register}/>
    </Stack.Navigator>
    );

}

