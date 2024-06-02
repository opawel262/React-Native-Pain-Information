import axios from "axios";

const BACKEND_URL = "http://138.68.115.211";

export async function createPainInfo(data) {
  try {
    const response = await axios.post(
      BACKEND_URL + "/api/pain-information/create",
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error while creating pain info:", error);
    throw error;
  }
}
export async function createAdditionalPainInfo(data) {
  try {
    const response = await axios.post(
      BACKEND_URL + "/api/additional-info/create",
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error while creating additional pain info:", error);
    throw error;
  }
}
export async function getPainInfo(code) {
  try {
    const response = await axios.get(
      BACKEND_URL + "/api/pain-information/" + code
    );
    return response.data;
  } catch (error) {
    console.error("Error while getting pain info:", error);
    throw error;
  }
}
export async function getAdditionalPainInfo(code) {
  try {
    const response = await axios.get(
      BACKEND_URL + "/api/additional-info/" + code
    );
    return response.data;
  } catch (error) {
    console.error("Error while getting additional pain info:", error);
    throw error;
  }
}
