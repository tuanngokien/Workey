import React from "react";
import {View, Text, StyleSheet, PermissionsAndroid} from "react-native";
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {DEVICE_HEIGHT, DEVICE_WIDTH, GOOGLE_MAPS_API_KEY} from "../../constants";
import MarkerIcon from "../../assets/images/icons/marker.png";
import {styles as titleStyles} from "../../containers/TopEmployers";
import {SimpleTopNavigator} from "../../components/TopNavigator";


const width = DEVICE_WIDTH * 0.9, height = DEVICE_HEIGHT * 0.27;

const styles = StyleSheet.create({
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
    onBack = () => {
        this.props.navigation.goBack();
    };


    render() {
        const companyLocationCoordinate = this.props.navigation.getParam("companyLocationCoordinate");
        const currentLocationCoordinate = this.props.navigation.getParam("currentLocationCoordinate");
        const initialRegion = this.props.navigation.getParam("initialRegion");
        return (
            <View>
                <SimpleTopNavigator title={"Map Direction"} rightIconName="md-wifi" onBack={this.onBack}/>
                <View>
                    <MapView
                        initialRegion={initialRegion}
                        showsUserLocation={true}
                        showsMyLocationButton={false}
                        ref={map => {
                            this.map = map
                        }}
                        style={{width: "100%", height: DEVICE_HEIGHT* 0.85}}>
                        <Marker icon={MarkerIcon} opacity={1} coordinate={companyLocationCoordinate}/>
                        <MapViewDirections
                            origin={currentLocationCoordinate}
                            destination={companyLocationCoordinate}
                            apikey={GOOGLE_MAPS_API_KEY}
                            strokeWidth={5}
                            strokeColor="#4285f4"/>
                    </MapView>
                </View>
            </View>
        )
    }
}