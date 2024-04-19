import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const BASE_URL = 'https://backend.progame.co.in';
let headers = {
  'Content-Type': 'application/json',
};

const setAuthToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    } else {
      delete headers['Authorization'];
    }
  } catch (error) {
    console.error('Error retrieving token from AsyncStorage:', error);
  }
};

const handleTokenExpiration =   (response) => {
  if (response.status === 401) {
    console.log('Token has expired. Redirecting to login page.');
    AsyncStorage.removeItem('token');
  }
  return response;
};

const postData = async (endpoint, data) => {
  await setAuthToken();
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    });
    return handleTokenExpiration(response).json();
  } catch (error) {
    throw error;
  }
};

const getData = async (endpoint) => {
  await setAuthToken();
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'GET',
      headers: headers,
    });
    return handleTokenExpiration(response).json();
  } catch (error) {
    throw error;
  }
};



const postDatafrom = async (endpoint, data) => {
  await setAuthToken(); 

  try {
      const token = await AsyncStorage.getItem('token'); 

      const response = await axios.post(`${BASE_URL}/${endpoint}`, data, {
        headers: { "Content-Type": "multipart/form-data", "Authorization": token }
      });

  } catch (error) {
      throw error; 
  }
};


export { setAuthToken, postData, getData, postDatafrom, BASE_URL };
