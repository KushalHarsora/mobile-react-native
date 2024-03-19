import { StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

export default function MapScreen({ navigation }) {
  const initialRegion = {
    latitude: 19.04621483817537,
    longitude: 72.87109651632161,
    latitudeDelta: 0.002,
    longitudeDelta: 0.002,
  };

  return (
    <View style={Mapstyles.container}>
      <MapView
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
        mapType={"satellite"}
      >
        <Marker
          coordinate={{ latitude: 19.046214, longitude: 72.871096 }}
          title={"K J Somaiya Institute of Technology"}
          image={require("../../assets/pin.png")}
        />
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
