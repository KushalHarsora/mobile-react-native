import { Button, StyleSheet, TextInput, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FinalMap({ navigation }) {

    const [search, setSearch] = useState("");
    const [result, setResult] = useState(null);

    const initialRegion = {
    latitude: 19.04621483817537,
    longitude: 72.87109651632161,
    latitudeDelta: 0.002,
    longitudeDelta: 0.002,
    };

    useEffect(() => {
        console.log(result.lat);
        console.log(result.lon);
        console.log(result.name);
    }, [result])
    const getSearchLocation = async (query) => {
        try {
            const response = await axios.get(
                `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
            ).then(
                console.log("response got")
            );
            
            setResult(response.data[0]);
            
        } catch (error) {
            console.error(`Error is ${error}`);
        }
    }

    const navigateToLocation = async () => {
        await getSearchLocation(search);
    }

  return (
    <View style={Mapstyles.container}>
    <TextInput 
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setSearch(text)}
        placeholder="Search"
    />
    <Button title="Search for Location" onPress={navigateToLocation} />
      <MapView
        style={{flex: 1}}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
        mapType={"standard"}
      >
        <Marker
          coordinate={{ latitude: 19.046214, longitude: 72.871096 }}
          title={"You are Here"}
          image={require("../../assets/pin.png")}
        />
        {result && (
            <Marker 
            coordinate={{
                latitude: result.lat,
                longitude: result.lon
            }}
            title= { result.name }
            />
        )}
      </MapView>
    </View>
  );
}

const Mapstyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: "100%",
    height: "100%",
  },
});
