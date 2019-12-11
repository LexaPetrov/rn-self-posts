import  React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';


export const MainScreen = ({navigation}) => {
    const goToPost = () => {
        //console.log(navigation);
        navigation.navigate('Post')
        
    }

    return (
        <View style={styles.center}>
            <Text>MainScreen</Text>
            <Button title='Go to post' onPress={goToPost}/>
        </View>
    )
}

MainScreen.navigationOptions = {
    headerTitle: 'Мой блог'
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})