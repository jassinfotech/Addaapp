import AsyncStorage from '@react-native-async-storage/async-storage';
const BASE_URL = 'https://backend.progame.co.in';
let headers = {
  'Content-Type': 'application/json',
};

const setAuthToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    console.log('--------',token)
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
   console.log('removeItem done');
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

export { setAuthToken, postData, getData, BASE_URL };
