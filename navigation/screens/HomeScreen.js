import * as React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

export default function HomeScreen({navigation}) {
    return(
        <View>
            <Text style={styles.container}>
                Hello User
            </Text>
            <Button title='Navigator' onPress={() => navigation.navigate("Maps")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
        
    }
})