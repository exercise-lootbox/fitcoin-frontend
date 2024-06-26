import axios from "axios";

const BASE_API = process.env.REACT_APP_API_BASE;
const STRAVA_API = `${BASE_API}/api/strava`;

export const connectToStrava = async (userId: string, authToken: string) => {
  const config = {
    headers: { Authorization: `Bearer ${authToken}` },
  };
  let response = await axios.get(`${STRAVA_API}/connect/${userId}`, config);
  return response.data;
};

export const getStravaId = async (userId: string, authToken: string) => {
  const config = {
    headers: { Authorization: `Bearer ${authToken}` },
  };
  let response = await axios.get(`${STRAVA_API}/${userId}`, config);
  return response.data;
};

export const getRecentActivities = async (
  userId: string,
  authToken: string,
) => {
  const config = {
    headers: { Authorization: `Bearer ${authToken}` },
  };

  let response = await axios.get(`${STRAVA_API}/activities/${userId}`, config);
  return response.data;
};

export const getStravaActivity = async (
  stravaId: string,
  activityId: string,
) => {
  let response = await axios.get(
    `${STRAVA_API}/activities/${stravaId}/${activityId}`,
  );
  return response.data;
};
