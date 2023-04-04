import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Register from './src/screens/Register';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import AuthNavigator from './src/navigation/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import CustomTextInput from './src/components/CustomTextInput';
import RadioButtonChoice from './src/components/RadioButtonChoice';

const options = [
  { label: "Passport", value: "Passport" },
  { label: "Residence Permit", value: "Residence Permit" },
  { label: "Birth Certificate", value: "Birth Certificate" },
];
export default function App() {
  return (
    <NavigationContainer>
    <AuthNavigator />
    </NavigationContainer>
    // <CustomTextInput />
    // <RadioButtonChoice values={options}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
