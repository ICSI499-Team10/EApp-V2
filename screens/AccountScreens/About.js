import React from 'react'; 
import { Text, View, StyleSheet, Button} from 'react-native'; 

const AboutScreen = props => { 
    return (
        <View style={styles.screen}>
            <Text>About Us Screen</Text>
        </View>   
    )
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export {AboutScreen}