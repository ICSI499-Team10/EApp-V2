import React from 'react'; 
import { Text, View, StyleSheet, Button} from 'react-native'; 

const SettingsScreen = props => { 
  console.log(props)
    return (
        <View style={styles.screen}>
            <Text>Settings Screen</Text>
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

export {SettingsScreen}