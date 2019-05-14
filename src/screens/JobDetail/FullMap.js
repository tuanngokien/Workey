import React from "react";
import {View, Text, StyleSheet, PermissionsAndroid} from "react-native";
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {DEVICE_HEIGHT, DEVICE_WIDTH, GOOGLE_MAPS_API_KEY} from "../../constants";
import MarkerIcon from "../../assets/images/icons/marker.png";
import {styles as titleStyles} from "../../containers/TopEmployers";


const width = DEVICE_WIDTH * 0.9, height = DEVICE_HEIGHT * 0.27;

const styles = StyleSheet.create({
    mapContainer: {                
        //overflow: 'hidden'
    },
    subtitle: {
        ...titleStyles.subtitleContainer,
        fontSize: 14,
        paddingTop: "0.5%",
        paddingBottom: "0.5%"
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    }
});

export default class MyMapView extends React.Component {
    state = {
        initialRegion: {
            latitude: 21.02369225,
            longitude: 105.80287405,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        distance: null,
        currentLocationCoordinate: null,
        companyLocationCoordinate: {latitude: 21.007070, longitude: 105.823130,},
    };

    async requestLocationPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'Workey',
                    'message': 'Workey want to access to your location '
                }
            );
            if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                alert("Location permission denied");
            }
        } catch (err) {
            console.warn(err)
        }
    }


    async componentDidMount() {
        await this.requestLocationPermission();
        navigator.geolocation.watchPosition(
            (position) => {
                const currentLocationCoordinate = position.coords;
                this.setState({currentLocationCoordinate});
                const {companyLocationCoordinate, initialRegion} = this.state;
                const centerCoordinate = {
                    ...initialRegion,
                    latitude: (companyLocationCoordinate.latitude + currentLocationCoordinate.latitude) / 2,
                    longitude: (companyLocationCoordinate.longitude + currentLocationCoordinate.longitude) / 2
                };
                console.log(centerCoordinate);
                this.map.animateToRegion(centerCoordinate);
                // this.setState({initialRegion: centerCoordinate})
            },
            (error) => console.log(error),
            {enableHighAccuracy: false, timeout: 200000, maximumAge: 1000},
        )
    }

    setDistance = (distance) => {
        distance = Math.round(distance * 10) / 10;
        this.setState({distance});
    };


    render() {
        const {currentLocationCoordinate, companyLocationCoordinate, initialRegion, distance} = this.state;
        // console.log(currentLocationCoordinate);
        return (
            <View>
                
                <View style={styles.mapContainer}>
                    <MapView
                        initialRegion={initialRegion}
                        showsUserLocation={true}
                        showsMyLocationButton={false}
                        ref={map => {
                            this.map = map
                        }}
                        style={{width: "100%", height: "100%"}}>
                        <Marker icon={MarkerIcon} opacity={1} coordinate={companyLocationCoordinate}/>
                        <MapViewDirections
                            origin={currentLocationCoordinate}
                            destination={companyLocationCoordinate}
                            apikey={GOOGLE_MAPS_API_KEY}
                            strokeWidth={5}
                            strokeColor="#4285f4"
                            onReady={result => {this.setDistance(result.distance)}}/>
                    </MapView>
                </View>
            </View>
        )
    }
}