import React, {useState, useEffect} from 'react'; 
import { 
  Text, 
  SafeAreaView, 
  StyleSheet, 
  Button, 
  FlatList, 
  RefreshControl, 
  ActivityIndicator,
  View,  
} from 'react-native'; 

import {fetchAdvisoryWeather} from '../../utils/dbFunctions';

const AdvisoryWeatherScreen = props => { 
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const getAdvisoryWeather = async () => { 
    fetchAdvisoryWeather()
      .then((dbResult) => { 
        console.log(dbResult["rows"]["_array"])
        setData(dbResult["rows"]["_array"])
        setLoading(false)
      })
      .catch(err => { 
        console.log(err)
      })
  }
  const onRefresh = () => { 
    setData([])
    getAdvisoryWeather()
  }

  const getItem = (item) => { 
    alert('Description: ' + item.description)
  }

  const ItemSeparatorView = () => { 
    return (
      <View 
        style={{
          height: 1, 
          width: '100%',
          backgroundColor: "#607D8B"
        }}
      />
    )
  }

  useEffect(() => {
    getAdvisoryWeather()
  },[])

  return (
    <SafeAreaView>
        <Button title="Go Back" onPress={() => props.navigation.goBack()}/>
        {isLoading ? <ActivityIndicator/> : (
          <SafeAreaView >
            <Text>Advisory Roads Screen</Text>
            <FlatList 
              style={{paddingBottom: 50}}
              data={data}
              keyExtractor={item => item.incidentId}
              renderItem={({item}) => (
                <Text onPress={() => getItem(item)}>{item.category + " " + item.title}</Text>
              )}
              ItemSeparatorComponent={ItemSeparatorView}
              scrollEnabled={true}
              refreshControl={ 
                <RefreshControl 
                  refreshing={isLoading}
                  onRefresh={onRefresh}
                />
              }
            />
          </SafeAreaView>
        )}
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export {AdvisoryWeatherScreen}