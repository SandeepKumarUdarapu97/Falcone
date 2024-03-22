import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  fetchPlanets,
  fetchToken,
  fetchVehicles,
  findFalcone,
} from './src/utils/api';

const App = () => {
  const [planets, setPlanets] = useState<planetType[]>([]);
  const [vehicles, setVehicles] = useState<vehicleType[]>([]);
  const [authToken, setAuthToken] = useState<fetchTokenResponseType>();
  const [findFalconeResponse, setFindFalconeResponse] =
    useState<findFalconeResponseType>();

  useEffect(() => {
    fetchPlanetsData();
    fetchVehiclesData();
  }, []);

  const fetchPlanetsData = async () => {
    try {
      const fetchedPlanets = await fetchPlanets();
      setPlanets(fetchedPlanets);
    } catch (error) {}
  };

  const fetchVehiclesData = async () => {
    try {
      const fetchedVehicles = await fetchVehicles();
      setVehicles(fetchedVehicles);
    } catch (error) {}
  };

  const fetchTokenData = async () => {
    try {
      const fetchedToken = await fetchToken();
      setAuthToken(fetchedToken);
    } catch (error) {}
  };

  const findFalconeLocal = async () => {
    if (authToken) {
      try {
        const body: requestBodyType = {
          token: authToken?.token,
          planet_names: planets.map(obj => obj.name),
          vehicle_names: vehicles.map(obj => obj.name),
        };
        const results = await findFalcone(body);
        setFindFalconeResponse(results);
      } catch (error) {}
    }
  };

  return (
    <View style={styles.main}>
      <Text>Sandeep</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
