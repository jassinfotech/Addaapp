const BASE_URL = 'https://backend.progame.co.in';
export const signUp = async (name, email, mobile, password) => {
  try {
    const response = await fetch(`${BASE_URL}/user/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, mobile, password }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

export const signIn = async (value, password, type ) => {
  try {
    const response = await fetch(`${BASE_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({value, password, type }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
};


export const Verification = async (otp, email, mobile) => {
  try {
    const response = await fetch(`${BASE_URL}/user/otp-verification`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ otp, mobile, email }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
};