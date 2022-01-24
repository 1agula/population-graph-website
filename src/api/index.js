import axios from "axios";

const url = process.env.REACT_APP_API_URL;
const key = process.env.REACT_APP_API_KEY;

export const fetchPref = async () => {
  try {
    const {
      data: { result },
    } = await axios.get(`${url}/v1/prefectures`, {
      headers: { "X-API-KEY": key },
    });
    return result.map((pref) => pref.prefName);
  } catch (err) {
    console.log(err);
  }
};
