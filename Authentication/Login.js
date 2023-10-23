import react from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';


const Login = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>LOGIN</Text>
            <Button title='Login'  onPress={() => {
                navigation.navigate(
                    'Register'
                )   
            }}> </Button>
        </View>
    )
}

export default Login