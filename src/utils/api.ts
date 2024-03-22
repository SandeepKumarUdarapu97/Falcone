import axios, {AxiosResponse} from 'axios';

// Define your API base URL
const BASE_URL = 'https://findfalcone.geektrust.com/';

// function to fetch planets
export const fetchPlanets = async (): Promise<planetType[]> => {
  try {
    const response: AxiosResponse<planetType[]> = await axios.get(
      `${BASE_URL}planets`,
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching Planets:', error);
    throw error;
  }
};

// function to fetch vehicles
export const fetchVehicles = async (): Promise<vehicleType[]> => {
  try {
    const response: AxiosResponse<vehicleType[]> = await axios.get(
      `${BASE_URL}vehicles`,
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    throw error;
  }
};

// Function to fetch token
export const fetchToken = async (): Promise<fetchTokenResponseType> => {
    try {
      const response: AxiosResponse<fetchTokenResponseType> = await axios.post(
        `${BASE_URL}token`,
        {},
        {
          headers: {
            Accept: 'application/json',
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching token:', error);
      throw error;
    }
  };

// function to find falcone
export const findFalcone = async (
  requestBody: requestBodyType,
): Promise<findFalconeResponseType> => {
  try {
    const response: AxiosResponse<findFalconeResponseType> = await axios.post(
      `${BASE_URL}find`,
      requestBody,
    );
    return response.data;
  } catch (error) {
    console.error('Error find falcone:', error);
    throw error;
  }
};
