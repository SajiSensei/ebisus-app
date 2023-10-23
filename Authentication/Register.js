import react from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Register = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>REGISTER</Text>
            <Button title='Register' onPress={() => {
                navigation.navigate(
                    'Login'
                )   
            }}> </Button>
        </View>
    )
}

export default Register